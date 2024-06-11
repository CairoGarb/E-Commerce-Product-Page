import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { ReactNode, useRef } from "react";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
  onClose: () => void;
}

export const Slider = ({ settings, children, onClose }: SliderProps) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="slider_container">
      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...settings}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
      <div className="buttons">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="close" onClick={onClose}>
        <i className="fa-solid fa-x"></i>
      </div>
    </div>
  );
};
