import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'

const items = ["HTML", "CSS", "Javascript", "Python", "React", "NPM"]

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        height: "500px",
        "& h4": {
            paddingBottom: "5%"
        }
    },
    tools: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    tool: {
        width: "200px",
        height: "200px",
        border: "1px solid black",
        borderRadius: "5%",
    }
}

function Tools(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h4">What help me built awesome things:</Typography>
            <div className={classes.tools}>
                {items.map(item =>
                    <div className={classes.tool}>
                        <Typography variant="h6">
                            {item}
                        </Typography>
                    </div>
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(Tools);