import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Progress from "./pages/Progress";
import Tracker from "./pages/Tracker";
import Friends from "./pages/Friends";
import "./App.css";
import friendsIcon from "./assets/friends.png";
import progressIcon from "./assets/progress.png";
import trackerIcon from "./assets/tracker.png";
import Add from "./pages/Add";

export default function App() {
  return (
    <>
      <div className="fixed h-full w-full -z-10 bg-amber-50"></div>
      <div className="fixed h-1 w-full bg-amber-50"></div>
      <BrowserRouter basename="/Final-Capstone-KazimirWang/">
        <nav className="fixed bottom-0 h-20 w-full columns-3 bg-emerald-300 text-center">
          <Link to="/tracker" className="hover:bg-emerald-500 h-full block">
            <img
              src={trackerIcon}
              alt="Tracker"
              className="max-h-full mx-auto"
            />
          </Link>
          <Link to="/" className="hover:bg-emerald-500 h-full block">
            <img
              src={progressIcon}
              alt="Progress"
              className="max-h-full mx-auto"
            />
          </Link>
          <Link to="/friends" className="hover:bg-emerald-500 h-full block">
            <img
              src={friendsIcon}
              alt="Friends"
              className="max-h-full mx-auto"
            />
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Progress />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
