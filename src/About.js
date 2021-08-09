import React from "react";
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import Footer from './Footer'

const styles = {
    main: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& h1": {
            textAlign: "center"
        },
        "& p": {
            width: "50%",
            letterSpacing: "0.1rem",
            lineHeight: "1.5"
        }
    },
    picture: {
        width: "80%",
        height: "300px",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/I7.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    presentation: {
        width: "80%",
        display: "flex",
        justifyContent: "space-between"
    },
    certification: {
        width: "50%",
        "& ul": {
            listStyleType: "none",
            "& h2": {
                textTransform: "uppercase"
            },
            "& li": {
                fontSize: "1rem",
                lineHeight: "1.6"
            }
        }

    }
}

function About(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.main}>
                <div className={classes.text}>
                    <h1>It's nice to meet you</h1>
                    <div className={classes.picture}></div>
                    <div className={classes.presentation}>
                        <p>My career started in 2014 when I got my first internship at Agência Terruá in Brasília, Brazil. I worked there for two years as an intern and got hired as an Art Director after getting my advertising bachelor’s degree in 2016, and stayed at the agency for another two years. During the time I worked there I developed my skills working for important clients such as Government of Maranhão, APEX Brasil, Embratur, among others.
                            <br /> In 2018, BR+ comunicação offered me the Art Director position at their headquarters to work with Ministry of Cities, Ministry of National Integration, Children’s Hospital in Brasília and Ministry of Science, Technology, Innovation and Communications. We would work on graphics for printing, metrics, campaigns and events but our main job was to produce pieces for their social media accounts, including planning.
                            In 2019, right after moving to Barcelona, YOGABODY internationals invited me to join their team as Graphic Designer. Among many of my responsibilities that the job required, I had the chance to design the new e-learning platform for the Yoga Teacher’s College and improve my skills in UI and UX design.</p>
                        <div className={classes.certification}>
                            <ul>
                                <h2>Certifications</h2>
                                <li>Introduction to Computer Science</li>
                                <li>Web Programming with Python and Javascript</li>
                                <li>Graphic Design</li>
                                <li>Branding</li>
                                <li>Art Direction</li>
                            </ul>
                            <ul>
                                <h2>I speak</h2>
                                <li>Portuguese</li>
                                <li>English</li>
                                <li>Spanish</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Button variant="outlined">Download my CV</Button>
            </div>
            <Footer />
        </div >
    )
}

export default withStyles(styles)(About);