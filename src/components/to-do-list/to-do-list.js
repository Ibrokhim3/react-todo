import "./todo-wrapper.css";
import { SectionTitle } from "../section-title/section-title";
import { CheckItem } from "../check-item/check-item";

export const ToDoList = ({ todoData }) => {
  return (
    <div className="">
      <SectionTitle>Todos</SectionTitle>
      <div className="todo-wrapper">
        <ul className="todo-list">
          {todoData &&
            todoData.map((item) => <CheckItem key={item.id} item={item} />)}
            {/* todoDate qaerdan kelyapti array listitems ? */}
        </ul>
      </div>
    </div>
  );
};
