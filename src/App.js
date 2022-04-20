import React from "react";
import { useState } from "react";
import './App.css';
import CompletedList from "./components/CompletedList";
import ListItem from "./components/ListItem";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import toDoData from "./data";

export default function App() {
  const [toDoItems, editToDoItems] = useState(toDoData);


  return (
    <div className="App">
      <h1>To Do List:</h1>
      <ToDoInput />
      <ToDoList toDoLists={toDoItems} />

    </div>
  );
}

