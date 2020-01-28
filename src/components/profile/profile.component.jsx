import React from 'react';
import './profile.style.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const Profile = () => {



    const classes = useStyles();

    return (
        <div>
            <div class="wave-container">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                        style={{ stroke: 'none', fill: 'slateblue' }}>
                    </path>
                </svg>
            </div>
            <div className=''>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large + ' avatar'}
                />
            </div>
        </div>
    )
}


export default Profile;





const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(5),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));
