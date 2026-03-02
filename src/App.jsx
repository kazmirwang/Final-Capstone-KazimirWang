import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import DreamJob from './components/DreamJob';
import Hobby from './components/Hobby';

function App() {
  return (
    <>
      <Hobby />
      {/* <Header />
      <main>
        <h2>Welcome to my website!</h2>
        <h1
          className="text-4xl font-bold text-blue-600
	bg-yellow-100 p-8 rounded-xl"
        >
          Tailwind is working!
        </h1>

        <Food />
        <br />
        <AboutMe />
        <br />
        <DreamJob />
        <br />
        <Hobby />
      </main>
      <Footer /> */}
    </>
  );
}

export default App;
