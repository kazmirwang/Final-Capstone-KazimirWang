function Header({ title }) {
  return (
    <>
      <h1 className="text-3xl text-center shadow-lg mx-3 mb-1 pb-1 bg-mist-50 text-mist-800">
        {title}
      </h1>
    </>
  );
}

export default Header;
