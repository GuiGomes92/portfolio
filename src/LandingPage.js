import React from "react";
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Tools from './Tools'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Areas from './Areas'

const styles = {
    root: {
        fontFamily: 'Roboto',
        height: "100%"
    },
    videoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "92vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/code.jpg'})`,
        backgroundSize: "cover",
        "& p": {
            fontSize: "40px",
            margin: 0,
            color: "white"
        }
    }
}

function LandingPage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.videoContainer}>
                <p>Hello, I'm a Frontend developer based in Barcelona</p>
            </div>
            <Areas />
            <Tools />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default withStyles(styles)(LandingPage);