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
  }
}));

export default function Sign_inComponent() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false
  });

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
      <div
        style={{ width: "100%", marginTop: 30 }}
        className={clsx(classes.center)}
      >
        <img
          src="https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png"
          alt="no-image"
          style={{ width: "80%", height: 100 }}
        />
      </div>
      <div>
        <FormControl className={clsx(classes.textField, classes.center)}>
          <InputLabel
            htmlFor="standard-adornment-password"
            className={clsx(classes.textField)}
          >
            شماره تلفن
          </InputLabel>
          <Input id="standard-adornment-password" type="text" />
        </FormControl>

        <Button
          variant="outlined"
          color="secondary"
          style={{ width: "100%", marginTop: 30 }}
        >
          ثبت نام
        </Button>

        <div style={{ marginTop: 50 }}>
          <p>
            آیا قبلا ثبت نام کرده اید؟{" "}
            <span>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("register");
                }}
              >
                واردشوید
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
