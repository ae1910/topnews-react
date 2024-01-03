import { useEffect, useState } from "react";
import { StyledBtn } from "./styles/gototop.styles";
import up from "../img/icons8-chevron-up-60.png"
import { isVisible } from "@testing-library/user-event/dist/utils";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        window.scrollTo({top: 0, left:0, behavior: "smooth"})
    }

    const listenToScroll = () => {
        let hiddenAt = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > hiddenAt) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    }, []);
     
    return ( 
        <StyledBtn>
            {isVisible && (
            <div className="top-btn" onClick={handleClick}>
                <img className="icon" src={up}/>
            </div>
            )}
        </StyledBtn>
     );
}
 
export default GoToTop;