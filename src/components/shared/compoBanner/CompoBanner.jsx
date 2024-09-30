import React from "react";
import { headerImage } from "../../../provider/imageProvider";
import { Link } from "react-router-dom";

const CompoBanner = ({ title, pageTitle }) => {
  return (
    <div className="w-full h-60 mb-2 relative">
      <img className="w-full h-full " src={headerImage} alt="" />
      <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center flex-col">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-3 font-bold">
          <span className="text-cyan-400">
            <Link to={"/"}>Home</Link>
          </span>
          / {pageTitle}
        </p>
      </div>
    </div>
  );
};

export default CompoBanner;
