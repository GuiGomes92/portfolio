import React from "react";
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import LanguageIcon from '@material-ui/icons/Language';
import SchoolIcon from '@material-ui/icons/School';
import Footer from './Footer'
import { Link } from 'react-router-dom'

const styles = {
    main: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
        "& a": {
            margin: "3em 0"
        },
    },
    header: {
        width: "100%",
        height: "100vh",
        display: "flex",
    },
    headerText: {
        width: "50%",
        backgroundColor: "#1e4384",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        padding: "0 10%",
        "& h1": {
            fontSize: "3rem",
            color: "#fcc60e",
            marginBottom: 0
        },
        "& p": {
            fontSize: "1.5rem",
            borderBottom: "2px solid #fcc60e",
            paddingBottom: "5%"
        }
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& h1": {
            justifyText: "left",
            width: "50%",
            height: "150px",
            display: "flex",
            alignItems: "center"
        },
        "& p": {
            width: "50%",
            letterSpacing: "0.1rem",
            lineHeight: "1.5"
        }
    },
    picture: {
        width: "50%",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/I7.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    presentation: {
        width: "80%"
    },
    certification: {
        display: "flex",
        textAlign: "center",
        "& ul": {
            listStyleType: "none",
            "& h2": {
                textTransform: "uppercase"
            },
            "& h4": {
                marginBottom: 0
            },
            "& li": {
                backgroundColor: "#1e4384",
                borderRadius: "10px",
                color: "white",
                textAlign: "left",
                margin: "20px 0",
                padding: "20px 20px",
                fontSize: "1rem",
                lineHeight: "1.6"
            }
        }

    },
    language: {
        width: "100%",
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "grey",
        justifyContent: "center"
    },
    languageTitle: {
        textAlign: "center"
    },
    languageItems: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between"
    }
}

function About(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.main}>
                <div className={classes.header}>
                    <div className={classes.picture}></div>
                    <div className={classes.headerText}>
                        <h1>Hello, my name is Gui /> </h1>
                        <p>I help companies achieve their goals by writing maintainable code and beautiful design. </p>
                    </div>
                </div>
                <div className={classes.certification}>
                    <ul>
                        <SchoolIcon />
                        <h2>Certifications /> </h2>
                        <li>
                            <h4>CS50's Introduction to Computer Science</h4>
                            <p>Harvard University</p>
                        </li>
                        <li>
                            <h4>CS50's Web Programming with Python and Javascript</h4>
                            <p>Harvard University</p>
                        </li>
                        <li>
                            <h4>Web Developer Bootcamp</h4>
                            <p>Udemy</p>
                        </li>
                        <li>
                            <h4>React Development Bootcamp</h4>
                            <p>Udemy</p>
                        </li>
                    </ul>
                </div>
                <div className={classes.language}>
                    <div className={classes.languageTitle}>
                        <LanguageIcon />
                        <h2>I speak</h2>
                    </div>
                    <div className={classes.languageItems}>
                        <p>Portuguese</p>
                        <p>English</p>
                        <p>Spanish</p>
                    </div>
                </div>
                <a href='https://www.dropbox.com/s/wjnubif8w4xxsta/GuiGomes_CV_2021.pdf?dl=0' target="_blank"><Button variant="outlined">Download my CV</Button></a>
                <Link to='/contact'><Button variant="outlined">Contact</Button></Link>
            </div>
            <Footer />
        </div >
    )
}

export default withStyles(styles)(About);