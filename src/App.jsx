import './App.css';
import Nav from './components/Nav';
import fox from './assets/fox.png';

function App() {
  return (
    <>
      <Nav/>
      <h1 className='text-xl text-center text-red-600'>Hello World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod in cupiditate aspernatur repellendus suscipit, atque facere laboriosam laudantium exercitationem? Laborum repellat consequatur quo ducimus architecto perferendis vel officia rerum, enim, fugit sint! Vitae quos minima unde reprehenderit at quisquam ratione.</p>
      <ol className="list-decimal pl-5">
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vero?</li>
        <li>Beatae est illo non distinctio aspernatur! Similique debitis aperiam laudantium!</li>
        <li>Cum nisi temporibus provident. Corporis omnis minus beatae quidem iste.</li>
        <li>Voluptatem enim nesciunt odit excepturi impedit minima quas. Voluptatem, ratione?</li>
      </ol>
      <img src={fox} alt="fox" width="200px"/>
    </>
  );
}

export default App;
