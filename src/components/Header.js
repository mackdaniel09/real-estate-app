import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  img,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
}) => {
  return (
    <div className="container">
      <div className="card bg-dark text-white card-header-overlay">
        <img src={img} className="card-img " alt="house" />
        <div className="card-img-overlay bg-dark p-2 text-light bg-opacity-50 d-flex justify-content-center flex-column">
          <div className="container">
            <h3 className="card-title">{purpose}</h3>
            <h1 className="card-title">
              {title1} <br /> {title2}
            </h1>
            <p class="card-text">
              {desc1} <br /> {desc2}
            </p>
            <Link to={linkName} className="btn btn-secondary card-text">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
