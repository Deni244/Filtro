import Sturbucks from '../assets/images/Stackbukslogo.svg'
import Nescafe from '../assets/images/NescafeLogo.svg'
import TimHortons from '../assets/images/Timhortins.svg'
import DunkinDonuts from '../assets/images/DunkinDonuts.svg'
import '../assets/styles/Section3.scss'


export default function Section3() {
    
    return (
        <div className="section-3-container">
            <h2 className="section-3-title">Brands We Work With</h2>
            <div className="section-3-brands-container">
                <img className='Sturbucks' src={Sturbucks} alt="Sturbucks" />
                <img className='Nescafe' src={Nescafe} alt="Nescafe" />
                <img className='TimHortons' src={TimHortons} alt="TimHortons" />
                <img className='DunkinDonuts' src={DunkinDonuts} alt="DunkinDonuts" />
            </div>
        </div>
    )
}