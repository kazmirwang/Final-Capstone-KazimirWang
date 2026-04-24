import { Link } from "react-router-dom";
import Header from "../components/Header";
import Task from "../components/Task";
import AddButton from "../components/AddButton";
import TaskList from "../components/TaskList";
import { DataProvider } from "../DataProvider";

export default function Tracker() {
  return (
    <div>
      <Header title="Tracker" />
      <Link to="/add">
        <AddButton />
      </Link>
      <DataProvider>
        <TaskList />
      </DataProvider>
    </div>
  );
}
