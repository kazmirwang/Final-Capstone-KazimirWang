import { useContext } from "react";
import { DataContext } from "../DataProvider";
import Task from "./Task";

export default function TaskList() {
  const { tasks, loading } = useContext(DataContext);
  console.log(tasks, loading);
  if (tasks[0] != undefined) {
    console.log(tasks[0].title, tasks[0].time, tasks[0].due);
  }
  return (
    <div>
      {tasks[0] != undefined? tasks.map((task) => {
        <Task title={task.title} time={task.time} due={task.due} />;
      }) : "hello"}
    </div>
  );
}
