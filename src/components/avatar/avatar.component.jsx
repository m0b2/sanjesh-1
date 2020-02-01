import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './avatar.style.css';
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({

    avatar: {
        width: '68px',
        height: '68px',
        position: 'absolute',
        right: '20px',
        marginTop: '16px',
        border: '2px white solid'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    p: {
        textAlign: 'right',
        width: '100%',
        position: 'absolute',
        top: '17%',
        right: '20px',
        fontFamily: 'B Yekan',
        fontSize: '22px'
    }
});


export default function ProfileAvatar() {

    const classes = useStyles();

    


    return (
        <div className='sidebar-avatar-container'>
            <Avatar aria-label="recipe" className={classes.avatar}>
                <img className={classes.img} src={'https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png'} alt='avatar' />
            </Avatar>
            <p className={classes.p}>نام کاربری</p>
        </div>
    );
}