import { useState } from "react";
import { supabase } from "../DataProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Task({ title, time, due, note, subject, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  async function completeTask() {
    // eslint-disable-next-line no-unused-vars
    const response = await supabase.from("tasks").delete().eq("id", id);
    navigate(0);
  }
  return (
    <div
      className={
        (note == undefined ? "" : "cursor-pointer ") +
        "shadow-md mx-3 bg-mist-50 px-1 mb-1 h-auto"
      }
      onClick={() => setIsOpen(!isOpen)}
    >
      <h1 className="text-2xl text-mist-800 flex">{title}</h1>
      <p className="text-lg text-mist-400">
        {subject}
        <Link to="/" onClick={completeTask} className="float-right">
          ✅
        </Link>
      </p>
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
