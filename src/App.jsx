import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import fox from './assets/fox.png';
import question from './assets/question.jpg';

function App() {
  return (
    <>
      {/* <Nav/> */}
      <Header/>
      <AboutMe 
        name="Kazimir" 
        title="Solo Dev" 
        blurb="I really like this fox. It's a Tibetan Fox and is perfectly adapted to the Tibetan plateau. It is low to the ground to protect from high winds. It is shaped like that because it has to be aerodynamic." 
        img={fox} 
      />
      <AboutMe 
        name="Creepster" 
        title="Imaginary Friend" 
        blurb="I am Creepster. I am your friend. Let me hug you. I am nice." 
        img={question}
      />
    </>
  );
}

export default App;
