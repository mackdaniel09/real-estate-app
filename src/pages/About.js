import React from "react";
import CardImage from "../components/CardImage";
import { about, about2 } from "../data/about";

const About = () => {
  return (
    <>
      <CardImage {...about} />
      <CardImage {...about2} />
    </>
  );
};

export default About;
