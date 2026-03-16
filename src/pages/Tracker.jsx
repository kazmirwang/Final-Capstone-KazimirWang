import Header from "../components/Header";
import Task from "../components/Task";

function Tracker() {
  return (
    <div>
      <Header title="Tracker" />
      <Task title="Calc HW" time="2hr" due="3/16/26" note="need to make up" />
      <Task title="CS 4.6: Hooks & State" time="1hr" due="3/16/26" />
      <Task title="AP Physics Static Torque" time="2hr" due="3/20/26" note="prob not due until monday" />
    </div>
  );
}

export default Tracker;
