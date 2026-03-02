function Card() {
  const emoji = '🎴';
  const title = 'Magic the Gathering';
  const description =
    'Magic the Gathering is a strategy based trading card game that I am incredibly obsessed with. I give it 5 stars.';
  return (
    <div className="card text-center bg-yellow-100">
      <span className="text-8xl border border-5 border-purple-400">
        {emoji}
      </span>
      <h3 className="mt-10 text-lg bg-sky-500 hover:text-shadow-sm">{title}</h3>
      <p className="text-indigo-800 italic">{description}</p>
    </div>
  );
}

export default Card;
