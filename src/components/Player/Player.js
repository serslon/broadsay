import React from "react";
import { Field } from "redux-form";
import Input from "../Input";
import { Typography } from "@material-ui/core";
import { required, email, url, minLength3, phone } from "./Player.form";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  form: {
    margin: "0 auto",
    maxWidth: 700
  },
  imageContainer: {
    textAlign: "center",
    margin: 16
  },
  button: {
    marginRight: 20
  },
  action: {
    textAlign: "right"
  }
}));

const Player = ({
  reset,
  valid,
  pristine,
  submitting,
  imagePreview,
  handleSubmit
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Typography variant="h5">Player</Typography>
      <Field
        name="name.first"
        component={Input}
        label="First Name"
        fullWidth
        validate={[required, minLength3]}
      />
      <Field
        name="name.last"
        component={Input}
        label="Last Name"
        fullWidth
        validate={[required, minLength3]}
      />
      <Field
        name="email"
        component={Input}
        label="Email"
        type="email"
        fullWidth
        validate={[required, email]}
      />
      <Field
        name="phone"
        component={Input}
        label="Phone"
        type="tel"
        fullWidth
        validate={[required, phone]}
      />
      <Field
        name="cell"
        component={Input}
        label="Cell"
        type="tel"
        fullWidth
        validate={[required, phone]}
      />
      <Field
        name="dob.age"
        component={Input}
        label="Age"
        type="number"
        fullWidth
        inputProps={{ min: 16 }}
        validate={[required]}
      />
      <Field
        name="picture.large"
        component={Input}
        label="Image"
        type="url"
        fullWidth
        validate={[required, url]}
      />
      <div className={classes.imageContainer}>
        <img src={imagePreview} alt="player face" />
      </div>
      <div className={classes.action}>
        <Button
          type="submit"
          disabled={pristine || submitting || !valid}
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          Submit
        </Button>
        <Button
          type="button"
          disabled={pristine || submitting}
          variant="contained"
          onClick={reset}
          className={classes.button}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default Player;
