import React from "react";
import Header from "../components/Header";
import CardImage from "../components/CardImage";
import Carousel from "../components/Carousel";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { header1 } from "../data/header";
import { about } from "../data/about";

const Home = () => {
  return (
    <div>
      <Header {...header1} />
      {/* {header.map((item, index) => (
        // <Carousel>
        <Header item={item} key={index} />
        // </Carousel>
      ))} */}

      <CardImage {...about} />
    </div>
  );
};

export default Home;
