import React from "react";
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import SchoolIcon from '@material-ui/icons/School';
import Footer from './Footer'
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router-dom'
import ScrollArrow from "./ScrollArrow";
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import sizes from "./styles/sizes"

const styles = {
    root: {
        width: "100%"
    },
    main: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
        "& a": {
            textDecoration: "none",
            margin: "0 0 5% 0"
        },
    },
    header: {
        width: "100%",
        height: "60vh",
        display: "flex",
        [sizes.down("sm")]: {
            flexDirection: "column"
        }
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
        },
        [sizes.down("sm")]: {
            alignItems: "center",
            height: "50%",
            width: "100%",
            padding: "0 20px",
            textAlign: "center",
            "& h1": {
                fontSize: "2rem"
            },
            "& p": {
                fontSize: "1.0rem",
                paddingBottom: "5%"
            },
        }
    },
    picture: {
        width: "50%",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/I7.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        [sizes.down("sm")]: {
            width: "100%",
            height: "50%"
        }

    },
    certificationContainer: {
        display: "flex",
        alignItems: "center",
        margin: "5%",
        flexDirection: "column",
        [sizes.down("sm")]: {
            margin: "0",
        },
        "& div": {
            display: "flex",
            alignItems: "center",
            [sizes.down("sm")]: {
                flexDirection: "column",
                margin: "5% 0",
            }
        },
        "& h3": {
            marginRight: "10px"
        }
    },
    certificationBox: {
        width: "60%",
        borderBottom: "2px solid #1e4384",
        "& ul": {
            listStyleType: "none",
            width: "60%",
            [sizes.down("sm")]: {
                width: "100%",
                padding: 0,
                textAlign: "center",
                marginTop: 0
            },
            "& li": {
                "& h3": {
                    color: "#1e4384",
                    marginBottom: 0,
                    textTransform: "uppercase",
                    textDecoration: "none"
                }
            }
        },
        [sizes.down("sm")]: {
            width: "80%",
        }
    },
    certificationTitle: {
        width: "40%",
        color: "#1e4384",
        "& svg": {
            marginRight: "20px",
            color: "#1e4384"
        },
        [sizes.down("sm")]: {
            width: "100%",
        }
    },
    courseTitle: {
        width: "100%",
        justifyContent: "space-between",
        "& p": {
            fontWeight: "bold",
            marginBottom: 0,
            color: "#E69A02"
        }
    },
    textHeight: {
        color: "#132A52",
        lineHeight: "2em"
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
                        <p>I am a Frontend Developer and Designer</p>
                        <Link to='/contact'><Button style={{ backgroundColor: "#fcc60e" }} variant="contained">Let's Talk?</Button></Link>
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
                                    <p>Udemy</p>
                                </div>
                                <p className={classes.textHeight}>HOOKS | STATE MANAGEMENT | REACT ROUTER | JSS | CONTEXT API | MATERIAL UI | MORE</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Web Developer Bootcamp</h3>
                                    <p>Udemy</p>
                                </div>
                                <p className={classes.textHeight}>HTML5 | CSS3 | JAVASCRIPT | ASYNC JS | AJAX | BOOTSTRAP | NODE.JS | NPM | EXPRESS.JS | SQL | MONGO | MORE</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>CS50's Web Programming</h3>
                                    <p>Harvard University</p>
                                </div>
                                <p className={classes.textHeight}> HTML | CSS | PYTHON | DJANGO | SQL, MODELS AND MIGRATIONS | JAVASCRIPT | USER INTERFACES | TESTING | SCALABILITY</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>CS50</h3>
                                    <p>Harvard University</p>
                                </div>
                                <p className={classes.textHeight}>C | ARRAYS | ALGORITHMS | MEMORY | DATA STRUCTURES | PYTHON | SQL | FLASK | HTML | CSS | JAVASCRIPT</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.certificationBox}>
                        <div className={classes.certificationTitle}>
                            <WorkIcon />
                            <h2>Work Experience</h2>
                        </div>
                        <ul>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Creative Director</h3>
                                    <p>2019 - Present</p>
                                </div>
                                <p><i>YOGABODY Internationals</i></p>
                                <p className={classes.textHeight}>Responsible for all the visuals and graphics for the company. Printing, social media, web pages, and the e-Learning platforms.</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Graphic Designer</h3>
                                    <p>2018 - 2019</p>
                                </div>
                                <p><i>BR+ Comunicação</i></p>
                                <p className={classes.textHeight}>Campaign Development in social media and other platforms for the following ministries in Brazil: Cities, National Integration, Science, Technology, Innovation, and Communications.</p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Graphic Designer</h3>
                                    <p>2014 - 2018</p>
                                </div>
                                <p><i>Agência Terruá</i></p>
                                <p className={classes.textHeight}>Development of experiences and brand activation for important clients like APEX, Ministry of Tourism of Brazil, EMBRATUR, among others.</p>
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
                                <div className={classes.courseTitle}>
                                    <h3>MBA in Digital Marketing</h3>
                                    <p>2017 - 2018</p>
                                </div>
                                <p><i>IESB</i></p>
                            </li>
                            <li>
                                <div className={classes.courseTitle}>
                                    <h3>Bachelor in Advertising</h3>
                                    <p>2013 - 2016</p>
                                </div>
                                <p><i>UniCEUB</i></p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.certificationBox}>
                        <div className={classes.certificationTitle}>
                            <BuildIcon />
                            <h2>Skills</h2>
                        </div>
                        <ul>
                            <li>
                                <h3>Languages</h3>
                                <p className={classes.textHeight}>English | Spanish | Portuguese</p>
                            </li>
                            <li>
                                <h3>Technical</h3>
                                <p className={classes.textHeight}>JAVASCRIPT(ES6) | REACT.js | PYTHON | NODE.js | HTML5 | CSS3 | NPM | EXPRESS.js | DJANGO | SQL | GIT | ADOBE CREATIVE CLOUD | FIGMA</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href='https://www.dropbox.com/s/wjnubif8w4xxsta/GuiGomes_CV_2021.pdf?dl=0' target="_blank"><Button variant="contained">Check out my CV</Button></a>
            </div >
            <ScrollArrow position={props.position} />
            <Footer />
        </div >
    )
}

export default withStyles(styles)(About);