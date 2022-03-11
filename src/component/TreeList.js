import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import service from "../data.js";
import { useSelector } from "react-redux";

const TreeList = () => {
  const rootNode = useSelector((state) => state.nodes.rootNode);

  const getChildNodes = (id) => {
    const childNodes = service
      .getFriends()
      .filter((friend) => friend.parentId === id);
    return childNodes;
  };

  const renderList = (parent) => {
    if (getChildNodes(parent.id).length > 0) {
      return (
        <TreeItem
          key={parent.id}
          nodeId={parent.id.toString()}
          label={parent.firstName + " " + parent.lastName}
        >
          {getChildNodes(parent.id).map((child) => {
            return renderList(child);
          })}
        </TreeItem>
      );
    } else {
      return (
        <TreeItem
          key={parent.id}
          nodeId={parent.id.toString()}
          label={parent.firstName + " " + parent.lastName}
        />
      );
    }
  };

  return (
    <TreeView
      aria-label="tree-view"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        height: "100%",
        flexGrow: 1,
        width: "fit-content",
      }}
    >
      {renderList(rootNode)}
    </TreeView>
  );
};

export default TreeList;
