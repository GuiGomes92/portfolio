import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'

const styles = {
    appBar: {
        height: "15%",
        top: "auto",
        bottom: "-200",
        display: "flex",
        justifyContent: "center"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    social: {
        "& svg": {
            fontSize: "1.5em"
        }
    },
    links: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        "& a": {
            textTransform: "uppercase"
        }
    }
};


function Footer(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar position="absolute" color="#ffffff" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
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
        </div>
    )
}

export default withStyles(styles)(Footer);