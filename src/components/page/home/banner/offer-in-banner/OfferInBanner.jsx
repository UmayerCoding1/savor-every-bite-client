import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountDown from "../count-down/CountDown";

const OfferInBanner = ({
  bannerProduct,
  bannerBg,
  des,
  discount,
  title
}) => {
  const [shopStatus, setShopStatus] = useState(true);
  const handleShopBtn = (status) => {
    setShopStatus(status);
  };
  return (
    <div>
      <div className="w-full h-[23vh] lg:h-[80vh] relative">
        <div id="slide1" className="carousel-item  w-full rounded-lg">
          <img src={bannerBg} className="w-full  " />

          <div
            className="absolute  flex justify-between w-full h-full left-0  top-0    
           bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] lg:flex items-center
          "
          >
            <div className="text-white mt-5    pl-12 rounded-lg lg:w-1/2">
              <section className="w-32">
                <CountDown
                  offerEnd={discount.offerEnd}
                  handleShopBtn={handleShopBtn}
                />
              </section>

              <h2 className="text-2xl mt-2 font-semibold  lg:text-5xl">
                {title}
              </h2>
              <p className="text-[15px]  text-gray-300 lg:mt-3 ">{des}</p>
              <section className=" lg:mt-10">
                {shopStatus ? (
                  <Link to={'/food-details/66f4162ac3052446dd021d6b'}>
                    <button className="p-3 bg-[#D0AD88] font-bold rounded-xl mb-10">
                      Shop Now
                    </button>
                  </Link>
                ) : (
                  <p className="text-lg text-red-500 font-semibold">
                    This offer is not available
                  </p>
                )}
              </section>
            </div>

            <div className="w-48 lg:w-auto">
              <img
                className="pt-16 b1-product lg:pt-20"
                src={bannerProduct}
                alt=""
              />
              <dir className="bg-red-500  w-20 h-20 rounded-full text-white   flex flex-col items-center justify-center absolute top-0 right-0 lg:top-96 lg:right-5 lg:bottom-6 lg:w-28 lg:h-20">
                <h2 className="text-2xl">{discount.dis}</h2>
                <p>{discount.status}</p>
              </dir>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferInBanner;
