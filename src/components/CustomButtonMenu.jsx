import { Link } from "react-router-dom";
import '../assets/styles/CustomButtonMenu.scss'


const CustomButtonMenu = ({ onClick, icon: Icon, text, photo, classP, to })=>{
    const Component = to ? Link : 'button';
    return (
        <Component 
            onClick={onClick}
            to={to}
            className={`castom-button-menu ${classP || ''}`}>
                {Icon && <Icon size={24} />}
                {photo && <img src={photo} alt="img" />}
                {text && <span>{text}</span>}
            
        </Component>
    )
}

export default CustomButtonMenu;