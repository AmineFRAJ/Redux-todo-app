import React from "react";

import DeleteTask from "./DeleteTask";
import { donetask } from "../JS/Actions";
import { useDispatch } from "react-redux";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import EditTask from "./EditTask";

const TaskModel = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${task.isDone ? "bg-red-200  " : "bg-green-200"} mx-auto my-5 max-w-sm p-4 rounded-lg shadow-lg`}
    >
      <div className={`${task.isDone ? "  line-through" : " "}`}>
        <h1 className="text-lg font-bold">{task.name}</h1>
        <p className="text-gray-700">{task.description}</p>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={() => dispatch(donetask(task.id))}
        >
          {task.isDone ? (
            <Tooltip title="Undone">
              <CloseCircleFilled />
            </Tooltip>
          ) : (
            <Tooltip title="Done" >
              <CheckCircleFilled />
            </Tooltip>
          )}
        </button>
        <EditTask task={task} />

        <DeleteTask task={task} />
      </div>
    </div>
  );
};

export default TaskModel;
