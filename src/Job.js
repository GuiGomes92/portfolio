import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import { design, development } from './utils/work'
import { useParams } from "react-router-dom";

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
        backgroundPosition: "center"
    },
    title: {
        display: "flex",
    },
    text: {
        width: "50vw"
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
    return (
        <div>
            <NavBar />
            <div className={classes.title}>
                <div className={classes.text}>
                    <h1>{data.name}</h1>
                    <p>{data.text}</p>
                </div>
                <div className={classes.boxes} style={{ backgroundImage: `url(${url}/imgs/${data.name.split(' ').join('')}/${data.cover})` }}></div>
            </div>
            <div className={classes.imgs}>
                {data.imgs.map(pic => (
                    <div className={classes.boxes} style={{ backgroundImage: `url(${url}/imgs/${data.name.split(' ').join('')}/${pic})` }}></div>
                )
                )}
            </div>
            <Footer />
        </div>
    )


}

export default withStyles(styles)(Job);