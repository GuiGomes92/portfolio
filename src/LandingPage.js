import React from "react";
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Tools from './Tools'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Areas from './Areas'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import ScrollArrow from './ScrollArrow'
import sizes from "./styles/sizes";

const styles = {
    root: {
        fontFamily: 'Roboto',
        height: "100%"
    },
    videoContainer: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "80px",
        justifyContent: "center",
        height: "92vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/illustration.svg'})`,
        backgroundSize: "60%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        [sizes.down("sm")]: {
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundPosition: "center bottom",
            backgroundSize: "100%",
            justifyContent: "end",
            padding: 0
        },
        "& h2": {
            fontSize: "3.5vw",
            lineHeight: "1.5em",
            fontWeight: "100",
            margin: "0 0 20px 0",
            color: "#1E4384",
            [sizes.down("sm")]: {
                textAlign: "center",
                fontSize: "5.5vw"
            },
        },
        "& p": {
            fontSize: "30px",
            margin: 0,
            color: "white"
        },
        "& a": {
            textDecoration: "none"
        },
    },
    firstTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#fcc60e"
    },
    trustedBy: {
        padding: "5% 0"
    },
}

function LandingPage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.videoContainer}>
                <h2><span className={classes.firstTitle}>Hello! My name is Gui. </span><br /> I make people happier <br />through code and design.</h2>
                <Link to='/contact'>
                    <Button variant="contained" color="primary">
                        Contact Now
                    </Button>
                </Link>
            </div>
            <Areas />
            <div className={classes.trustedBy}>
                <Tools />
                <Testimonial />
            </div>
            <ScrollArrow position={props.position} />
            <Footer />
        </div>
    )
}

export default withStyles(styles)(LandingPage);