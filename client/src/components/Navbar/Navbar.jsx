import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">
          <span>RACIPE</span>
        </a>
        <a href="/">Resources</a>
        <a href="/">About</a>
      </div>
      <div className="right">
        <a href="/">Right</a>
      </div>
    </div>
  );
}
export default Navbar;
