import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay]);

const SwiperComponent = () => {
  return (
    <div>
      <>
        <Swiper
          slidesPerView={1}
          // grabCursor={true}
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[90vh] flex justify-center items-center cursor-pointer w-[100%] bg-red-400">
              <div className="flex flex-col space-y-4">
                <p className="text-4xl font-bold">!Hasta la vista!</p>
                <p className="font-semibold ">
                  Small text Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Impedit, beatae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[90vh] cursor-pointer w-[100%] bg-blue-400">
              <div className="flex flex-col space-y-4">
                <p className="text-4xl font-bold">!Adios amigo!</p>
                <p className="font-semibold ">
                  Small text Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Impedit, beatae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[90vh] cursor-pointer w-[100vw] bg-green-400"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[90vh] cursor-pointer w-[100vw] bg-pink-400"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[90vh] cursor-pointer w-[100vw] bg-gray-400"></div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SwiperComponent;
