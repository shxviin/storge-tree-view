import { ActionTypes } from "../constants/action-types";

export const setRootNode = (rootNode) => {
  return { type: ActionTypes.SET_ROOT_NODE, payload: rootNode };
};
