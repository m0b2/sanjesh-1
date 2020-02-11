import React from 'react';
import './profile.style.css';
import { makeStyles } from '@material-ui/core/styles';


const Profile = () => {



    const classes = useStyles();

    return (
        <div>

            <div className=''>
                {/* <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={classes.large + ' avatar'}
                /> */}
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
