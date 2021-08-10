import React, { useState } from "react"
import { withStyles } from '@material-ui/styles'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        height: "10vh",
        backgroundColor: "#5E548E",
        color: "white",
        "& a": {
            color: "inherit",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        },
        "& a:hover": {
            color: "black"
        }
    },
    links: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        fontSize: "5rem",
        justifyContent: "space-evenly",
        "& svg": {
            fontSize: "inherit"
        }
    },
    linkActive: {
        borderBottom: "15px solid black",
        paddingBottom: "4px"
    },
    overlay: {
        height: "100vh",
        transition: "0.3s ease-in-out",
        flexDirection: "column",
    },
    logo: {
        width: '413px',
        height: '129px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/Asset1.png'})`,
        backgroundSize: "40%",
        backgroundPosition: "left center",
        backgroundRepeat: 'no-repeat'
    },
    closeIcon: {
        alignSelf: "flex-end",
        position: "absolute",
        marginTop: "30px"
    }
}

function NavBar(props) {
    const [open, setOpen] = useState(false)
    const { classes } = props;

    return (
        <div className={open ? `${classes.navbar} ${classes.overlay}` : classes.navbar}>
            {!open &&
                <Link to="/">
                    <div className={classes.logo}></div>
                </Link>
            }
            {
                open &&
                <div className={classes.links}>
                    <NavLink exact activeClassName={classes.linkActive} to="/work/design" onClick={() => setOpen(!open)}>Design <ChevronRightIcon /> </NavLink>
                    <NavLink exact activeClassName={classes.linkActive} to="/work/development" onClick={() => setOpen(!open)}>Development <ChevronRightIcon /></NavLink>
                    <NavLink exact activeClassName={classes.linkActive} to="/about" onClick={() => setOpen(!open)}>About <ChevronRightIcon /></NavLink>
                    <NavLink exact activeClassName={classes.linkActive} to="/contact" onClick={() => setOpen(!open)}>Contact <ChevronRightIcon /></NavLink>
                </div>
            }
            {open ? <CloseIcon className={classes.closeIcon} onClick={() => setOpen(!open)} /> : <MenuIcon onClick={() => setOpen(!open)} />}
        </div >
    )
}

export default withStyles(styles)(NavBar);