function Card() {
  const emoji = '💼';
  const title = 'My Dream Job';
  const description =
    'I want to be a Professor of Digital Arts and Experimental Media (DXARTS) because I enjoy both off those things along with teaching.';
  return (
    <div className="card">
      <span style={{ fontSize: '48px' }}>{emoji}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
