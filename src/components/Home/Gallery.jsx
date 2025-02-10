import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  const cards = [
    {
      title: "TEMPLE WORK",
      img: "", // Ensure valid images are used
      type: "category",
    },
    {
      title: "GOLD BEADS",
      img: "/images/gold-beads.jpg",
      type: "category",
    },
    {
      title: "GOLD CHAINS",
      img: "/images/gold-chains.jpg",
      type: "category",
    },
    {
      title: "GOLD BULLION",
      img: "/images/gold-bullion.jpg",
      type: "category",
    },
    {
      title: "DIE COLLECTION",
      img: "/images/die-collection.jpg",
      type: "category",
    },
    {
      title: "GOLD ATTACHMENTS",
      img: "/images/gold-attachments.jpg",
      type: "category",
    },
    {
      title: "GOLD ATTACHMENTS",
      img: "/images/gold-attachments.jpg",
      type: "category",
    },
  ];

  // Adjust number of visible cards based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      setCardsPerSlide(width < 640 ? 2 : width < 1024 ? 3 : 6);
    };

    updateCardsPerSlide(); // Set initial value
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full bg-[#FFE49F] bg-opacity-30 py-24 mt-16">
      {/* Title */}
      {/* <div className="relative text-center mb-6"> */}
      <h2 className="absolute top-[-30px] left-[28%] text-4xl md:text-6xl text-white font-raleway font-bold">
        ULTIMATE COLLECTION
      </h2>
      {/* </div> */}

      <div className="relative w-full">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70"
        >
          <ArrowLeft className="text-yellow-500 w-6 h-6" />
        </button>

        {/* Carousel Wrapper */}
        <div className="relative h-[350px] overflow-visible bg-[#CAB276]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / cardsPerSlide)
              }%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 px-4 py-12"
                style={{ width: `${100 / cardsPerSlide}%` }}
              >
                <div
                  className="
                  relative group cursor-pointer 
                  transition-all duration-700 ease-in-out
                  hover:scale-150 hover:z-50 hover:shadow-2xl
                  h-[250px] w-[200px] bg-white overflow-hidden
                  shadow-lg"
                >
                  {/* Image */}
                  <div className="relative w-full h-64">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Title & Button (Repositions on hover) */}
                  <div
                    className="
              absolute left-0 right-0 p-4 text-center transition-all duration-300
              group-hover:bottom-4 group-hover:flex group-hover:flex-col group-hover:items-center"
                    style={{
                      bottom: "0px", // Default position
                    }}
                  >
                    <h3 className="text-white text-sm font-bold tracking-wider transition-all duration-300">
                      {card.title}
                    </h3>

                    {/* Button appears below on hover */}
                    <button
                      className="
                mt-2 px-6 py-2 bg-yellow-500 text-black text-sm rounded-full 
                opacity-0 group-hover:opacity-100 transition-all duration-300 
                hover:bg-yellow-400 font-medium tracking-wide"
                    >
                      VIEW MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70"
        >
          <ArrowRight className="text-yellow-500 w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
