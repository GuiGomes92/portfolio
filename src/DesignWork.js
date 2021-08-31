import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Footer from './Footer'
import { design, development } from './utils/work'
import { useParams, Link } from "react-router-dom";
import ScrollArrow from './ScrollArrow';
import sizes from "./styles/sizes"

const url = process.env.PUBLIC_URL

const styles = {
    root: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: `${getRows()}`,
        [sizes.down("sm")]: {
            display: "flex",
            flexDirection: "column"
        },
        "& a": {
            textDecoration: 'none'
        }
    },
    square: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        [sizes.down("sm")]: {
            height: "50vh"
        },
    },
    overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        opacity: 0,
        backgroundColor: "#1e4384",
        "&:hover": {
            transition: "opacity 0.2s",
            opacity: 1
        },
        "& h1": {
            border: "1px solid #fcc60e",
            padding: "20px 40px",
            color: "#fcc60e",
            margin: 0
        }
    }
}

function getRows(area) {
    let string = ''
    if (area === 'design') {
        for (let i = 0; i <= design.length / 2 - 1; i++) {
            string = string + " 45vh"
        }
        return string
    } else {
        for (let i = 0; i <= development.length / 2 - 1; i++) {
            string = string + " 45vh"
        }
    }
    return string
}

function getArea(area, classes) {
    if (area === 'design') {

        return design.map(item => (
            <Link
                key={item.name.split(' ').join('')}
                to={`/work/design/${item.name.split(' ').join('')}`} className={classes.square} style={{ backgroundImage: `url(${url + '/imgs/'}${item.name.split(' ').join('')}/${item.cover})` }
                }>
                <div className={classes.overlay}><h1>{item.name}</h1></div>
            </Link >
        ))
    }
    return development.map(item => (
        <Link to={`/work/development/${item.name.split(' ').join('')}`} className={classes.square} style={{ backgroundImage: `url(${url + '/imgs/'}${item.name.split(' ').join('')}/${item.cover})` }}>
            <div className={classes.overlay}><h1>{item.name}</h1></div>
        </Link >
    ))

}

function DesignWork(props) {
    getRows(useParams().area);
    const { classes } = props

    return (
        <div>
            <NavBar />
            <div className={classes.root}>
                {getArea(useParams().area, classes)}
            </div>
            <ScrollArrow position={props.position} />
            <Footer />
        </div>
    )
}

export default withStyles(styles)(DesignWork);