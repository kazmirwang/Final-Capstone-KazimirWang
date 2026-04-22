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
    {tasks[0] != undefined? <Task title={tasks[0].title} time={tasks[0].time} due={tasks[0].due} /> /*tasks.map((task) => {
        <Task title={task.title} time={task.time} due={task.due} />;
      })*/ : <p>hello</p>}
    </div>
  );
}
