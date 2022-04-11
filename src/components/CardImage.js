import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardImage = ({ img, title, text1, text2, btnText, imgFirst }) => {
  return (
    <div className="container mt-5">
      <div className="card mb-3 card-image">
        <div
          className={
            imgFirst
              ? "row g-0 d-flex flex-row"
              : "row g-0 d-flex flex-row-reverse"
          }
        >
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text1}</p>
              <p className="card-text">{text2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
