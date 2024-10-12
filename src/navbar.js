import { NavLink } from "react-router-dom";
// For react-router-dom v6
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My First Blog</h1>
      <div className="links">
        <NavLink
          to="/"
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/create"
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
        >
          Blogs
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
