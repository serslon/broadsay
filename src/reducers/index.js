import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import appRedux from "./reducer";

const rootReducer = combineReducers({
  form: formReducer,
  appRedux
});

export default rootReducer;
