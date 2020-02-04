import React from 'react';
import './side-list.style.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 286,
        backgroundColor: theme.palette.background.paper,
        marginTop: '60px',
        direction: 'rtl',
        textAlign: 'right',
        border: '1px solid rgb(214, 214, 214)',
        borderLeftColor: 'white'


    },
    primary: {
        fontFamily: 'Vazir',

        textAlign: 'right'
    },
    item: {
        direction: 'rtl',
        textAlign: 'right'
    },
    itemroot: {
        borderRightColor: 'red'
    }
}));

const SideList = () => {
    const classes = useStyles();
    return (
        <List component="nav" className={classes.root} aria-label="contacts"
            style={{ display: ((window.screen.width > 421) ? 'block' : 'none') }}
        >
            <ListItem button className={classes.item} classes={{ root: classes.itemroot }}>

                <ListItemText classes={{ primary: classes.primary }} primary="فردی" />
            </ListItem>
            <ListItem button className={classes.item} classes={{ root: classes.itemroot }}>
                <ListItemText classes={{ primary: classes.primary }} primary="رفتاری" />
            </ListItem>
        </List>
    );
}


export default SideList;