import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
    {
        title: "Guardians Of The Galaxy",
        description:
            "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
    },
    {
        title: "Eternals",
        description:
            "In 5000 BC, ten superpowered Eternals were sent to Earth to fight the Deviants.",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    },
    {
        title: "Justice League",
        description:
            "After the ultimate sacrifice was not in vain, Bruce Wayne recruits a team to protect the Earth.",
        img: "https://images.unsplash.com/photo-1558980664-1c1741d2f19d",
    },
    {
        title: "Interstellar",
        description:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        img: "https://images.unsplash.com/photo-1571442463800-1337d7af9f9b",
    },
    {
        title: "Avengers: Endgame",
        description:
            "After the devastating events of Infinity War, the Avengers assemble once more to restore balance.",
        img: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667",
    },
];

const Video = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#121212]">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="w-[90%] md:w-[60%] h-[500px] rounded-lg"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white rounded-b-lg">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Video;