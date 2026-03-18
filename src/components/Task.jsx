import { useState } from "react";

function Task({ title, time, due, note }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="shadow-md mx-3 bg-mist-50 px-1 mb-1 h-auto"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text-2xl text-mist-800 flex">
        {title}
      </span>
      <span className="text-xl text-mist-500">{time + (note == undefined ? "" : "🗈")}</span>
      <span className="text-xl text-mist-500 float-right">{due}</span>
      {isOpen && note != undefined && (
        <p className="text-mist-500">Notes: {note}</p>
      )}
    </div>
  );
}

export default Task;
