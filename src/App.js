import React, { useEffect, useState } from "react";
import TreeList from "./TreeList";
import "./App.css";
import service from "./data.js";
import { useDispatch } from "react-redux";
import { setRootNode } from "./redux/actions/nodeActions";

const App = () => {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  const getRootNode = () => {
    const rootNode = service
      .getFriends()
      .filter((friend) => friend.parentId === 0);
    dispatch(setRootNode(rootNode[0]));
    setLoad(true);
  };

  useEffect(() => {
    getRootNode();
  }, []);

  return <div>{load && <TreeList />}</div>;
};

export default App;
