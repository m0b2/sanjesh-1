import './form.style.css';
import moment from "moment";
import jMoment from "moment-jalaali";
import React, { useState } from "react";
import JalaliUtils from "@date-io/jalaali";
import StatePicker from '../statePicker/state-picker.component';
import InputBase from '@material-ui/core/InputBase';

import {
    TimePicker,
    DateTimePicker,
    DatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import NativeSelect from '@material-ui/core/NativeSelect';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',



        '& > *': {
            margin: theme.spacing(1),


        },
    },
    labelroot: {
        fontFamily: 'Samim',
        fontWeight: '600'
    },
    formControl: {
        display: 'flex',

    },
    selectRoot: {
        direction: 'rtl',

    },
    select: {
        fontFamily: 'Samim',
        fontWeight: '400',
        


    },
    inputLabel: {
        
        fontFamily:'Samim',
        
        
    }

}));






jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const Form = () => {
    const [age, setAge] = React.useState('');
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(moment());
    const [value, setValue] = React.useState('male');
    const handleChange = event => {
        // setValue(event.target.value);
    };
    const handleChange2 = event => {
        setAge(event.target.value);
    };

    const DateComponent = <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa"
        style={{
            maxWidth: '218px', fontFamily: 'Samim',
            backgroundColor: 'transparent', borderColor: 'transparent'
        }}

    >

        <DatePicker
            clearable
            okLabel="تأیید"
            cancelLabel="لغو"
            clearLabel="پاک کردن"
            labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
            value={selectedDate}
            onChange={handleDateChange}
            style={{ fontFamily: 'Samim', backgroundColor: 'transparent', borderColor: 'transparent' }}
            color={'secondary'}

        />
    </MuiPickersUtilsProvider>


    // const proxyurl = "https://cors-anywhere.herokuapp.com/";

    // axios.get(proxyurl + 'http://www.abtarh.ir/name.php')
    // .then(function (response) {
    // 		console.log('response is : ' + response.data);
    // 	}).catch(function (error) {
    // 		if (error.response) {
    // 		  console.log(error.response.headers);
    // 		} 
    // 		else if (error.request) {
    // 	      console.log(error.request);
    // 		} 
    // 		else {
    // 		  console.log(error.message);
    // 		}
    // 	console.log(error.config);
    // });


    // const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        //   setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (





        <div className={classes.root} >
            <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="نام و نام خانوادگی" fullWidth />
            </FormControl>
            <FormControl className={classes.formControl}>
                <FormLabel classes={{ root: classes.labelroot }} component="legend">جنسیت</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} row>
                    <FormControlLabel value="female" control={<Radio />} label="زن" />
                    <FormControlLabel value="male" control={<Radio />} label="مرد" />

                </RadioGroup>
            </FormControl>
            <FormControl className={classes.formControl}>
                {/* <FormLabel classes={{ root: classes.labelroot }} component="legend">استان/شهرستان</FormLabel> */}
                <InputLabel className={classes.inputLabel} htmlFor="demo-customized-select-native">استان</InputLabel>
                <Select
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange2}
                    variant='outlined'
                    classes={{ root: classes.selectRoot, select: classes.select }}

                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Select
                    id="demo-customized-select-native2"
                    value={age}
                    onChange={handleChange2}
                    variant='outlined'
                    classes={{ root: classes.selectRoot, select: classes.select }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                {/* <FormLabel classes={{ root: classes.labelroot }} component="legend">وضعیت تاهل</FormLabel> */}
                <InputLabel htmlFor="demo-customized-select-native2">وضعیت تاهل</InputLabel>
                <Select
                    native
                    onChange={handleChange('age')}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                    classes={{ root: classes.selectRoot, select: classes.select }}

                >
                    <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>




        </div>













    )
}


export default Form;