import { handleActions } from "redux-actions";
import { load } from "../actions";

const defaultState = {
  isStarting: true,
  error: null,
  data: {}
};

const appReducer = handleActions(
  {
    [load.start]: state => ({ ...state, error: null }),
    [load.success]: (state, { payload: { data } }) => ({
      ...state,
      data,
      isStarting: false
    }),
    [load.failed]: (state, { payload: { error } }) => ({
      ...state,
      isStarting: false,
      error
    })
  },
  defaultState
);

export default appReducer;
