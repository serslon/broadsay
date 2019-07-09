import { reduxForm } from "redux-form";

export const required = value => (value ? undefined : "Required");
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const email = value =>
  value &&
  // eslint-disable-next-line no-useless-escape
  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    value
  )
    ? "Invalid email address"
    : undefined;
export const url = value =>
  value &&
  !/\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/i.test(
    value
  )
    ? "Invalid URL address"
    : undefined;
export const phone = value =>
  value && !/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(value)
    ? "Invalid number phone"
    : undefined;

export const minLength3 = minLength(3);

export default reduxForm({
  form: "playerForm",
  // validate,
  touchOnChange: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  onSubmit: () => {
    alert('Hi we will send data in a real project');
    return false;
  }
});
