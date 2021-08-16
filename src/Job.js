import React, { useEffect } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import { design, development } from './utils/work'
import { useParams, Redirect } from "react-router-dom";

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
    textContainer: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "white"
    },
    text: {
        padding: "0 80px",
        width: "50%",
        "& h1": {
            color: "#fcc60e",
            margin: "0 0 20px 0",
            textTransform: "uppercase"
        },
        "& p": {
            margin: 0,
            lineHeight: "2em",
            textAlign: "justify",
            paddingBottom: "20px",
            borderBottom: "5px solid #1e4384"
        }
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
                    <h1>{data.name}</h1>
                    <p>{data.text}</p>
                    {'tools' in data &&
                        <div>
                            <h3>Tools:</h3>
                            <ul>
                                {data.tools.map(tool => (<li>{tool}</li>))}
                            </ul>
                        </div>
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
            <Footer />
        </div>
    )


}

export default withStyles(styles)(Job);