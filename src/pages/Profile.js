import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Profile() {
    //const classes = useStyles();
    const history = useHistory();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
       
        if(showSidebar === false) {
            setShowSidebar(true);
        }
        else {
            setShowSidebar(false);
        }
    };

    const [user, setUser] = useState([]);

    useEffect(
        () => {
            const fetchUser = async () => {
                const response = await fetch('https://localhost:8443/api/profile/', {
                    method: 'GET',
                    credentials: 'include',
                    header : {
                        "Access-Control-Allow-Credentials" : "true"
                    }
                });
                const data = await response.json();
                if(data.status == 401) {
                    history.push("/signin");
                }
                setUser(data.status);
            };
            fetchUser();
        }, []
    );

    return (
        <Grid container direction="column">
            <Grid item>
                <Header toggleSidebar={toggleSidebar} />
            </Grid>
            <Grid item container direction="row">
                <Grid item>
                    <Drawer anchor='left' open={showSidebar} onClose={() => toggleSidebar()}>
                        <Sidebar />
                    </Drawer>
                    Profile page
                    =={user}==
                </Grid>
            </Grid>
        </Grid>
    );
}
