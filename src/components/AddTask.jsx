import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../JS/Actions";

const AddTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();

  const Add = (e) => {
    e.preventDefault();

    if (!name.trim() ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      dispatch(
        addtask({
          id: Math.random(),
          name,
          description,
          completed: false,
        })
      );

      
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="bg-gray-200 p-6 shadow-lg rounded-lg max-w-sm mx-auto">
      {showAlert && (
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Attention
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Task Name field cannot be empty.</p>
          </div>
        </div>
      )}
      <br />
      <form >
        <input
          className="w-full p-2 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Task Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button 
          onClick={Add}
          className="mt-4 p-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          <PlusCircleOutlined />
        </button>
      </form>
    </div>
  );
};

export default AddTask;
