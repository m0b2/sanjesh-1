import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor:'#b71c1c',
        
    },
    title: {
        right: '2%',
        flex: 1,
        position: 'absolute',
        fontFamily:'Samim',
        fontWeight:'900'
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ component, title, open, setOpen, onClose }) {
    const classes = useStyles();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        onClose && onClose();
        setOpen(false);
    };

    return (
        <div>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>

                    </Toolbar>
                </AppBar>



                {component}


            </Dialog>
        </div>
    );
}