import React from "react";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";

const CardItem = ({
  properties: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <div className="col">
      <div className="card card-property">
        <img src={coverPhoto.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <p className="text-success">{isVerified && <GoVerified />}</p>
              <h4>
                AED {price}/{`${rentFrequency}`}
              </h4>
            </div>
          </h5>
          <div className="d-flex align-items-center justify-content-between p-1 property-icons text-primary">
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </div>
          <p className="card-text">
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
