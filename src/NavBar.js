import React from "react"
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        height: "60px",
        backgroundColor: "#14213d",
        color: "white",
        "& a": {
            textDecoration: "none",
            color: "inherit"
        },
        "& a:hover": {
            color: "black"
        }
    },
    links: {
        display: "flex",
        width: "15%",
        justifyContent: "space-between"
    }
}

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.navbar}>
            <Link to="/">
                <Typography variant="h6">
                    Guilherme Gomes
                </Typography>
            </Link>
            <div className={classes.links}>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default withStyles(styles)(NavBar);