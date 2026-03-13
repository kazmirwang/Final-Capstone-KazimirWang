import Header from "../components/Header";
import Task from "../components/Task";

function Tracker() {
  return (
    <div>
      <Header title="Tracker" />
      <Task title="Calc HW" time="2hr" due="3/16/26" />
    </div>
  );
}

export default Tracker;
