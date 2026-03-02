function Food() {
  const food1 = 'Borscht';
  const food2 = 'Pierogi';
  const food3 = 'Kapusta z Grochem';
  return (
    <div>
      <h2>Foods I Sell:</h2>
      <ul>
        <li>Opłatek</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3}</li>
      </ul>
    </div>
  );
}

export default Food;
