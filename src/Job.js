import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import { design, development } from './utils/work'
import { useParams } from "react-router-dom";
import ScrollArrow from './ScrollArrow'
import GitHubIcon from '@material-ui/icons/GitHub';
import sizes from "./styles/sizes"

const url = process.env.PUBLIC_URL

const styles = {
    imgs: {
        display: "flex",
        flexWrap: "wrap"
    },
    boxes: {
        width: "50%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [sizes.down("sm")]: {
            width: "100%",
            height: "50vh"
        }
    },
    title: {
        display: "flex",
    },
    textContainer: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        [sizes.down("sm")]: {
            flexDirection: "column",
        }
    },
    text: {
        padding: "0 80px",
        width: "50%",
        [sizes.down("sm")]: {
            padding: "0 40px",
            width: "unset",
            marginBottom: "20px"
        },
        "& h1": {
            color: "#1e4384",
            margin: "0 0 20px 0",
            textTransform: "uppercase"
        },
        "& p": {
            margin: 0,
            lineHeight: "2em",
            textAlign: "justify",
            paddingBottom: "20px",
        },
        "& a": {
            color: "#1e4384",
        },
    },
    type: {
        textTransform: "uppercase",
        color: "#fcc60e",
    },
    list: {
        textDecoration: "none"
    }
}

function Job(props) {
    const area = useParams().area
    const job = useParams().job

    const { classes } = props;
    let data = {}

    if (area === 'design') {
        for (let key in design) {
            if (design[key].name.split(' ').join('') === job) {
                data = design[key]
            }
        }
    } else {
        for (let key in development) {
            if (development[key].name.split(' ').join('') === job) {
                console.log(development[key])
                data = development[key]
            }
        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `${data.name}`;
    });

    return (
        <div>
            <NavBar />
            <div className={classes.textContainer}>
                <div className={classes.text}>
                    {'type' in data &&
                        <h4 className={classes.type}>{data.type}</h4>
                    }
                    <h1>{data.name}</h1>
                    <p>{data.text}</p>
                    {'sourceCode' in data &&
                        <a href={data.sourceCode}>< GitHubIcon /></a>
                    }
                </div>
                <div className={classes.boxes} style={{ backgroundImage: `url(${url}/imgs/${data.name.split(' ').join('')}/${data.cover})` }}></div>
            </div>
            <div className={classes.imgs}>
                {data.imgs.map(pic => (
                    <div className={classes.boxes} style={{ backgroundImage: `url(${url}/imgs/${data.name.split(' ').join('')}/${pic})` }}></div>
                )
                )}
            </div>
            <ScrollArrow position={props.position} />
            <Footer />
        </div>
    )


}

export default withStyles(styles)(Job);