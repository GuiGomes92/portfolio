import React from "react";
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import LanguageIcon from '@material-ui/icons/Language';
import SchoolIcon from '@material-ui/icons/School';
import Footer from './Footer'
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router-dom'
import ScrollArrow from "./ScrollArrow";

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
            paddingBottom: "5%"
        }
    },
    picture: {
        width: "50%",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/I7.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    certificationContainer: {
        display: "flex",
        width: "100vw",
        alignItems: "center",
        margin: "5%",
        flexDirection: "column",
        "& div": {
            display: "flex",
            alignItems: "center",
            "& h3": {
                marginRight: "10px"
            }
        }
    },
    certificationBox: {
        width: "80%",
        borderBottom: "1px solid black",
        "& ul": {
            width: "60%",
            "& li": {
                "& h3": {
                    marginBottom: 0,
                    textTransform: "uppercase",
                    textDecoration: "none"
                },
            }
        }
    },
    institution: {
        justifySelf: "end"
    },
    certificationTitle: {
        width: "40%",
        "& svg": {
            marginRight: "20px",
            color: "#1e4384"
        }
    },
    courseTitle: {
        width: "100%",
        justifyContent: "space-between"
    },
    headerLink: {

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
                        <CodeIcon />
                        <h1>Hello, my name is Gui. </h1>
                        <p>I help companies achieve their goals by writing clean and maintainable code beautifully designed. </p>
                        <div className={classes.headerLink}>
                            <a href='https://www.dropbox.com/s/wjnubif8w4xxsta/GuiGomes_CV_2021.pdf?dl=0' target="_blank"><Button variant="contained">Download CV</Button></a>
                            <Link to='/contact'><Button variant="contained">Contact</Button></Link>
                        </div>
                    </div>
                </div>
                <div className={classes.certificationContainer}>
                    <div className={classes.certificationBox}>
                        <div className={classes.certificationTitle}>
                            <SchoolIcon />
                            <h2>Certifications</h2>
                        </div>
                        <ul>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>React Bootcamp</h3>
                                    <p className={classes.institution}>Udemy</p>
                                </div>
                                <p>HOOKS | STATE MANAGEMENT | REACT ROUTER | JSS | CONTEXT API | MATERIAL UI | MORE</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Web Developer Bootcamp</h3>
                                    <p>Udemy</p>
                                </div>
                                <p>HTML5 | CSS3 | JAVASCRIPT | ASYNC JS | AJAX | BOOTSTRAP | NODE.JS | NPM | EXPRESS.JS | SQL | MONGO | MORE</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>CS50's Web Programming</h3>
                                    <p>Harvard University</p>
                                </div>
                                <p> HTML | CSS | PYTHON | DJANGO | SQL, MODELS AND MIGRATIONS | JAVASCRIPT | USER INTERFACES | TESTING | SCALABILITY</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>CS50</h3>
                                    <p>Harvard University</p>
                                </div>
                                <p>C | ARRAYS | ALGORITHMS | MEMORY | DATA STRUCTURES | PYTHON | SQL | FLASK | HTML | CSS | JAVASCRIPT</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.certificationBox}>
                        <div className={classes.certificationTitle}>
                            <SchoolIcon />
                            <h2>Work Experience</h2>
                        </div>
                        <ul>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Creative Director</h3>
                                    <p>2019 - Present</p>
                                </div>
                                <p><i>YOGABODY Internationals</i></p>
                                <p>Responsible for all the visuals and graphics for the company. Printing, social media, web pages, and the e-Learning platforms.</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Graphic Designer</h3>
                                    <p>2018 - 2019</p>
                                </div>
                                <p><i>BR+ Comunicação</i></p>
                                <p>Campaign Development in social media and other platforms for the following ministries in Brazil: Cities, National Integration, Science, Technology, Innovation, and Communications.</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Graphic Designer</h3>
                                    <p>2014 - 2018</p>
                                </div>
                                <p><i>Agência Terruá</i></p>
                                <p>Development of experiences and brand activation for important clients like APEX, Ministry of Tourism of Brazil, EMBRATUR, among others.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.certificationBox}>
                        <div className={classes.certificationTitle}>
                            <SchoolIcon />
                            <h2>University</h2>
                        </div>
                        <ul>
                            <li>
                                <h3>MBA in Digital Marketing</h3>
                                <p>IESB</p>
                            </li>
                            <li>
                                <h3>Bachelor in Advertising</h3>
                                <p>UniCEUB</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.certificationBox}>
                        <div className={classes.certificationTitle}>
                            <SchoolIcon />
                            <h2>Skills</h2>
                        </div>
                        <ul>
                            <li>
                                <h3>Languages</h3>
                                <p>English | Spanish | Portuguese</p>
                            </li>
                            <li>
                                <h3>Technical</h3>
                                <p>JAVASCRIPT(ES6) | REACT.js | PYTHON | NODE.js | HTML5 | CSS3 | NPM | EXPRESS.js | DJANGO | SQL | GIT | ADOBE CREATIVE CLOUD | FIGMA</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <ScrollArrow />
            <Footer />
        </div >
    )
}

export default withStyles(styles)(About);