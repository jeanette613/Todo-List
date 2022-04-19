import { useState } from "react";
import './App.css';
import CompletedList from "./components/ButtonFunc";
import PendingList from "./components/ListButton";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoInput />
      <ToDoList />

    </div>
  );
}

