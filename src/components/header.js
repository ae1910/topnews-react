import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation, createSearchParams } from 'react-router-dom';
import { StyledHeader } from './styles/header.styles';
import searchBtn from '../img/icons8-search-30.png';

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const [text, setText] = useState();
    const [width, setWidth] = useState(window.innerWidth);
    
    const handleOutsideClick = (event) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          event.target !== buttonRef.current
        ) {
          setOpen(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== "") {
        navigate({pathname: '/results', search: createSearchParams({ query: text, sort:"relevancy" }).toString(), replace: true });
            setText("");
            if(width < 600) {
                setOpen(false);
            }
        }
    }

    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <StyledHeader pathname={pathname}>
            {width >= 600 && (
                <form className="search" id="search-bar" onSubmit={(e) => handleSubmit(e)}>
                    <input 
                    className="search-txt" 
                    id="newsQuery"
                    type="text"
                    name="searchtxt"
                    placeholder="Search..."
                    value={text}
                    onChange={e => setText(e.target.value)}/>
                    <button className="submit" ><img src={searchBtn} alt=""/></button>
                </form>
            )}
            <h1 className="title-item">
                <Link className="title" to="/">topnews.</Link>
            </h1>

            {width < 600 && (
                <button className="mobile-toggle" ref={buttonRef} open={open} onClick={() => setOpen(!open)} aria-controls="primary-nav" aria-expanded={open}></button>
            )} 

            <Navbar open={open} width={width} menuRef={menuRef} text={text} setText={setText} handleSubmit={handleSubmit}>
                <NavItem path='/category/general' text='General' setOpen={setOpen} width={width}/>
                <NavItem path='/category/business' text='Business' setOpen={setOpen} width={width}/>
                <NavItem path='/category/entertainment' text='Entertainment' setOpen={setOpen} width={width}/>
                <NavItem path='/category/health' text='Health' setOpen={setOpen} width={width}/>
                <NavItem path='/category/science' text='Science' setOpen={setOpen} width={width}/>
                <NavItem path='/category/sports' text='Sports' setOpen={setOpen} width={width}/>
                <NavItem path='/category/technology' text='Technology' setOpen={setOpen} width={width}/>
            </Navbar>
            <hr></hr>
        </StyledHeader>
    );
}

function Navbar(props) {
    return (
        <nav>
            <ul id="primary-nav" className="nav-items" ref={props.menuRef} data-visible={props.open} onSubmit={(e) => props.handleSubmit(e)}>
                {props.width < 600 && (
                    <li className="first-search">
                        <form className="nav-search" id="nav-search-bar">
                            <input 
                            className="search-txt" 
                            id="newsQuery" 
                            type="text" 
                            placeholder="Search..."
                            value={props.text}
                            onChange={e => props.setText(e.target.value)}/>
                            <button className="submit"><img src={searchBtn} alt=""/></button>
                        </form>  
                    </li>
                )}
                {props.children}
            </ul>
        </nav>
    )
}

function NavItem(props) {
    return (
        <li>
            {props.width >= 600 ?
                <Link className="nav-item" to={props.path}>{props.text}</Link>
            :   <Link className="nav-item" to={props.path} onClick={() => props.setOpen(false)} onBlur={() => props.setOpen(false)} onFocus={() =>props.setOpen(true)}>{props.text}</Link>
            }
        </li>
    )
}
 
export default Header;