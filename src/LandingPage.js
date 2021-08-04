import React from "react";
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Tools from './Tools'
import Footer from './Footer'

const styles = {
    videoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        backgroundColor: "#edf2f4",
        "& p": {
            fontSize: "40px",
            margin: 0
        }
    }
}

function LandingPage(props) {
    const { classes } = props;
    return (
        <div>
            <NavBar />
            <div className={classes.videoContainer}>
                <p>Hello, I'm a Frontend developer based in Barcelona</p>
            </div>
            <Tools />
            <Footer />
        </div>
    )
}

export default withStyles(styles)(LandingPage);