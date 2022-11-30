import React, { useState } from "react";
import classes from "./ListItem.module.css";
import { Form as BForm, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { add, edit, remove } from "../../store/todoList";
import { change } from "../../store/error";
const ListItem = ({ title, id }) => {
  // const [error, setError] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [editing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(remove(id));
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (newTitle.trim().length === 0) {
      dispatch(change(true));
      return;
    }
    console.log(newTitle);
    dispatch(edit({ id, title: newTitle }));
    setIsEditing(false);
    dispatch(change(false));
  };

  const content = editing ? (
    <BForm
      className="w-100 d-flex justify-content-between align-items-center"
      onSubmit={formHandler}
    >
      <BForm.Group
        className={`d-flex justify-content-between align-items-center w-100 ${classes.title}`}
        controlId="edit"
      >
        <BForm.Control
          type="text"
          placeholder="Type your new Todo"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <Button variant="success" type="submit" className="ms-4">
          Edit
        </Button>
      </BForm.Group>
    </BForm>
  ) : (
    <>
      <div className={classes.title}>{title}</div>

      <div className={classes.btns}>
        <Button
          className="p-1 me-1"
          variant="secondary"
          type="button"
          onClick={(e) => setIsEditing(true)}
        >
          Edit
        </Button>
        <Button
          className="p-1 me-1"
          variant="danger"
          onClick={removeHandler}
          type="button"
        >
          Delete
        </Button>
      </div>
    </>
  );
  const listClasses = `list-group-item list-group-item-light d-flex justify-content-between align-items-center p-3 ${classes.list} shadow`;
  return <li className={listClasses}>{content}</li>;
};

export default ListItem;

{
  /* {editing ? (
        <BForm.Control
          type="text"
          placeholder="Enter A Todo"
          className={classes.title}
        />
      ) : (
        <div className={classes.title}>{title}</div>
      )} */
}
<div className={classes.btns}>
  {/* {editing ? (
          <Button variant="success">Done</Button>
        ) : (
          <>
            <Button
              className="p-1 me-1"
              variant="secondary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
            <Button
              className="p-1 me-1"
              variant="danger"
              onClick={removeHandler}
            >
              Delete
            </Button>
          </>
        )} */}
</div>;
