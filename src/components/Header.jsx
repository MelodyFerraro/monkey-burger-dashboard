const Header = ({ marca, dashboard, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <h1 className="monkey-burger">{marca}</h1>
      <h2 className="dashboard">{dashboard}</h2>
    </div>
  );
};

export default Header;
