import React from "react";
import ListItem from "./ListItem";

const List = ({ Lists }) => {
  return (
    <div className="list-group p-4">
      {Lists.reverse().map((e) => (
        <ListItem key={e.id} title={e.title} id={e.id} />
      ))}
    </div>
  );
};

export default List;
