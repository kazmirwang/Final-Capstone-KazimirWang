import Header from "../components/Header";
import Friend from "../components/Friend";
import fox from "../assets/fox.png";
import question from "../assets/question.jpg";

export default function Friends() {
  return (
    <div>
      <Header title="Friends (placeholder)" />
      <Friend name="Maria" pfp={fox} progress={80} workingOn="Calculus" />
      <Friend name="John" pfp={question} progress={30} workingOn="Spanish" />
      <Friend name="Alex" pfp={fox} progress={50} workingOn="Physics" />
    </div>
  );
}
