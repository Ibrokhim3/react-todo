import { useState } from "react";
import { CheckItem } from "../check-item/check-item";
import { listItems } from "../list-items/list-items";
import "./button.css";

export const Button = ({ children }) => {
  const [list, setList] = useState(listItems);
  const HandleBtnClick = () => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: "Bolababy",
    };
    const newList = [...list, newTask];
    setList(newList);
  };
  return (
    <button onClick={HandleBtnClick} className="button">
      {children}
    </button>
  );
};
