import React from 'react';
import './side-list.style.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import store from '../../redux/store';

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

const SideList = ({ sideTab }) => {
    console.log(sideTab)
    // const store = useStore().getState();
    const classes = useStyles();
    const list_item = sideTab.title.map((value, index) =>
        <ListItem button className={classes.item} classes={{ root: classes.itemroot }}
            onClick={() => store.dispatch({ type: 'SET_CURRENT_TAB', payload: index })}
        >

            <ListItemText classes={{ primary: classes.primary }} primary={value} />
        </ListItem>


    )




    return (
        <List component="nav" className={classes.root} aria-label="contacts"
            style={{ display: ((window.screen.width > 421) ? 'block' : 'none') }}
        >
            {list_item}

        </List>
    );
}
const mapStateToProps = (state) => {

    return (
        {
            sideTab: state.SideTab
        }
    )

}

export default connect(mapStateToProps)(SideList);