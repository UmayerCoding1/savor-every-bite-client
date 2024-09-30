import React from "react";
import Banner from "./banner/Banner";
import Service from "./service/Service";
import TopSelling from "./top-seling/TopSelling";
import HotelLocation from "./hotel-location/HotelLocation";
import Partners from "./partners/Partners";
import FAQ from "./faq/FAQ";
import useTile from "../../../hooks/useTitle";

const Home = () => {
  useTile('')
  return (
    <div>
      <Banner />
      <Service />
      <TopSelling />
      <HotelLocation />
      <Partners />
      {/* <FAQ/> */}
    </div>
  );
};

export default Home;
