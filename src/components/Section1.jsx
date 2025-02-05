import Header from "./Header"
import '../assets/styles/Section1.scss'



export default function Section1() {
    
    return (
        <>
        <div className="section-1-container">
            <Header />
            <div className="headings-container">
                <h1 className="headings-title">Power up with coffee</h1>
                <p className="headings-text">Start your exciting day with a cup of Brew Coffee</p>
            </div>
            <button className="section-1-btn">Explore Us</button>
        </div>
        
        </>
    )
}