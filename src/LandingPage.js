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

const styles = {
    root: {
        fontFamily: 'Roboto',
        height: "100%"
    },
    videoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "80px",
        alignItems: "center",
        height: "92vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/code.jpg'})`,
        backgroundSize: "cover",
        "& h2": {
            textAlign: "center",
            fontSize: "60px",
            fontWeight: "100",
            margin: "0 0 20px 0",
            color: "white"
        },
        "& p": {
            fontSize: "30px",
            margin: 0,
            color: "white"
        },
        "& a": {
            textDecoration: "none"
        }
    },
    trustedBy: {
        padding: "5% 0"
    }
}

function LandingPage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.videoContainer}>
                <h2>I turn ideas into reality <br />through code and design</h2>
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
            <ScrollArrow />
            <Footer />
        </div>
    )
}

export default withStyles(styles)(LandingPage);