import { Link } from 'react-router-dom'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import AppleLogo from '../assets/images/applelogo.svg'
import BurgerMenu from './BurgerMenu';
import CustomButtonMenu from './CustomButtonMenu';
import '../assets/styles/Header.scss'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
        <div className="header-container">
           <Link to ="" className='logo-header'>Filtro</Link>
           <nav className="navigation-container">
                <Link to =" " className='nav-link'>Home</Link>
                <Link to ="ExploreUs" className='nav-link'>Explore Us</Link>
                <Link to ="Brands" className='nav-link'>Brands</Link>
                <Link to ="Contactus" className='nav-link'>Contact us</Link>
           </nav>
           <CustomButtonMenu 
           onClick={()=> setIsMenuOpen(true)} 
           text ={'Menu'} icon={AiOutlineMenu} 
           classP={'nav-burger-menu-btn'} 
           />
           <div className='header-buttons-container'>
            <CustomButtonMenu text ={'Sign up/Login'} />
            <CustomButtonMenu text ='Get the app' photo={AppleLogo} classP={'get-the-app'} to =" " />
           </div>
        </div>
        <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}