import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "/ring.jpg",
    type: "image",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "/ring2.jpg",
    type: "video",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "/ring.jpg",
    type: "image",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/ring2.jpg",
    type: "video",
  },
];

const CarouselCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef([]);

  // Set up Intersection Observer to track which slide is fully visible
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.9 // consider element visible when 90% is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Number(entry.target.dataset.index);
        
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          setActiveIndex(index);
        }
      });
    }, options);

    slideRefs.current.forEach(slide => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slideRefs.current.forEach(slide => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  const getCardStyle = (index) => {
    return index === activeIndex 
      ? "scale-100 border border-[#635b48] drop-shadow-[0_0px_50px_#FFE49F] z-20" 
      : "scale-90 z-10";
  };

  return (
    <div className="  bg-black/10 py-10 ">
      <div>
        
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={true}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode]}
          className="w-full overflow-visible px-6"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="!w-[65vw] py-10 overflow-visible"
            >
              <div
                ref={el => slideRefs.current[index] = el}
                data-index={index}
                className={`w-full h-[70vh] flex-col justify-start items-center gap-3 inline-flex transition-all duration-500 ease-in-out rounded-lg ${getCardStyle(index)}`}
              >
                <img
                  className="w-full h-full object-cover rounded-lg "
                  src={card?.src}
                  alt={card?.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselCard;