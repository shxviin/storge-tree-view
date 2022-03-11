import { combineReducers } from "@reduxjs/toolkit";
import { nodeReducer } from "./nodeReducer";

const reducers = combineReducers({
  nodes: nodeReducer,
});

export default reducers;
