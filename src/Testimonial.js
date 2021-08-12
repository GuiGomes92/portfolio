import React from "react"
import { withStyles } from "@material-ui/styles";
import testimonials from './TestimonialText'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const url = process.env.PUBLIC_URL

const styles = {

    myCarousel: {
        background: "#fafafa",
        marginTop: "-6%",
        width: "54%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "6%",
        paddingBottom: "8%",
        paddingLeft: "5%",
        paddingRight: "5%",
        border: "1px solid #ddd",
        height: "286px",
        "& h3": {
            color: "#222",
            fontWeight: "100",
            letterSpacing: "0.2px",
            marginBottom: "4px",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "17px"
        },
        "& h4": {
            textTransform: "uppercase",
            marginTop: 0,
            paddingTop: 0,
            fontWeight: 500,
            color: "#787878",
            fontSize: "14px",
        },
        "& p": {
            fontWeight: "100 !important",
            lineHeight: "29px !important",
            color: "#222",
            fontSize: "15px",
            fontFamily: "sans-serif",
            maxHeight: "67px",
        },
        "& p:before": {
            content: "“",
            color: "#aaa",
            fontSize: "26px",
            fontFamily: "monospace",
            fontWeight: "100",
        },

        "& p:after": {
            content: "”",
            color: "#aaa",
            fontSize: "26px",
            fontFamily: "monospace",
            fontWeight: 100,
            lineHeight: 0
        }
    },
    carousel: {
        "& img": {
            width: "139px !important",
            borderRadius: "50%"
        }
    }

}


function Testimonial(props) {
    const { classes } = props
    return (
        <Carousel
            className={classes.carousel}
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
                    <div className={classes.myCarousel}>
                        <h3>{t.name}</h3>
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

export default withStyles(styles)(Testimonial);