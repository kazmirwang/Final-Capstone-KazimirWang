import { Link } from "react-router-dom";
import Header from "../components/Header";
import Task from "../components/Task";
import AddButton from "../components/AddButton";
import { DataProvider, DataContext } from "../DataProvider";
import { useContext } from "react";

export default function Tracker() {
  /*const { tasks, loading } = useContext(DataContext);
  return (
    <div>
      <Header title="Tracker" />
      <Link to="/add">
        <AddButton />
      </Link>
      <Task title="Calc HW" time="2hr" due="3/16/26" note="need to make up" />
      <Task title="CS 4.6: Hooks & State" time="1hr" due="3/16/26" />
      <Task
        title="AP Physics Static Torque"
        time="2hr"
        due="3/20/26"
        note="prob not due until monday"
      />
      {loading ? (
        <p>Content still loading</p>
      ) : (
        <DataProvider>
          {tasks.map((task) => {
            <Task title={task.title} time={task.time} due={task.due} />;
          })}
        </DataProvider>
      )}
    </div>
  );*/
  return <DataProvider> </DataProvider>;
}
