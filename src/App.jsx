import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Progress from "./pages/Progress";
import Tracker from "./pages/Tracker";
import Friends from "./pages/Friends";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="fixed bottom-0 h-20 w-full columns-3 bg-emerald-300 text-center">
        <Link to="/tracker" className="hover:bg-emerald-500 h-full block">
            <img src="#" alt="Tracker" />
        </Link>
        <Link to="/" className="hover:bg-emerald-500 h-full block">
            <img src="#" alt="Progress" />
        </Link>
        <Link to="/friends" className="hover:bg-emerald-500 h-full block">
            <img src="#" alt="Friends" />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Progress />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

