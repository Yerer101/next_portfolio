"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs";

import SwiperCore, { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          source: "",
          link: "https://kezyasv2.onrender.com/",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          source: "",
          link: "https://plusova.com/",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          source: "",
          link: "https://imdb-oh67.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          source: "",
          link: "https://iat-appointment.onrender.com/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden ">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
                      {/* links to source and web */}
                      <Link href={image.source ? image.source : ""} target="_blank" rel="noopener noreferrer">
                        <h2 className="absolute bottom-2 cursor-pointer   right-4 duration-700 tracking-wide font-mono  hover:text-red-600 hover:scale-125 hover:font-bold transition-all ">
                          Source
                        </h2>
                      </Link>
                      <Link href={image.link ? image.link : ""} target="_blank" rel="noopener noreferrer">
                        <h2 className="absolute bottom-2 right-24 duration-300 tracking-widest font-mono  hover:text-red-600 hover:scale-125 hover:font-bold transition-all">
                          Link
                        </h2>
                      </Link>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 duration-500">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="flex">
                            <div className="delay-100 ">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[600%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
