import "./check-item.css";
import trashImg from "./../../assets/trash.svg";
import { useState } from "react";
import { listItems } from "../list-items/list-items";
import { logDOM } from "@testing-library/react";

export const CheckItem = ({ item: { name, id }, onDeleteClick }) => {
  const HandleDeleteClick = () => {
    onDeleteClick(id);
  };

  return (
    <li className="check-item">
      <input className="check-item__input" type="checkbox" />
      <p className="check-item__txt">{name}</p>
      <button
        data-id={id}
        onClick={HandleDeleteClick}
        className="check-item__delete-button"
        type="button"
      >
        <img src={trashImg} alt="delete-button" />
      </button>
    </li>
  );
};
