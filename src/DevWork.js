import React from 'react'
import { withStyles } from '@material-ui/styles'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const styles = {
    root: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "45vh 45vh 45vh"
    },
    square: {
        backgroundColor: "grey"
    }
}

function DevWork(props) {
    const { classes } = props
    return (
        <div>
            <NavBar />
            <div className={classes.root}>
                <Link to="/" className={classes.square}><div><h2>Yoga Gravity Timer</h2></div></Link>
                <div className={classes.square}><h2>React Todo List</h2></div>
                <div className={classes.square}><h2>Dad Jokes</h2></div>
                <div className={classes.square}><h2>YelpCamp</h2></div>
                <div className={classes.square}><h2>React Colors</h2></div>
            </div>
            <Footer />
        </div>
    )
}

export default withStyles(styles)(DevWork);