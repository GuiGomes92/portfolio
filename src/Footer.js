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
        height: "15%",
        top: "auto",
        display: "flex",
        marginTop: "auto",
        justifyContent: "center",
        backgroundColor: "#424242"
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        padding: "0 10%",
        height: "100%",
        justifyContent: "space-between",
        "& a": {
            color: "white"
        }
    },
    github: {
        marginRight: "15px"
    }
};


function Footer(props) {
    const { classes } = props;
    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="body1">Copyright ©2021 All rights reserved | Coded and Designed by Guilherme Gomes</Typography>
                <div>
                    <a href="https://github.com/GuiGomes92" target="_blank"><GitHubIcon className={classes.github} /></a>
                    <a href="https://www.linkedin.com/in/gomesgui/" target="_blank"><LinkedInIcon /></a>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Footer);