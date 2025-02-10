
//import photo from '../assets/images/coffeCards/Doppio.jpg'
import {ArrayCoffe} from '../ArrayCard';
import Card from './Card'
import Section3 from './Section3';
import '../assets/styles/Section2.scss'
const cardcoffe = ArrayCoffe.slice(ArrayCoffe.length - 6, ArrayCoffe.length + 1)

export default function Section2() {
    
    return (
        <div className="section-2-container">
            <h2 className="section-2-title">Explore the Coffee World</h2>
            <div className="section-2-card-container">
                {
                    cardcoffe.map(card =>(
                        <Card 
                        classN = {"card-coffe-position-1"}
                        id = {card.id} 
                        key={card.id}
                        name = {card.name}
                        description = {card.description}
                        price = {card.price}
                        photo = {card.photo}
                        />
                    ))
                }
            </div>
            <Section3 />
        </div>
    )
}