function Task({ title, time, due }) {
  return (
    <div className="shadow-md mx-3 bg-mist-50 px-1 mb-1 h-auto">
      <span className="text-2xl text-mist-800 flex">{title}</span>
      <span className="text-xl text-mist-500">{time}</span>
      <span className="text-xl text-mist-500 float-right">{due}</span>
    </div>
  );
}

export default Task;
