import React, { useEffect } from 'react';
import {Grid, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const Header = ({toggleSidebar}) => {
    return(
        <Grid>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton onClick={() => {toggleSidebar()}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography>
                        CBG Quest
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Header;