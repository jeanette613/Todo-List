import React from "react";
import { useState } from "react";
import toDoData from "./data";
import './App.css';
import CompletedList from "./components/CompletedList";
import ListItem from "./components/ListItem";
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

