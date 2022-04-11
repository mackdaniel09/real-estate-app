import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Property from "../components/Property";
import { header2 } from "../data/header";
import { fetchRentApi } from "../utils/fetchApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";

const RentPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchApi() {
    await axios
      .request(fetchRentApi)
      .then((response) => {
        setItems(response.data.hits);
        setLoading(false);
        console.log(response.data.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Header {...header2} />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {loading ? (
            <>
              <div className="col">
                <Skeleton count={5} className="loading-skeleton" />
              </div>
              <div className="col">
                <Skeleton count={5} className="loading-skeleton" />
              </div>
            </>
          ) : (
            <>
              {items.map((item) => (
                <Property items={item} key={item.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RentPage;
