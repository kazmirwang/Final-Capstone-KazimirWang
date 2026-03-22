import ProgressBar from "@ramonak/react-progress-bar";

export default function Friend({ name, pfp, progress, workingOn }) {
  return (
    <div className="border rounded-sm m-3 p-1">
      <img
        src={pfp}
        alt={name + " pfp"}
        className="inline-block border rounded-[50%]"
      />
      <span className="text-2xl"> {name} </span>
      <ProgressBar
        completed={progress}
        className="inline-block w-1/2 float-right mt-2 mr-2"
        bgColor="#5EE9B5"
        labelColor="black"
      />
      <p>Working on: {workingOn}</p>
    </div>
  );
}
