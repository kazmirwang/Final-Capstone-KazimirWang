import { useContext } from "react";
import { DataContext } from "../DataProvider";
import Task from "./Task";

export default function TaskList() {
  const { tasks, loading } = useContext(DataContext);

  let taskList = [];

  console.log(tasks, loading);
  if (!loading) {
    tasks.forEach((task) => {
      taskList.push(
        <Task
          key={task.id}
          title={task.title}
          time={task.time}
          due={task.due}
          note={task.note}
          subject={task.subject}
          id={task.id}
        />,
      );
    });
  }
  return <div>{loading ? <p>Data Loading...</p> : taskList}</div>;
}
