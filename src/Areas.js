import React from 'react'
import { withStyles } from '@material-ui/styles'
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const url = process.env.PUBLIC_URL
const design = ['AI.svg', 'ID.svg', 'PS.svg', 'Figma.svg']
const development = ['html.svg', 'css.svg', 'js.svg', 'react.svg', 'python.svg', 'node.svg', "django.svg"]

const styles = {
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    area: {
        width: "30%",
        display: "flex",
        padding: "5%",
        flexDirection: "column",
        height: "60%",
        backgroundColor: "#1e4384",
        borderRadius: "10px",
        color: "white",
        "& h4": {
            textTransform: "uppercase"
        },
        "& h2": {
            textTransform: "uppercase",
            margin: 0,
            fontSize: "3rem",
            paddingBottom: "15px",
            borderBottom: "5px solid #fcc60e",
        },
        "& a": {
            textDecoration: "none",
            display: "flex",
            alignSelf: "center",
            marginBottom: "auto",
            marginTop: "auto"
        }
    },
    span: {
        fontSize: "80px",
        color: "#fcc60e"
    },
    skills: {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: " repeat(4, 1fr)",
        gridTemplateRows: " repeat(2, 1fr)",
        columnGap: "20px",
        rowGap: "35px",
        justifyItems: "center",
        alignItems: "center",
        display: "flex",
        marginTop: "10%",
        justifyContent: "space-around",
        flexWrap: "wrap",
        "& img": {
            width: "50px"
        }
    },
    dev: {
        "& img:last-child": {
            width: "90px"
        },
        "& img:nth-child(6)": {
            width: "100px"
        }
    },
    design: {
        "& img:last-child": {
            width: "35px"
        }
    }
}

function Areas(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.area} >
                <BrushIcon />
                <h4>Design /></h4>
                <h2>Make it <span className={classes.span}>beautiful</span></h2>
                <div className={`${classes.skills} ${classes.design}`}>
                    {design.map(logo => (
                        <img src={`${url}/Design/${logo}`} />
                    ))}
                </div>
                <Link to='/work/design'><Button variant="contained">Check my design work</Button></Link>
            </div>
            <div className={classes.area}>
                <CodeIcon /> <h4>Development /></h4>
                <h2>Make it <br /><span className={classes.span}>work</span></h2>
                <div className={`${classes.skills} ${classes.dev}`}>
                    {development.map(logo => (
                        <img src={`${url}/Development/${logo}`} />
                    ))}
                </div>
                <Link to='/work/development'><Button variant="contained">Check my development work</Button></Link>
            </div>
        </div >
    )

}

export default withStyles(styles)(Areas);