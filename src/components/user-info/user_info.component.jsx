import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",

    backgroundColor: "red"
  },
  center: { display: "flex", justifyContent: "center", alignItems: "center" },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200,
    direction: "rtl",
    textAlign: "right"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90
  }
}));

export default function User_Info() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    province: "",
    city: "",
    Grade: "",
    Field: "",
    name: "hai"
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false
  });
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handle = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div
      className={(classes.root, classes.center)}
      style={{
        flexDirection: "column",
        paddingLeft: "20%",
        paddingRight: "20%"
      }}
    >
      <div>
        <FormControl className={clsx(classes.textField, classes.center)}>
          <InputLabel
            htmlFor="standard-adornment-password"
            className={clsx(classes.textField)}
          >
            نام و نام خانوادگی
          </InputLabel>
          <Input id="standard-adornment-password" type="text" />
        </FormControl>
        <FormControl className={clsx(classes.textField, classes.center)}>
          <InputLabel
            htmlFor="standard-adornment-password"
            className={clsx(classes.textField)}
          >
            کدملی
          </InputLabel>
          <Input id="standard-adornment-password" type="text" />
        </FormControl>

        <FormControl className={clsx(classes.textField, classes.center)}>
          <InputLabel
            htmlFor="standard-adornment-password"
            className={clsx(classes.textField)}
          >
            گروه خونی
          </InputLabel>
          <Input id="standard-adornment-password" type="text" />
        </FormControl>
        <FormControl className={clsx(classes.textField, classes.center)}>
          <InputLabel
            htmlFor="standard-adornment-password"
            className={clsx(classes.textField)}
          >
            قد
          </InputLabel>
          <Input id="standard-adornment-password" type="text" />
        </FormControl>
        <FormControl className={clsx(classes.textField, classes.center)}>
          <InputLabel
            htmlFor="standard-adornment-password"
            className={clsx(classes.textField)}
          >
            وزن
          </InputLabel>
          <Input id="standard-adornment-password" type="text" />
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
            استان
          </InputLabel>
          <Select
            native
            value={state.province}
            onChange={handle("province")}
            labelWidth={labelWidth}
            inputProps={{
              name: "province",
              id: "outlined-province-native-simple"
            }}
          >
            <option value="" />
            <option value={10}>ایلام</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
            شهرستان
          </InputLabel>
          <Select
            native
            value={state.city}
            onChange={handle("city")}
            labelWidth={labelWidth}
            inputProps={{
              name: "city",
              id: "outlined-city-native-simple"
            }}
          >
            <option value="" />
            <option value={10}>ایلام</option>
          </Select>
        </FormControl>
        <div style={{}}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
              مقطع
            </InputLabel>
            <Select
              native
              value={state.Grade}
              onChange={handle("Grade")}
              labelWidth={labelWidth}
              inputProps={{
                name: "Grade",
                id: "outlined-Grade-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>کاردانی</option>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
              رشته تحصیلی
            </InputLabel>
            <Select
              native
              value={state.Field}
              onChange={handle("Field")}
              labelWidth={labelWidth}
              inputProps={{
                name: "Field",
                id: "outlined-Field-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>ریاضی</option>
            </Select>
          </FormControl>
        </div>

        <Button
          variant="outlined"
          color="secondary"
          style={{ width: "100%", marginTop: 30 }}
        >
          ثبت نهایی
        </Button>
      </div>
    </div>
  );
}
