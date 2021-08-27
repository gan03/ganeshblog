import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
  };
  const openSearch = () => {
    setSearch(true);
  };
  const searchClass = search ? "searchinput active" : "searchinput";
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/post/1">Post </NavLink>
        </li>

        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            onClick={openSearch}
            className="searchicon"
            src="https://cdn1.iconfinder.com/data/icons/flat-web-browser/100/search-32.png"
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default NavBar;
