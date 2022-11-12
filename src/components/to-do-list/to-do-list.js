import "./todo-wrapper.css";
import { SectionTitle } from "../section-title/section-title";
import { CheckItem } from "../check-item/check-item";

export const ToDoList = ({ list, setList }) => {
  const HandleDeleteClick = (id) => {
    const deleteIndex = list.findIndex((deleteItem) => deleteItem.id === id);
    setList([...list.slice(0, deleteIndex), ...list.slice(deleteIndex + 1)]);
  };

  return (
    <div className="">
      <SectionTitle>Todos</SectionTitle>
      <div className="todo-wrapper">
        <ul className="todo-list">
          {list.map((item) => (
            <CheckItem
              onDeleteClick={HandleDeleteClick}
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
