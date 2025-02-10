import { AiOutlineCloseCircle } from "react-icons/ai";
import CustomButtonMenu from './CustomButtonMenu';
import AppleLogo from '../assets/images/applelogo.svg'
import '../assets/styles/BurgerMenu.scss'

export default function BurgerMenu({isOpen, onClose}) {
    
    return (
        <div onClick={() => onClose()} className={`burger-menu-shadow ${isOpen ? "block" : "hidden"}`}>
            <div className="burger-menu-container">
                
                <AiOutlineCloseCircle className="burger-menu-btn-close" onClick={() => onClose()} size={40} color="#A0583C" />
                <ul className="burger-menu-list">
                    <li><CustomButtonMenu classP={'burger-menu-btn'} text = "Home" to = " " /></li>
                    <li><CustomButtonMenu classP={'burger-menu-btn'} text = "Explore Us" to = "ExploreUs" /></li>
                    <li><CustomButtonMenu classP={'burger-menu-btn'} text = "Brands" to = "Brands" /></li>
                    <li><CustomButtonMenu classP={'burger-menu-btn'} text = "Contact us" to = "ContactUs" /></li>
                    <li className="burger-menu-btn-sing"><CustomButtonMenu classP={'burger-menu-btn'} text = "Sign up/Login" /></li>
                    <li className="burger-menu-btn-get"><CustomButtonMenu classP={'burger-menu-btn'} text ='Get the app' photo={AppleLogo} to =" " /></li>
                   
                   
                </ul>
            </div>
        </div>
    )
}