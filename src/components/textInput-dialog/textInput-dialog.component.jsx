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
            direction: 'rtl',
            // backgroundColor:'red'
        }
    }));
    const classes = useStyles();
    const {
        onClose, value: valueProp,
        open, items, labelTitle, setState,
        setMasterState, message, number,
        nativeValue, setNativeValue,
        ...other } = props;
    const [value, setValue] = React.useState(valueProp);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);


    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        setMasterState(value)
        onClose(value);
    };

    const handleChange = event => {

        setValue(event.target.value)

    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle classes={{ root: classes.dialogTitleRoot }}
                id="confirmation-dialog-title">
                <span className={classes.dialogTitleRoot}>{labelTitle}</span>
            </DialogTitle>
            <DialogContent dividers>
                <div className="inputWithIcon">
                    <input style={{ fontFamily: 'Vazir' }}
                        type={(number) ? "number" : "text"}
                        placeholder={labelTitle}
                        onChange={handleChange}
                        value={value}
                    />
                    <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
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

        fontFamily: 'Samim',
        fontWeight: '500'
    },
    secondarylistItemTextRoot: {

        fontFamily: 'Vazir',
        fontWeight: '500'
    },
}));

export default function ConfirmationDialog({ state, setState, title, items, disabled, required, number }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = newValue => {
        if (!required) {
            setMessage('');
            setOpen(false);


            if (newValue) {
                setMessage('');
                setState(newValue);

            }
        } else {



            if (newValue) {
                if (newValue.length < 2) {
                    setMessage('کامل کردن این فیلد الزامی است')
                } else {
                    setOpen(false);
                    setState(newValue);
                    setMessage('');
                }

            }


            if (!state || state.length < 2) {
                setMessage('کامل کردن این فیلد الزامی است')
            } else {
                setOpen(false);
            }

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
                    disabled={disabled}
                >
                    <ListItemText primary={title} secondary={state}
                        classes={{ primary: classes.listItemTextRoot, secondary: classes.secondarylistItemTextRoot }} />
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
                    setMasterState={setState}
                    message={message}
                    number={number}

                />
            </List>
        </div>
    );
}