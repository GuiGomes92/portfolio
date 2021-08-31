import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import logos from './utils/logoClients';
import sizes from "./styles/sizes";

const url = process.env.PUBLIC_URL
const clientLogos = ['AG.svg', 'Brazil.svg', 'GRU.svg', 'HCB.svg', 'Maranhao.svg', 'Roche.svg', 'Souza Cruz.svg', 'Terruá.svg', 'YB.svg']

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    },
    clients: {
        padding: "0 80px",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& img": {
            margin: "0 20px",
            width: "200px",
            [sizes.down("sm")]: {
                width: "150px",
                margin: "20px",
            }
        },
        [sizes.down("sm")]: {
            height: "unset",
            padding: "0",
        }
    }
}

function Tools(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h4">Trusted by:</Typography>
            <div className={classes.clients}>
                {clientLogos.map(logo => (
                    <img src={`${url}/Clients/${logo}`} />
                ))}
            </div>
        </div>
    )
}

export default withStyles(styles)(Tools);