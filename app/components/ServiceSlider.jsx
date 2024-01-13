"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import SwiperCore, { FreeMode, Pagination } from "swiper/modules";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Design",
    description: "Modern simplistic desin for your bussiness.",
  },
  {
    icon: <RxPencil2 />,
    title: "Full stack devlopement",
    description: "Building your fullstack web app with the quality and industry standard technology and deliver on time.",
  },
  {
    icon: <RxDesktop />,
    title: "Depoyment",
    description: "Deployment of your web including the purchase of domain name and other neccssary thechnical issue.",
  },
  {
    icon: <RxReader />,
    title: "Static web",
    description: "build simpe and detailed static web",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "optimize your findabllity online make uyou stand out of other compettion",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169,0.15)] transition-all duration-300 h-96" >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-transform duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
