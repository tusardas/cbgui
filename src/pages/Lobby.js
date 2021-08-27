import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
/*
const useStyles = makeStyles((theme) => ({
    hide : {
        display:'none',
        'z-index' : 2
    },
    firstLayer : {
        position : 'fixed',
        'z-index' : 1
    },
    secondLayer : {
        'z-index' : 2,
        background : "#ccc",
        'height': '90vh'
    }
}));
*/
export default function Lobby() {
    //const classes = useStyles();
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
       
        if(showSidebar === false) {
            setShowSidebar(true);
        }
        else {
            setShowSidebar(false);
        }
    };

    return (
        <Grid container direction="column">
            <Grid item>
                <Header toggleSidebar={toggleSidebar} />
            </Grid>
            <Grid item container direction="row">
                <Grid item>
                    <Drawer anchor='left' open={showSidebar} onClose={() => toggleSidebar()} width={500}>
                        <Sidebar />
                    </Drawer>
                    Rest of the page
                </Grid>
            </Grid>
            {/*
            <Grid item container direction="row">
                <Grid item xs={12} sm={3} className={classes.secondLayer + ' ' + (showSidebar === false ? classes.hide : '')}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} sm={9} className={classes.firstLayer}>
                    Rest of the page
                </Grid>
            </Grid>*/}
        </Grid>
    );
}
