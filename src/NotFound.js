import React from "react";
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Footer from './Footer'

const styles = {}

function NotFound(props) {
    const { classes } = props;
    return (
        <div>
            <NavBar />
            <h1>Ops, I don't know what you're talking about</h1>
            <Footer />
        </div>
    )
}

export default withStyles(styles)(NotFound);