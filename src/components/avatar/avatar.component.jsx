import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './avatar.style.css';
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

    avatar: {
        width: '68px',
        height: '68px',

        border: '2px white solid'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    p: {
        textAlign: 'center',
        width: '100%',
        marginTop: '-5%',
        fontFamily: 'B Yekan',
        fontSize: '22px',

    },

    avatardiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifySelf: 'center',
        alignSelf: 'center',
        cursor: 'pointer',



    }
});


export default function ProfileAvatar({ style, name }) {

    const classes = useStyles();


    // style={{...style}}

    return (
        <div className='sidebar-avatar-container'>
            <div className={classes.avatardiv}>
                <Link to={'/profile'}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img className={classes.img} src={'https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png'} alt='avatar' />
                    </Avatar>
                </Link>
                <p className={classes.p}>{name}</p>
            </div>

        </div>
    );
}