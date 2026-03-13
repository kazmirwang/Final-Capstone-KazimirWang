function Task({ title, time, due }) {
  return (
    <div className="shadow-md mx-3 bg-mist-50 px-1">
      <span className="text-2xl text-mist-800">{title + " "}</span>
      <span className="text-2xl text-mist-400">{time}</span>
      <span className="text-2xl text-mist-700 float-right">{due}</span>
    </div>
  );
}

export default Task;
