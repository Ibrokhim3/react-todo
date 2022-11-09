import "./check-item.css";
import trashImg from "./../../assets/trash.svg";
import { useState } from "react";
import { listItems } from "../list-items/list-items";
import { logDOM } from "@testing-library/react";

export const CheckItem = ({ item: { name, id } }) => {
  const [todo, setList] = useState(listItems);

  const HandleDeleteClick = (evt) => {
    const id = +evt.target.dataset.id;
    const index = todo.findIndex((item) => item.id === id);
    setList([...todo.slice(0, index), ...todo.slice(index + 1)]);
  };

  return (
    <li className="check-item">
      <input className="check-item__input" type="checkbox" />
      <p className="check-item__txt">{name}</p>
      <button
        data-id={id}
        onClick={HandleDeleteClick}
        className="check-item__button"
        type="button"
      >
        <img src={trashImg} alt="delete-button" />
      </button>
    </li>
  );
};
