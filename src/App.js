import React from "react";
import { useState } from "react";
import CompletedList from "./components/CompletedList";
import ListItem from "./components/ListItem";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import toDoData from "./data";
import "./style.css";

export default function App() {

  //define and set state for each list we will resturn
  const [toDoItems, editToDoItems] = useState(toDoData);
  //This starts with empty array!
  const [doneItems, editDoneItems] = useState([]);

  //need to define function to move array AND spread in previous items with new entries
  const addItem = (item) => {
    editToDoItems([{ title: item }, ...toDoItems]);
  };

  const movetoCompl = (item) => {
    const arr = [item, ...doneItems];
    editDoneItems(arr)
  };


  return (
    <div className="App">
      <h1>To Do List:</h1>
      <ToDoInput handleAdd={addItem} />
      <ToDoList toDoLists={toDoItems} />
      <CompletedList doneList={toDoItems} />

    </div>
  );
}

