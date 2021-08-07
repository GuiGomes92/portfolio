import React from "react"
import { withStyles } from "@material-ui/styles";
import testimonials from './TestimonialText'

const styles = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    testimonial: {
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        width: "300px",
        marginBottom: "20px",
        borderRadius: "10px",
        margin: "20px",
        backgroundColor: "#f8f9fa",
        textAlign: "justify",
        fontSize: "14px"
    },
    signature: {
        display: "flex",
        flexDirection: "column",
        justifySelf: "flex-end",
        "& p": {
            fontSize: "1rem",
            margin: 0,
        },
        "& h6": {
            fontSize: "1.5rem",
            margin: "0 0 10px 0"
        }
    }
}

function Testimonial(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            {testimonials.map(t => (
                <div className={classes.testimonial}>
                    <div className={classes.signature}>
                        <h6>{t.name}</h6>
                        <p>{t.title}</p>
                    </div>
                    <p>{t.text}</p>
                </div>
            ))}
        </div>
    )
}

export default withStyles(styles)(Testimonial);