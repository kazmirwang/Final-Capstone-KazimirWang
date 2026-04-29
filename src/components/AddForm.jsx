import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../DataProvider";

export default function AddForm() {
  const navigate = useNavigate();

  async function addTask(formData) {
    "use server";
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.from("tasks").insert([
      {
        title: formData.get("title"),
        time: formData.get("time") + formData.get("timeUnit"),
        due: formData.get("due"),
        note: formData.get("note"),
        subject: formData.get("subject"),
      },
    ]);
    console.log("updated");
    navigate("/");
  }
  return (
    <div className="bg-mist-50 mx-3 shadow-sm mb-1 py-1 px-1 text-xl">
      <form action={addTask}>
        <label htmlFor="title">Name: </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border rounded-sm mb-1"
          required
        />
        <br />
        <label htmlFor="due">Due Date: </label>
        <input
          type="date"
          name="due"
          id="due"
          className="border rounded-sm mb-1"
        />
        <br />
        <label htmlFor="subject">Subject: </label>
        <select name="subject" id="subject" className="border rounded-sm mb-1">
          <option value="choose">Choose</option>
          <option value="AP Physics">AP Physics</option>
          <option value="AP Literature">AP Lit</option>
          <option value="AP Calculus BC">AP Calculus BC</option>
        </select>
        <br />
        <label htmlFor="time">Time to Complete: </label>
        <input
          type="number"
          name="time"
          id="time"
          className="border rounded-sm w-10"
        />
        <select
          name="timeUnit"
          id="timeUnit"
          className="border rounded-sm ml-1 mb-1"
        >
          <option value="min">min</option>
          <option value="hr">hr</option>
        </select>
        <br />
        <label htmlFor="note">Note: </label>
        <input
          type="text"
          name="note"
          id="note"
          className="border rounded-sm mb-1"
        />
        <br />
        <Link to="/">
          <button
            type="button"
            className="border rounded-sm px-1 text-2xl bg-red-300 w-30 inline-block ml-7"
          >
            Cancel
          </button>
        </Link>
        <input
          type="submit"
          value="Create"
          className="border rounded-sm px-1 text-2xl bg-emerald-100 w-30 float-right mr-7"
        />
      </form>
    </div>
  );
}
