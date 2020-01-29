import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './appbar.style.css';
import IconButton from '@material-ui/core/IconButton';
import Fade from 'react-reveal/Fade';
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
const Appbar = ({ location }) => {
    let { pathname } = location;
    console.log(pathname)
    const classes = useStyles();
    pathname = pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);
    return (
        <Fade top opposite >
            <div className={'Appbar'}
            > 
                <Avatar aria-label="recipe" className={classes.avatar}>

                </Avatar>
                
                    <strong className={classes.strong}>{pathname}</strong>
               

                <IconButton className={classes.icon} aria-label="delete">

                    <ArrowBackIcon />
                </IconButton>


            </div>
        </Fade>
    );

}

export default withRouter(Appbar);


const useStyles = makeStyles(theme => ({
    icon: {
        position: 'absolute',
        left: 0
    },
    strong: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '3px',
        marginRight: '4px',
        fontFamily: 'Open Sans'
    },
    avatar: {

        backgroundColor: '#283593',
        marginRight: '12px',
        marginTop: '3px'
    }
}));