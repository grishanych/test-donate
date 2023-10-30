import { SET_LOGGED_IN_USER } from "../actions/userActions";

const initialState = {
  username: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
