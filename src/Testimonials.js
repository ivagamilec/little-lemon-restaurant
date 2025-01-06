import CardTestimonial from "./CardTestimonial.js"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Testimonials = () => {

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

    <section id="testimonials">
            <div className="testimonialsdiv">
            <div className="testimonials-title">
                <h1>Testimonials</h1>
            </div>

            <div className="testimonials">
                <CardTestimonial image="./decko1.jpg" name="Finn" comment="I had the best pizza ever here! service was amazing, place looks even better!" rating="Excellent 5/5" />
                <CardTestimonial image="./decko2.jpg" name="Marcus" comment="Amazing service and very tasty food." rating="Excellent 5/5"/>
                <CardTestimonial image="./baka.jpg" name="Tiana" comment="I always enjoy eating lasagna here with my husband." rating="Excellent 5/5"/>
            </div>
        </div>
    </section>
    )
}

export default Testimonials;