function Card() {
  const emoji = '🆔';
  const title = 'About Me';
  const description =
    'I am Kazimir Wang, a 12th grader, and I have two black cats.';
  return (
    <div className="card">
      <span style={{ fontSize: '48px' }}>{emoji}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
