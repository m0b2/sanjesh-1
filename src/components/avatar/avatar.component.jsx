import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './avatar.style.css';
import Avatar from "@material-ui/core/Avatar";


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
        textAlign: 'right',
        width: '100%',
        marginTop:'-10%',
        fontFamily: 'B Yekan',
        fontSize: '22px'
    },

    avatardiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        flexWrap:'wrap',
        
    }
});


export default function ProfileAvatar({ style }) {

    const classes = useStyles();


    // style={{...style}}

    return (
        <div className='sidebar-avatar-container'>
            <div className={classes.avatardiv}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                    <img className={classes.img} src={'https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png'} alt='avatar' />
                </Avatar>
                <p className={classes.p}>نام کاربری</p>
            </div>

        </div>
    );
}