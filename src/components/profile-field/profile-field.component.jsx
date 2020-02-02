import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './profile-field.style.css';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        direction:'rtl'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function LayoutTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
                <TextField
                    id="standard-full-width"
                    label="Label"
                    style={{ margin: 8, direction:'rtl' }}
                    placeholder="مجید"
                    helperText="نام"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                
        </div>
    );
}
