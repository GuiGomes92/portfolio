import React from "react";
import { withStyles } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import NavBar from './NavBar'
import Footer from './Footer'
import Button from '@material-ui/core/Button';

const styles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        margin: "auto"
    },
    formContainer: {
        borderRadius: "1%",
        backgroundColor: "#edf2f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "70%",
        margin: "5% auto",
        flexDirection: "column"
    },
    form: {
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
}));


function Contact(props) {

    const classes = styles();

    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.formContainer}>
                <form className={classes.form} noValidate autoComplete="off">
                    <h1>Let's work together</h1>
                    <div className={classes.inputContainer}>
                        <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} fullWidth />
                        <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} fullWidth />
                    </div>
                    <Input placeholder="Company" inputProps={{ 'aria-label': 'description' }} fullWidth />
                    <TextField
                        id="outlined-multiline-static"
                        label="Leave a Message"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                        fullWidth
                    />
                    <Button variant="outlined">Send</Button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default withStyles(styles)(Contact);