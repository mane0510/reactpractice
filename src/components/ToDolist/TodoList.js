import React, { useEffect, useRef, useState } from "react";
import { TiDocumentAdd } from "react-icons/ti";
import TodoItems from "./TodoItems"; 

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return; 
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodolist((prev) => [...prev, newTodo]); 
    inputRef.current.value = ""; 
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodo) => prevTodo.filter((todo) => todo.id !== id)); 
  };

  const toggle = (id) => {
    setTodolist((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todolist); 
  }, [todolist]);

  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <div className="bg-white text-black place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <div className="flex items-center mt-7 gap-2">
          <TiDocumentAdd className="text-4xl" />
          <h1 className="text-3xl font-semibold">Todo List</h1>
        </div>
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add your Task"
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          />
          <button
            onClick={add}
            className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          >
            Add +
          </button>
        </div>
        <div>
          {todolist.map((item) => (
            <TodoItems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
