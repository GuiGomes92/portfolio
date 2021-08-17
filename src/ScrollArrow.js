import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { withStyles } from '@material-ui/core/styles';

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
        zIndex: 100,
        justifySelf: "right"
    }
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
        <div className={classes.arrow}>
            <ArrowUpwardIcon onClick={() => scroll()} />
        </div>
    )
}

export default withStyles(styles)(ScrollArrow);