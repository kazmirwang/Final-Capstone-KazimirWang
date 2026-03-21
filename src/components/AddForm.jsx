export default function AddForm() {
  return (
    <div className="bg-mist-50 mx-3 shadow-sm mb-1 py-1 px-1 text-xl">
      <form action="#">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border rounded-sm mb-1"
          required
        />
        <br />
        <label htmlFor="date">Due Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          className="border rounded-sm mb-1"
        />
        <br />
        <label htmlFor="subject">Subject: </label>
        <select name="subject" id="subject" className="border rounded-sm mb-1">
          <option value="choose">choose a subject</option>
          <option value="ap physics">AP Physics</option>
          <option value="ap lit">AP Lit</option>
          <option value="ap calc bc">AP Calculus BC</option>
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
        <input
          type="submit"
          value="Create"
          className="border rounded-sm px-1 text-2xl bg-emerald-100 w-30"
        />
      </form>
    </div>
  );
}
