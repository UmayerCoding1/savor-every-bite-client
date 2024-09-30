import React, { useContext } from "react";
import { location, mobile, shopping } from "../../../../provider/imageProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./dervice.css";
import { Navigation } from "swiper/modules";
import ServiceSection from "./ServiceSection";
import MobileService from "./MobileService";
import { AuthContext } from "../../../../provider/AuthProvider";

const Service = () => {
  
  
  return (
    <div className="mt-10 p-2 w-full h-[21vh] lg:h-[41vh]">
       <h2 className="text-3xl font-bold text-center mb-5">Our Service</h2>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between ">
          <ServiceSection
            img={shopping}
            title={"Super fast Delivery"}
            des={`Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.`}
          />
          <ServiceSection
            img={location}
            title={"Live Order Tracking"}
            des={`Track your order while it is delivered to your doorstep from the restaurant.`}
          />
          <ServiceSection
            img={mobile}
            title={"Your Favorite Restaurants"}
            des={`Find the best and nearest top your favorite restaurants from your selected location.`}
          />
        </div>
      </div>

      <div className="lg:hidden">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <MobileService
              img={shopping}
              title={"Super fast Delivery"}
              des={`Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.`}
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <MobileService
              img={location}
              title={"Live Order Tracking"}
              des={`Track your order while it is delivered to your doorstep from the restaurant.`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <MobileService
              img={mobile}
              title={"Your Favorite Restaurants"}
              des={`Find the best and nearest top your favorite restaurants from your selected location.`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Service;
