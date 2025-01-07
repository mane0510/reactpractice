import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggle(id)} 
      >
        <FaCheckCircle
          className={`text-xl ${
            isComplete ? "text-green-500" : "text-gray-400"
          }`}
        />
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "line-through text-slate-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>

     
      <MdDelete
        className="text-xl text-red-500 cursor-pointer"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default TodoItems;
