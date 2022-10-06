
function Header() {
  return (
    <header>
      <a href="#home" className="logo"><i className="fas fa-smile"></i>app</a>
      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar">
        <ul>
          <li><a className="active" href="#home">home</a></li>
          <li><a href="#feature">feature</a></li>
          <li><a href="#screenshot">screenshot</a></li>
          <li><a href="#review">review</a></li>
          <li><a href="#plan">plan</a></li>
          <li><a href="#download">download</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
