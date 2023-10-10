import { SET_INPUT_VALUE } from '../actions/valueActions'

const initialState = {
    inputValue: '',
};

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_INPUT_VALUE :
        return {
          ...state,
          inputValue: action.payload,
        };
      default:
        return state;
    }
  };