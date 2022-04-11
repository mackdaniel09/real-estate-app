import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Property from "../components/Property";
import { header1 } from "../data/header";
import { fetchSaleApi } from "../utils/fetchApi";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";

const SalePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchApi() {
    await axios
      .request(fetchSaleApi)
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
      <Header {...header1} />
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

export default SalePage;
