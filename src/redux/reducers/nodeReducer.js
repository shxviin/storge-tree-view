import { ActionTypes } from "../constants/action-types";

const initialState = {
  rootNode: [],
};

export const nodeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROOT_NODE:
      return { ...state, rootNode: payload };
    default:
      return state;
  }
};
