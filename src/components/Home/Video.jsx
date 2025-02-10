import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const MediaCarousel = () => {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      url: "",
      title: "JEWELLERY",
      subtitle: "SHOP NOW",
    },
    {
      id: 2,
      type: "video",
      url: "/videos/video1.mp4",
      title: "VIDEO CONTENT",
    },
    {
      id: 3,
      type: "image",
      url: "/images/personal.jpg",
      title: "PERSONAL",
      subtitle: "EXPLORE",
    },
    {
      id: 4,
      type: "video",
      url: "/videos/video1.mp4",
      title: "VIDEO CONTENT",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === mediaItems.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return mediaItems.length - 1;
      return prev - 1;
    });
  };

  const getSlideOffset = (index) => {
    const cardWidth = 80; // 80% of container width
    const gapWidth = ((1.5 * 16) / window.innerWidth) * 100; // Convert 1.5rem to percentage
    return index * (cardWidth + gapWidth);
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto relative">
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
            "&:hover": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          aria-label="Previous"
        >
          <ArrowBack />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
            "&:hover": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          aria-label="Next"
        >
          <ArrowForward />
        </IconButton>

        <div className="w-full overflow-hidden px-4">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${getSlideOffset(currentIndex)}%)`,
            }}
          >
            {mediaItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-[80%] flex-shrink-0 h-[300px] overflow-hidden
                  transition-all duration-500 group
                  ${
                    index === currentIndex
                      ? "scale-110"
                      : "scale-90"
                  }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black transition-opacity duration-300" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light tracking-wider">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <button className="mt-2 text-sm tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors">
                      {item.subtitle}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;
