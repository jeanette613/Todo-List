import { useState } from "react";
import './App.css';
import CompletedList from "./components/CompletedList";
import PendingList from "./components/PendingList";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoInput />

    </div>
  );
}

