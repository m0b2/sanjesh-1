import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

let options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

function ConfirmationDialogRaw(props) {
    const useStyles = makeStyles(theme => ({
        radioGroupRoot: {
            direction: 'rtl',
            fontFamily: 'Samim'
        },
        formControlLabelLabel: {
            fontFamily: 'Samim',
            fontWeight: '600'
        },
        dialogTitleRoot: {
            fontFamily: 'Samim',
            fontWeight: '800',
            direction: 'rtl'
        }
    }));
    const classes = useStyles();
    const { onClose, value: valueProp, open, items, labelTitle } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
    options = items;

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            classes={{paper: "makeStyles-paper-186"}}
            
        >
            <DialogTitle classes={{ root: classes.dialogTitleRoot }}
                id="confirmation-dialog-title">
                <span className={classes.dialogTitleRoot}>{labelTitle}</span>
            </DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                    classes={{ root: classes.radioGroupRoot }}
                >
                    {options.map(option => (
                        <FormControlLabel value={option} key={option} control={<Radio />} label={option}
                            classes={{ label: classes.formControlLabelLabel }} />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="primary">
                <span className={classes.dialogTitleRoot}>لغو</span>
                    
        </Button>
                <Button onClick={handleOk} color="primary">
                <span className={classes.dialogTitleRoot}>تایید</span>
        </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        width: '80%',
        maxHeight: 435,
    },
    listRoot: {
        direction: 'rtl'
    },
    listItemRoot: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',

    },
    listItemTextRoot: {

        fontFamily: 'Samim',
        fontWeight: '500'
    }
}));

export default function ConfirmationDialog({ state, setState, title, items, }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    options = items;

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = newValue => {
        setOpen(false);

        if (newValue) {
            setState(newValue);
        }
    };

    return (
        <div className={classes.root}>
            <List component="div" role="list" classes={{ root: classes.listRoot }}>

                <ListItem
                    button
                    divider
                    aria-haspopup="true"
                    classes={{ root: classes.listItemRoot }}
                    onClick={handleClickListItem}
                    role="listitem"
                    alignItems="center"
                >
                    <ListItemText primary={title} secondary={state}
                        classes={{ primary: classes.listItemTextRoot, secondary: classes.listItemTextRoot }} />
                </ListItem>

                <ConfirmationDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={state}
                    items={items}
                    labelTitle={title}
                />
            </List>
        </div>
    );
}