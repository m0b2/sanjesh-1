import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './appbar.style.css';
import IconButton from '@material-ui/core/IconButton';
import Fade from 'react-reveal/Fade';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { SidebarContext } from '../../context/sidebar.context';
import Logo from '../logo/Logo.component';

const Appbar = ({ location }) => {
    const { isOpen, setOpen } = React.useContext(SidebarContext);
    let { pathname } = location;
    // console.log(pathname)
    const classes = useStyles();
    pathname = pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);
    return (
        <Fade top opposite >
            <div className={'Appbar'}
            >
                <IconButton edge="start" color="inherit" aria-label="menu"
                onClick={() => setOpen({right:true})}
                >
                    <MenuIcon />
                </IconButton>
                {/* <Avatar aria-label="recipe" className={classes.avatar}>

                </Avatar> */}

                <Logo size={20}/>


                <IconButton className={classes.icon} aria-label="delete" 
                >

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
        marginRight: '12px',
        fontFamily: 'Pattaya',
        fontSize: '20px'
    },
    avatar: {

        backgroundColor: '#283593',
        marginRight: '12px',
        marginTop: '3px'
    }
}));