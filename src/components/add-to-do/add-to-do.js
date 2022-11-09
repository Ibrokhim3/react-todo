import { useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { SectionTitle } from "../section-title/section-title";
import "./../css/main.css";
import "./add-to-do.css";

export const AddToDo = ({ todoData, setTodoFunc }) => {
  const handleBtnClick = (evt) => {
    evt.preventDefault();
    let { todovalue } = evt.target.elements;

    const smtValue = {
      id: Math.floor(Math.random() * 1000),
      name: todovalue?.value,
    };
    setTodoFunc([smtValue, ...todoData]);
  };

  console.log(todoData);
  return (
    <div className="add-to-do">
      <SectionTitle>Add Todo</SectionTitle>
      <form className="form" onSubmit={handleBtnClick}>
        <Input />
        <Button>Add</Button>
      </form>
    </div>
  );
};
