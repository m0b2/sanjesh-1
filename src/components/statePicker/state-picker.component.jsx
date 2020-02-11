import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        fontFamily: 'Samim'
    },
}));

export default function GroupedSelect() {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">استان</InputLabel>
                <Select defaultValue="" input={<Input id="grouped-select" />}>
                        <MenuItem value="0">لطفا استان را انتخاب نمایید</MenuItem>
                        <MenuItem value="1">تهران</MenuItem>
                        <MenuItem value="2">گیلان</MenuItem>
                        <MenuItem value="3">آذربایجان شرقی</MenuItem>
                        <MenuItem value="4">خوزستان</MenuItem>
                        <MenuItem value="5">فارس</MenuItem>
                        <MenuItem value="6">اصفهان</MenuItem>
                        <MenuItem value="7">خراسان رضوی</MenuItem>
                        <MenuItem value="8">قزوین</MenuItem>
                        <MenuItem value="9">سمنان</MenuItem>
                        <MenuItem value="10">قم</MenuItem>
                        <MenuItem value="11">مرکزی</MenuItem>
                        <MenuItem value="12">زنجان</MenuItem>
                        <MenuItem value="13">مازندران</MenuItem>
                        <MenuItem value="14">گلستان</MenuItem>
                        <MenuItem value="15">اردبیل</MenuItem>
                        <MenuItem value="16">آذربایجان غربی</MenuItem>
                        <MenuItem value="17">همدان</MenuItem>
                        <MenuItem value="18">کردستان</MenuItem>
                        <MenuItem value="19">کرمانشاه</MenuItem>
                        <MenuItem value="20">لرستان</MenuItem>
                        <MenuItem value="21">بوشهر</MenuItem>
                        <MenuItem value="22">کرمان</MenuItem>
                        <MenuItem value="23">هرمزگان</MenuItem>
                        <MenuItem value="24">چهارمحال و بختیاری</MenuItem>
                        <MenuItem value="25">یزد</MenuItem>
                        <MenuItem value="26">سیستان و بلوچستان</MenuItem>
                        <MenuItem value="27">ایلام</MenuItem>
                        <MenuItem value="28">کهگلویه و بویراحمد</MenuItem>
                        <MenuItem value="29">خراسان شمالی</MenuItem>
                        <MenuItem value="30">خراسان جنوبی</MenuItem>
                        <MenuItem value="31">البرز</MenuItem>
                    
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">شهرستان</InputLabel>
                <Select defaultValue="" input={<Input id="grouped-select" />}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                  
                </Select>
            </FormControl>
        </div>
    );
}








