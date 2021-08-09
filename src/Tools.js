import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import logos from './utils/logoClients'

const url = process.env.PUBLIC_URL

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
        backgroundSize: "cover",
        borderRadius: "5%",
    }
}

function Tools(props) {
    const { classes } = props;
    logos.map(logo => console.log(logo))
    return (
        <div className={classes.root}>
            <Typography variant="h4">Trusted by:</Typography>
            <div className={classes.tools}>
                {logos.map(logo =>
                    <div className={classes.tool} style={{ backgroundImage: `url(${url + logo})` }}></div>
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(Tools);