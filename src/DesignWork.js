import React from 'react'
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Footer from './Footer'
import { design, development } from './utils/work'
import { useParams, Link } from "react-router-dom";

const url = process.env.PUBLIC_URL

const styles = {
    root: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: `${getRows()}`
    },
    square: {
        backgroundColor: "grey",
        backgroundSize: "cover"
    }
}

function getRows(area) {
    let string = ''
    if (area === 'design') {
        for (let i = 0; i < design.length / 2; i++) {

            string = string + " 45vh"
        }
        return string
    }
    for (let i = 0; i < development.length / 2; i++) {
        string = string + " 45vh"
    }
    return string
}

function getArea(area, classes) {
    if (area === 'design') {
        return design.map(item => (
            <Link to={`/work/design/${item.name}`} className={classes.square} style={{ backgroundImage: `url(${url + '/imgs/'}${item.name}/${item.cover})` }}>
                <div>{item.name}</div>
            </Link>
        ))
    }
    return development.map(item => (
        <Link to={`/work/development/${item.name}`} className={classes.square} style={{ backgroundImage: `url(${url + '/imgs/'}${item.name}/${item.cover})` }}>
            <div>{item.name}</div>
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
            <Footer />
        </div>
    )
}

export default withStyles(styles)(DesignWork);