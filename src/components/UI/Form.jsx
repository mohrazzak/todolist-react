import React, { useRef, useState, useEffect } from "react";
import { Form as BForm, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../store/error";
import { add, edit, remove } from "../../store/todoList";

const Form = () => {
  // const [error, setError] = useState(false);
  const error = useSelector((state) => state.error.error);
  const todo = useRef("");
  const dispatch = useDispatch();

  const formHandler = (e) => {
    const value = todo.current.value;
    e.preventDefault();
    if (value.trim().length === 0) {
      dispatch(change(true));
      return;
    }
    dispatch(add({ title: value, id: Math.random().toString() }));
    todo.current.value = "";
    dispatch(change(false));
  };

  return (
    <div>
      <BForm onSubmit={formHandler}>
        <BForm.Group className="mb-3 p-3 d-flex" controlId="formBasicEmail">
          <BForm.Control type="text" placeholder="Enter A Todo" ref={todo} />
          <Button variant="primary" type="submit" className="ms-4">
            Add
          </Button>
        </BForm.Group>
      </BForm>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Please provide a valid Todo
        </div>
      )}
    </div>
  );
};

export default Form;
