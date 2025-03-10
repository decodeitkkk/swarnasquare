import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Heading2 } from "./Heading";

const cards = [
  { title: "TEMPLE WORK", img: "/gallery_images_6.png" },
  { title: "GOLD BEADS", img: "/gallery_images_1.png" },
  { title: "GOLD CHAINS", img: "/gallery_images_2.png" },
  { title: "GOLD BULLION", img: "/gallery_images_3.png" },
  { title: "DIE COLLECTION", img: "/gallery_images_4.png" },
  { title: "GOLD ATTACHMENTS", img: "/gallery_images_5.png" },
  { title: "GOLD ATTACHMENTS", img: "/gallery_images_5.png" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  console.log(currentIndex, typeof currentIndex);

  return (
    <>
      <div className="bg-[#FFE49F4D]/30 py-20 backdrop-blur-sm z-[0]   ">
        <div>
          <div className=" -mt-28 mb-10 text-3xl md:text-5xl font-raleway font-bold text-white  backdrop-blur-sm bg-black/30  border-[0.51px] border-white py-2 px-4 rounded-md w-max mx-auto uppercase ">
            Ultimate Collection
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={typeof currentIndex === "number" ? 100 : 100}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode]}
            className="w-full bg-[#CAB276] overflow-visible  px-6"
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className="!w-[192px] py-10   hover:z-10 overflow-visible  "
              >
                <div
                  className={` w-52 h-72   p-2 bg-[#302e29] flex-col justify-start items-center gap-3 inline-flex transform transition-all duration-500 ease-in-out hover:scale-150 ${
                    index === currentIndex
                      ? "border border-[#FFF1CE] drop-shadow-[0_0px_10px_#FFE49F]"
                      : ""
                  } `}
                  onMouseEnter={() => setCurrentIndex(index)}
                  onMouseLeave={() => setCurrentIndex("")}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={card.img}
                    alt={card.title}
                  />
                  <div className="w-[165px] text-white text-base  font-bold font-comfortaa text-center  ">
                    {card.title}
                    <Button
                      size="sm"
                      className={` ${
                        index === currentIndex ? "block" : "hidden"
                      } mx-auto text-black font-raleway  bg-gradient-to-r from-[#FFE49F]/30 from-2%  via-[#ffe49f] via-50%  to-[#FFE49F]/30 to-98% `}
                    >
                      <Link to="#">
                        <span>View More</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Gallery;
