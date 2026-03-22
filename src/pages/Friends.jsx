import Header from "../components/Header";
import Friend from "../components/Friend";

export default function Friends() {
  return (
    <div>
      <Header title="Friends" />
      <Friend name="Maria" pfp="" progress={80} workingOn="Calculus" />
      <Friend name="John" pfp="" progress={30} workingOn="Spanish" />
      <Friend name="Alex" pfp="" progress={50} workingOn="Physics" />
    </div>
  );
}
