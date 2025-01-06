import './App.css';

const Card = ({image, text, name}) => {
    return(
        <div className ="card">

            <div className ="card-image">
                <img src={image} alt='Food'></img>
            </div>

            <div className = "card-name">
                <h3>{name}</h3>
                <h4>$3.56</h4>
            </div>

            <p>{text}</p>

            <div className="order">
                <a href="#">Order a delivery !</a>
                <img src="/VeloLL.png" alt='DeliveryLogo'></img>
            </div>
        </div>
    )
}

export default Card;