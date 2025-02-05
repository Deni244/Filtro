import { Link } from 'react-router-dom'
import AppleLogo from '../assets/images/applelogo.svg'

import '../assets/styles/Header.scss'

export default function Header() {
    
    return (
        <>
        <div className="header-container">
           <Link to ="/" className='logo-header'>Filtro</Link>
           <nav className="navigation-container">
                <Link to ="/" className='nav-link'>Home</Link>
                <Link to ="/ExploreUs" className='nav-link'>Explore Us</Link>
                <Link to ="/Brands" className='nav-link'>Brands</Link>
                <Link to ="/Contactus" className='nav-link'>Contact us</Link>
           </nav>
            <button className='sing-up-log-in'>Sign up/Login</button>
            <button className='get-the-app'><img className='get-the-app-img' src={AppleLogo} alt="apple" />Get the app</button>
        </div>
        </>
    )
}