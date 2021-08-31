import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { withStyles } from '@material-ui/core/styles';
import sizes from "./styles/sizes"


const styles = {
    arrow: {
        display: "flex",
        backgroundColor: "white",
        padding: "20px",
        margin: "20px",
        borderRadius: "100%",
        position: "fixed",
        right: 0,
        bottom: 0,
        zIndex: 10000,
        justifySelf: "right",
        opacity: 0,
        transition: "opacity 0.5s"
    },
}

function scroll() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function ScrollArrow(props) {
    const { classes } = props;
    return (
        <div style={{ opacity: props.position > 200 ? 1 : 0 }} className={classes.arrow}>
            <ArrowUpwardIcon onClick={() => scroll()} />
        </div>
    )
}

export default withStyles(styles)(ScrollArrow);