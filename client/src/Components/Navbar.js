import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="nav header">
        <NavLink to="" className="navbar-brand">
          Fiberous
        </NavLink>
        <div className="navbar-collapse">
          <ul className="navbar-nav-list">
            <li>
              <NavLink to="/products">Products </NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart </NavLink>
            </li>
            <li>
              <NavLink to="/">Wishlist </NavLink>
            </li>
          </ul>
          <form action="" className="navbar-form">
            <input className="nav-input"></input>
            <button className="btn btn-light">Search </button>
          </form>
        </div>
      </nav>
    </>
  );
}
