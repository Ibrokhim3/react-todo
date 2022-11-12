import "./App.css";
import { Container } from "./components/container/container";
import { AddToDo } from "./components/add-to-do/add-to-do";
import { ToDoList } from "./components/to-do-list/to-do-list";
import { listItems } from "./components/list-items/list-items";
import { useState } from "react";

function App() {
  const [list, setList] = useState(listItems);
  return (
    <Container>
      <AddToDo todoData={list} setTodoFunction={setList}></AddToDo>
      <ToDoList list={list} setList={setList}></ToDoList>
    </Container>
  );
}

export default App;
