import { createActions } from "redux-actions";

export const { load } = createActions(
  {
    LOAD: {
      START: null,
      SUCCESS: data => ({ data }),
      FAILED: error => ({ error })
    }
  }
);
