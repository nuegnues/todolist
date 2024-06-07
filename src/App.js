import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Calendar from "./components/Calendar";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [add, setAdd] = useState(false);

  return (
    <div className="App">
      <h1 className="Header">To-Do List</h1>
      <Calendar setSelectedDate={setSelectedDate} />
      <TodoList date={selectedDate} add={add} setAdd={setAdd} />
      <AddTodo date={selectedDate} setAdd={setAdd} />
    </div>
  );
}

export default App;
