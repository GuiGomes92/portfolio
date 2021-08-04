import React from "react";
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import Footer from './Footer'

const styles = {
    root: {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    text: {
        width: "50%",
        "& h1": {
            textAlign: "center"
        }
    }
}

function About(props) {
    const { classes } = props;
    return (
        <div>
            <NavBar />
            <div className={classes.root}>
                <div className={classes.text}>
                    <h1>It's nice to meet you</h1>
                    <p>My career started in 2014 when I got my first internship at Agência Terruá in Brasília, Brazil. I worked there for two years as an intern and got hired as an Art Director after getting my advertising bachelor’s degree in 2016, and stayed at the agency for another two years. During the time I worked there I developed my skills working for important clients such as Government of Maranhão, APEX Brasil, Embratur, among others.</p>
                    <p> In 2018, BR+ comunicação offered me the Art Director position at their headquarters to work with Ministry of Cities, Ministry of National Integration, Children’s Hospital in Brasília and Ministry of Science, Technology, Innovation and Communications. We would work on graphics for printing, metrics, campaigns and events but our main job was to produce pieces for their social media accounts, including planning.</p>
                    <p>   In 2019, right after moving to Barcelona, YOGABODY internationals invited me to join their team as Graphic Designer. Among many of my responsibilities that the job required, I had the chance to design the new e-learning platform for the Yoga Teacher’s College and improve my skills in UI and UX design.</p>
                </div>
                <Button variant="outlined">Download my CV</Button>
            </div>
            <Footer />
        </div >
    )
}

export default withStyles(styles)(About);