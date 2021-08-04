import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    appBar: {
        top: 'auto',
        bottom: 0,
    }
};


function Footer(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar position="sticky" color="#ffffff" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="body1">
                        Guilherme Gomes. 2021
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Footer);