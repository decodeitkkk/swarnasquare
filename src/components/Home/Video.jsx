import { useState, useEffect } from "react";

const MediaCarousel = () => {
  const mediaItems = [
    { id: 1, type: "image", url: "/images/banner1.jpg", title: "First Banner" },
    { id: 2, type: "video", url: "/videos/video1.mp4", title: "First Video" },
    {
      id: 3,
      type: "image",
      url: "/images/banner2.jpg",
      title: "Second Banner",
    },
    { id: 4, type: "video", url: "/videos/video2.mp4", title: "Second Video" },
  ];

  const [currentIndex, setCurrentIndex] = useState(3); // Start with second video (index 3)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-10 text-center px-4">
      <div className="relative flex items-center justify-center mx-auto overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          →
        </button>

        {/* Media Display */}
        <div className="w-[80%] mx-4 overflow-hidden">
          <div
            className="flex items-center gap-x-6 transition-transform duration-500 ease-in-out mx-auto"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {mediaItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 bg-black">
                <div
                  className={`relative w-full h-[60vh] flex items-center justify-center rounded-lg transition-all duration-500 ${
                    index === currentIndex
                      ? "scale-110 shadow-[0_0_25px_5px_gold]"
                      : ""
                  }`}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
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
