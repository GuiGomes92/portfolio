import React, { useState } from "react"
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import { Link, NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        height: "10vh",
        backgroundColor: "transparent",
        position: "relative",
        color: "#3d405b",
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
        fontSize: "1rem",
        width: "30%",
        justifyContent: "space-between"
    },
    linkActive: {
        borderBottom: "4px solid black",
        paddingBottom: "4px"
    }
}

function NavBar(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [open, setOpen] = useState(false)
    const { classes } = props;

    return (
        <div className={classes.navbar}>
            <Link to="/">
                <Typography variant="h6">
                    Guilherme Gomes
                </Typography>
            </Link>
            {isMobile ? <MenuIcon onClick={() => setOpen(!open)} /> :
                <div className={classes.links}>
                    <NavLink exact activeClassName={classes.linkActive} to="/work/design">Design</NavLink>
                    <NavLink exact activeClassName={classes.linkActive} to="/work/development">Development</NavLink>
                    <NavLink exact activeClassName={classes.linkActive} to="/about">About</NavLink>
                    <NavLink exact activeClassName={classes.linkActive} to="/contact">Contact</NavLink>
                </div>
            }
        </div>
    )
}

export default withStyles(styles)(NavBar);