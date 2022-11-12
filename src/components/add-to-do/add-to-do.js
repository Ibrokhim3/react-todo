import { useRef } from "react";
import { useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { SectionTitle } from "../section-title/section-title";
import "./../css/main.css";
import "./add-to-do.css";

export const AddToDo = ({ todoData, setTodoFunction }) => {
  // const inputRef = useRef();
  const handleFormSubmit = (evt) => {
    // console.log(inputRef.current.value);
    evt.preventDefault();
    let { todovalue } = evt.target.elements;

    const smtValue = {
      id: Math.floor(Math.random() * 1000),
      name: todovalue?.value,
    };

    setTodoFunction([smtValue, ...todoData]);
  };

  return (
    <div className="add-to-do">
      <SectionTitle>Add Todo</SectionTitle>
      <form onSubmit={handleFormSubmit} className="form">
        {/* <input type="text" ref={inputRef} /> */}
        <Input />
        <Button>Add</Button>
      </form>
    </div>
  );
};
