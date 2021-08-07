import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#e5e5e5"
    },
    area: {
        width: "400px",
        display: "flex",
        padding: "10%",
        margin: "10%",
        flexDirection: "column",
        justifyContent: "center",
        height: "200px",
        backgroundColor: "#fca311",
        borderRadius: "10px",
        color: "white",
        "& h4": {
            textTransform: "uppercase"
        },
        "& h2": {
            textTransform: "uppercase"
        }
    }
}

function Areas(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.area} >
                <h4>Design</h4>
                <h2>Make it beautiful</h2>
            </div>
            <div className={classes.area}>
                <h4>Development</h4>
                <h2>Make it work</h2>
            </div>
        </div>
    )

}

export default withStyles(styles)(Areas);