import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './appbar.style.css';
import IconButton from '@material-ui/core/IconButton';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';

import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { SidebarContext } from '../../context/sidebar.context';
import Logo from '../logo/Logo.component';
import { connect } from 'react-redux';
const Appbar = ({ location, history, isFooterNeeded }) => {
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
                    onClick={() => setOpen({ right: true })}
                >
                    <MenuIcon style={{ color: 'white' }} />
                </IconButton>
                {/* <Avatar aria-label="recipe" className={classes.avatar}>

                </Avatar> */}

                <Logo size={20} />


                {(isFooterNeeded) ? null :
                    <IconButton className={classes.icon} aria-label="delete"
                        onClick={() => { history.goBack() }}
                    >
                        <Spin duration={460}>
                         <ArrowBackIcon style={{ color: 'white' }} />
                         </Spin>
                    </IconButton>
                }
            </div>
        </Fade>
    );

}
const mapStatetoProps = store => { return ({ isFooterNeeded: store.FooterReducer }) }
export default withRouter(connect(mapStatetoProps)(Appbar));


const useStyles = makeStyles(theme => ({
    icon: {
        position: 'absolute',
        left: 0,
        marginTop: '6px'
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