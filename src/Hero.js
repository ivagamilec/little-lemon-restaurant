import Button from "./Button"

const Hero = () => {
    return(
        <div className="herodiv">
            <div className="herodiv1">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button content="Reserve a table" destination={"/bookingpage"}/>
            </div>

            <div className="herodiv2">
            <img src="./Hero image.png" ></img>
            </div>
        </div>
    )
}

export default Hero;