import React, { useEffect, useState } from "react";
import TaskModel from "./TaskModel";
import { useSelector } from "react-redux";
import { Button } from "antd";
import MarkAllDone from "./MarkAllDone";

 

const ListTask = () => {
  const tasks = useSelector((state) => state.listTasks);
  const [filter, setFilter] = useState(" ");

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Calculate done/total
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.isDone).length;

  return (
    <div className="mt-4 ">
      <div className="mb-4 text-lg font-bold">
        Done tasks: {doneTasks} / {totalTasks}
      </div>
      <div className="space-x-2">
        <Button
          type={filter === "tasks" ? "primary" : "default"}
          onClick={() => setFilter("tasks")}
        >
          Tasks
        </Button>
        <Button
          type={filter === "done" ? "primary" : "default"}
          onClick={() => setFilter("done")}
        >
          Done
        </Button>
        <Button
          type={filter === "unDone" ? "primary" : "default"}
          onClick={() => setFilter("unDone")}
        >
          UnDone
        </Button>
      </div>

      {filter === "done"
        ? tasks
            .filter((el) => el.isDone === true)
            .map((el) => <TaskModel task={el} key={el.id} />)
        : filter === "unDone"
        ? tasks
            .filter((el) => el.isDone === false)
            .map((el) => <TaskModel task={el} key={el.id} />)
        : tasks.map((el) => <TaskModel task={el} key={el.id} />)}
      <MarkAllDone/>
    </div>
  );
};

export default ListTask;
