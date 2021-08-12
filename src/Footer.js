import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'

const url = process.env.PUBLIC_URL

const styles = {
    appBar: {
        height: "25%",
        top: "auto",
        bottom: "-200",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#1e4384"
    },
    toolbar: {
        display: "flex",
        padding: "0 40px",
        height: "100%",
        justifyContent: "space-between",
        "& img": {
            width: "10%"
        }
    },
    social: {
        "& svg": {
            fontSize: "1.5em"
        }
    },
    links: {
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& a": {
            color: "white",
            textTransform: "uppercase",
            textDecoration: "none",
            fontWeight: "bold"
        }
    }
};


function Footer(props) {
    const { classes } = props;
    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <img src={url + "/LogoWhite.png"}></img>
                <div className={classes.links}>
                    <Link to='/'>Home</Link>
                    <Link to='/design'>Design Work</Link>
                    <Link to='/development'>Development Work</Link>
                    <Link to='/contact'>Get in contact</Link>
                </div>
                <div className={classes.social}>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <Typography variant="body1">
                        gui@guibgomes.com
                    </Typography>
                    <Typography variant="body1">
                        Guilherme Gomes. 2021
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Footer);