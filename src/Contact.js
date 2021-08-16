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
        backgroundColor: "#f6f6f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "80%",
        margin: "5% auto",
        flexDirection: "column"
    },
    form: {
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        "& h1": {
            textTransform: "uppercase",
            color: "#1e4384"
        }
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
                    <div>
                        <h1>Let's work together /></h1>
                        <p>Fill the form below or write to gui@guibgomes.com</p>
                    </div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        required
                        email
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Leave a Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                    <Button type="submit" variant="outlined">Send</Button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default withStyles(styles)(Contact);