import React from "react";
import TextField from "@material-ui/core/TextField";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => {
  return {
    touched: {
      backgroundColor: blue[50] //theme.palette.primary.light
    }
  };
});

const Input = ({ input, label, meta: { dirty, invalid, error }, ...custom }) => {
  const classes = useStyles();
  return (
    <TextField
      helperText={invalid && error}
      label={label}
      error={invalid}
      className={classnames({ [classes.touched]: dirty && !invalid, [classes.error]: invalid })}
      // errorText={touched && error}
      {...input}
      {...custom}
    />
  );
};

export default Input;
