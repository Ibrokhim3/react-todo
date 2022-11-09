import "./App.css";
import { Container } from "./components/container/container";
import { AddToDo } from "./components/add-to-do/add-to-do";
import { ToDoList } from "./components/to-do-list/to-do-list";
import { listItems } from "./components/list-items/list-items";
import { useState } from "react";

function App() {
  let [todo, setTodo] = useState(listItems);
  return (
    <Container>
      <AddToDo todoData={todo} setTodoFunc={setTodo}></AddToDo>
      <ToDoList todoData={todo}></ToDoList>
      {/* Nima uchun bu yerda useState ishlatilindi? */}
      {/* <CheckList></CheckList> */}
    </Container>
  );
}

export default App;
