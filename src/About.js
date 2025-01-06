import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About =() => {

    const location = useLocation();

    useEffect(() => {
       if (location.hash) {
       const element = document.querySelector(location.hash);
       if (element) {
           element.scrollIntoView({ behavior: "smooth" });
        }
       }
       }, [location]);

    return(
        <section id="about">
            <div className = "about">

            <div className ="about-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a famiy owned Italian restaurant. Based in Chicago, but every dish comes from out grandma's kitchen.</p>
            </div>
            <div className="about-images">
                <img src="/restaurant.jpg" id="about-one" alt="restaurant"></img>
                <img src="/Mario and Adrian A.jpg" id="about-two" alt="chef"></img>
            </div>
            </div>
        </section>
    )
}

export default About;