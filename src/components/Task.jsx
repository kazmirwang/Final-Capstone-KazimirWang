import { useState } from "react";

export default function Task({ title, time, due, note, subject }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        (note == undefined ? "" : "cursor-pointer ") +
        "shadow-md mx-3 bg-mist-50 px-1 mb-1 h-auto"
      }
      onClick={() => setIsOpen(!isOpen)}
    >
      <h1 className="text-2xl text-mist-800 flex">{title}</h1>
      <p className="text-lg text-mist-400">{subject}</p>
      <span className="text-xl text-mist-500">
        {time + (note == undefined ? "" : " 🗈")}
      </span>
      <span className="text-xl text-mist-500 float-right">{due}</span>
      {isOpen && note != undefined && (
        <p className="text-mist-500">Notes: {note}</p>
      )}
    </div>
  );
}
