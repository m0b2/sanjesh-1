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

import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar } from "react-modern-calendar-datepicker";

function ConfirmationDialogRaw(props) {
    const useStyles = makeStyles(theme => ({
        radioGroupRoot: {
            direction: 'rtl',
            fontFamily: 'Samim',
            minWidth: '200px'
        },
        formControlLabelLabel: {
            fontFamily: 'Samim',
            fontWeight: '600'
        },
        dialogTitleRoot: {
            fontFamily: 'Samim',
            fontWeight: '800',
            direction: 'rtl'
        },
        dialogRoot: {
            minWidth: '320px'

        },
        dialogRealRoot: {

        }
    }));
    const classes = useStyles();
    const { onClose, value: valueProp, open, items, labelTitle, message, daySelected } = props;
    const [value, setValue] = React.useState(valueProp);
    const [selectedDay, setSelectedDay] = React.useState(daySelected);
    // const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {

    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(selectedDay);
    };

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown


            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            classes={{ paper: classes.dialogRoot, root: classes.dialogRealRoot }}

        >
            <DialogTitle classes={{ root: classes.dialogTitleRoot }}
                id="confirmation-dialog-title">
                <span className={classes.dialogTitleRoot}>{labelTitle}</span>
            </DialogTitle>
            <DialogContent dividers >
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    alignItems: 'center', marginLeft: '-22px', minWidth: '310px',
                    minHeight: '320px'
                }}>
                    <Calendar
                        value={selectedDay}
                        onChange={setSelectedDay}
                        inputPlaceholder={'انتخاب تاریخ تولد'}
                        shouldHighlightWeekends
                        locale="fa" // add this
                    />
                </div>
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

        fontFamily: 'Vazir',
        fontWeight: '500'
    },
    secondarylistItemTextRoot: {
        fontFamily: 'Vazir',
        fontWeight: '500',
    }
}));

export default function ConfirmationDialog({ state, setState, title, items, disabled, daySelected }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = newValue => {
        if (newValue) {
            setState(newValue);


        }
        setOpen(false);


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
                    disabled={disabled}
                >
                    <ListItemText primary={title} secondary={state}
                        style={{ fontFamily: 'Vazir' }}
                        classes={{
                            primary: classes.listItemTextRoot,
                            secondary: classes.listItemTextRoot
                        }} />
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
                    message={message}
                    daySelected={daySelected}
                />
            </List>
        </div>
    );
}