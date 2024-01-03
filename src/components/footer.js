import {StyledFooter} from './styles/footer.styles';

const Footer = () => {
    return ( 
        <StyledFooter>
            <hr />
            <div className="footer-top">
                <a className="footer-title" href="index.html">topnews.</a>
                <div className="newsletter-container">
                    <p>NEWSLETTER SIGNUP</p>
                    <p>Be the first to know!</p>
                    <form className="input-container">
                        <input type="text" id="email" name="email" placeholder="Email address"/>
                        <button>SIGN UP</button>
                    </form>
                </div>
            </div>
            <div className="footer-text">
                <p>&copy; 2022 THE TOP. ALL RIGHTS RESERVED</p>
                <p><a href="#">ABOUT THE TOP</a>  |  <a href="#">CONTACT US</a>  |  <a href="#">PRIVACY POLICY</a>  |  <a href="#">TERMS OF SERVICE</a></p>
            </div>
        </StyledFooter>
    );
}
 
export default Footer;