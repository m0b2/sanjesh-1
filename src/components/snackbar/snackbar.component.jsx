import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    message: {
        fontFamily: 'Vazir',
        paddingRight: '16px',
        paddingLeft: '16px'
    }
}));

export default function CustomizedSnackbars({ anchorOrigin, severity, open, setOpen, message }) {
    const classes = useStyles();

    const anchorOriginSnackbar = anchorOrigin ? anchorOrigin : { vertical: 'bottom', horizontal: 'center' };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root} >

            <Snackbar
                open={open}
                autoHideDuration={2800}
                onClose={handleClose}
                anchorOrigin={anchorOriginSnackbar}
            >
            
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    classes={{ message: classes.message }}
                >
                    {message}
                </Alert>

            </Snackbar>
            {/* <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert> */}
        </div>
    );
}