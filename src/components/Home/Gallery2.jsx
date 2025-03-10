import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Heading2 } from "./Heading";
const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { title: "TEMPLE WORK", img: "" },
    { title: "GOLD BEADS", img: "/images/gold-beads.jpg" },
    { title: "GOLD CHAINS", img: "/images/gold-chains.jpg" },
    { title: "GOLD BULLION", img: "/images/gold-bullion.jpg" },
    { title: "DIE COLLECTION", img: "/images/die-collection.jpg" },
    { title: "GOLD ATTACHMENTS", img: "/images/gold-attachments.jpg" },
    { title: "GOLD ATTACHMENTS", img: "/images/gold-attachments.jpg" },
  ];

  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      setCardsPerSlide(width < 640 ? 2 : width < 1024 ? 3 : 6);
    };

    updateCardsPerSlide();
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
    <div className="w-full bg-[#FFE49F]/30 h-[80vh] flex flex-col align-middle  ">
      <Heading2 heading="Utlimate Collection" />

      <div className="relative w-full">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70"
        >
          <ArrowLeft className="text-yellow-500 w-6 h-6" />
        </button>

        {/* Carousel Wrapper */}
        <div className="w-full h-full  bg-[#CAB276] px-6">
          <div
            className="flex transition-transform duration-500 ease-in-out items-center"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / cardsPerSlide)
              }%)`,
              gap: hoveredIndex !== null ? "30px" : "10px",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 px-4 py-12 transition-all duration-700 ease-in-out`}
                style={{
                  width: `${100 / cardsPerSlide}%`,
                  transform:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "scale(0.9)"
                      : "scale(1)",
                  transition: "transform 0.5s ease",
                }}
              >
                <div
                  className="
                    relative group overflow-hidden border-transparent transition-all duration-700
                    ease-in-out hover:z-50 hover:border-[#FFE49F] hover:border-2 hover:shadow-[0px_0px_20px_rgba(255,228,159,0.6)]
                  "
                  style={{
                    transform:
                      hoveredIndex === index ? "scale(1.5)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
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

                  {/* Title & Button */}
                  <div className="absolute left-0 right-0 text-center transition-all duration-500 bottom-4 group-hover:bottom-8 flex flex-col items-center">
                    <h3 className="text-white text-sm font-comfortaa font-bold tracking-wider transition-all duration-300">
                      {card.title}
                    </h3>
                    <button
                      className="
                        font-raleway cursor-pointer mt-2 px-6 py-2 bg-gradient-to-r from-[#FFE49F] via-[#F6CB5D] to-[#FFE49F]
                        text-black text-sm rounded-sm font-bold tracking-wide opacity-0 scale-90 group-hover:opacity-100 
                        group-hover:scale-100 transition-all duration-300
                      "
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
