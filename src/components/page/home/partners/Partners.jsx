import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../../provider/AuthProvider";
const Partners = () => {
  const [partners, setPartners] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    axios("https://savor-every-bite-site.vercel.app/partner").then((res) =>
      setPartners(res.data)
    );
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center mt-20">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center mb-5">
        <span className="w-16 bg-orange-500 h-[2px] block"></span>
        <h2 className="text-2xl font-bold mx-2 text-orange-500 lg:text-3xl">
          Some of our top partners
        </h2>
        <span className="w-16 bg-orange-500 h-[2px] block"></span>
      </div>

      <div className="flex">
        {partners.map((p, i) => (
          <Marquee key={i}>
            <img className="w-16 mr-2" src={p.image} alt="" />
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default Partners;
