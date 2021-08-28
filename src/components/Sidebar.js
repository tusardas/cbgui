import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return(
        <Grid>
            <Divider />
            <List>
                {['Lobby', 'My Stats'].map((text, index) => (
                    <Link to="/lobby">
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {['My Profile', 'Settings', 'Sign out'].map((text, index) => (
                <Link to="/profile">
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                </Link>
                ))}
            </List>
        </Grid>
    );
}

export default Sidebar;