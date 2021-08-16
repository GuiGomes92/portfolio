import React from "react"
import { withStyles } from "@material-ui/styles";
import testimonials from './TestimonialText'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'
import "./styles/Testimonial.css";

const url = process.env.PUBLIC_URL

function Testimonial(props) {
    const { classes } = props
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5100}
        >
            {testimonials.map(t => (
                <div>
                    <img src={url + "/imgs/testimonial/" + t.picture} />
                    <div className="myCarousel">
                        <h3>{t.name} <a target="_blank" href={t.linkedin}><LinkedInIcon /></a></h3>
                        <h4>{t.title}</h4>
                        <p>
                            {t.text}
                        </p>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default Testimonial;