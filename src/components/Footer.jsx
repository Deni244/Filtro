import { Link } from 'react-router-dom'
import Insta from '../assets/images/InstaLogoFooter.svg'
import Facebook from '../assets/images/FbLogoFooter.svg'
import Twitter from '../assets/images/twitterLogoFooter.svg'
import Pinterest from '../assets/images/pinterestLogoFooter.svg'
import LOGO from '../assets/images/LOGO.svg'
import '../assets/styles/Footer.scss'
export default function Footer() {
    
    return (
        <div className="footer-container">
            <h2 className="footer-title">Get in Touch with Us</h2>
            <div className="footer-links">
                <div className="footer-section-1">
                    <h3 className="footer-section-title">Merchandise</h3>
                    <Link>T-shirts</Link>
                    <Link>Caps</Link>
                    <Link>Masks</Link>
                </div>
                <div className="footer-section-2">
                <h3 className="footer-section-title">Franchise</h3>
                    <Link>Coffee Outlet</Link>
                    <Link>Coffee Vending Machine</Link>
                    <Link>Contact Us</Link>
                </div>
                <div className="footer-section-3">
                <h3 className="footer-section-title">About Us</h3>
                    <Link>Promotions</Link>
                    <Link>Customer Care</Link>
                    <Link>Legal Information</Link>
                    <Link>Achievements</Link>
                    <Link>Careers</Link>

                </div>
                <div className="footer-section-4">
                <h3 className="footer-section-title">Follow Us</h3>
                    <div className="footer-logo-link-container">
                    <a href=""><img className='footer-logo' src={Insta} alt="instagram" /></a>
                    <a href=""><img className='footer-logo' src={Facebook} alt="facebook" /></a>
                    <a href=""><img className='footer-logo' src={Twitter} alt="twitter" /></a>
                    <a href=""><img className='footer-logo' src={Pinterest} alt="pinterest" /></a>
                    </div>
                </div>
            </div>
            <hr className='footer-line' />
            <div className='footer-logo-container'>
                <img src={LOGO} alt="" />
                <h1>Filtro</h1>
                <span>All Rights Reserved</span>
            </div>
        </div>
    )
}