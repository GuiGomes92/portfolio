import React from "react";
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Footer from './Footer'

const styles = {}

function Work(props) {
    const { classes } = props;
    return (
        <div>
            <NavBar />
            <p>Work goes here</p>
            <Footer />
        </div>
    )
}

export default withStyles(styles)(Work);