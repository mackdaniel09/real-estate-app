import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { FiKey } from "react-icons/fi";
import { MdOutlineGroups } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand text-primary fw-bold" to="/">
          Realtor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about-us">
                <MdOutlineGroups /> About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/search">
                <BsSearch /> Search
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/purpose=for-sale">
                <FcAbout /> Buy Property
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/purpose=for-rent">
                <FiKey /> Rent Property
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
