import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { b1Product, b2Product, b3Product, banner1bg, banner2bg, banner3bg } from "../../../../provider/imageProvider";
import "./banner.css";
import { Link } from "react-router-dom";
import OfferInBanner from "./offer-in-banner/OfferInBanner";
const Banner = () => {
  
  return (
    <div className="mt-3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <OfferInBanner
            bannerProduct={b1Product}
            bannerBg={banner1bg}
            title={`GRILLED SHRIMP TACOS`}
            des={`Grilled shrimp, slaw, avocado, cilantro-lime sauce, wrapped in tortillas.`}
            discount={{
                dis: "50%",
                status: "OFF",
                offerEnd: "30 september 2024 11:59 PM",
            }}
          />
        </SwiperSlide>


            <SwiperSlide>
              <OfferInBanner
                bannerProduct={b2Product}
                bannerBg={banner2bg}
                title={'BIRYANI'}
                des={`Fragrant rice, spiced chicken, saffron, herbs, classic Bangladeshi biryani.`}
                discount={{
                  dis: "18%",
                  status: "OFF",
                  offerEnd: "30 september 2024 11:59 PM",
                }}
              />
            </SwiperSlide>

       
            <SwiperSlide>
              <OfferInBanner
                bannerProduct={b3Product}
                bannerBg={banner3bg}
                title={'Kacchi Biryani'}
                des={`Kacchi Biryani: aromatic rice, tender marinated meat, spices, saffron, slow-cooked perfection.`}
                discount={{
                  dis: "",
                  status: "Upcoming",
                  offerEnd: "1 october 2024 10:00 AM",
                }}
              />
            </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
