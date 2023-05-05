import { APP_TYPES } from "../actions/appAction";

const initialState = {
  language: "en",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_TYPES.LANGUAGE:
      return {
        ...initialState,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
