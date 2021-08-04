import React from "react";
import { withStyles } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import NavBar from './NavBar'
import Footer from './Footer'

const styles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


function Contact(props) {

    const classes = styles();

    return (
        <div>
            <NavBar />
            <div className={classes.root}>
                <form className={classes.form} noValidate autoComplete="off">
                    <div>
                        <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
                        <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
                    </div>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default withStyles(styles)(Contact);