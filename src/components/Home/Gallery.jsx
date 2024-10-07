
import { useState, useEffect } from "react";
import img1 from "../../assets/Home/Gallery/1.png";
import img2 from "../../assets/Home/Gallery/2.png";
import img3 from "../../assets/Home/Gallery/3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3); 

  const cards = [
    {
      title: "Proin Commodo",
      weight: "200 Gm",
      img: img1,
    },
    {
      title: "Vestibulum Porta",
      weight: "500 Gm",
      img: img2,
    },
    {
      title: "Jewellery Set",
      weight: "1000 Gm",
      img: img3,
    },
    {
      title: "Jewellery Set",
      weight: "200 Gm",
      img: img1,
    },
    {
      title: "Vestibulum Porta",
      weight: "500 Gm",
      img: img2,
    },
    {
      title: "Jewellery Set",
      weight: "1000 Gm",
      img: img3,
    },
  ];

  // Adjust the number of cards shown per slide based on window width
  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsPerSlide(1); // 1 card on small screens
    } else if (width >= 640 && width < 1024) {
      setCardsPerSlide(2); // 2 cards on medium screens
    } else {
      setCardsPerSlide(3); // 3 cards on large screens
    }
  };

  useEffect(() => {
    updateCardsPerSlide(); // Set on load
    window.addEventListener("resize", updateCardsPerSlide); // Update on window resize
    return () => window.removeEventListener("resize", updateCardsPerSlide); // Cleanup
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide); // Total number of slides based on cardsPerSlide

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 text-center px-4">
      <h2 className="text-3xl font-medium">Gallery</h2>
      <p className="text-gray-500 mb-4 lg:mb-8">A large collection of gold jewellery</p>

      <div className="relative flex items-center justify-center mx-auto">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2  p-2 rounded-full z-10"
        >
          <span className="text-2xl"><ArrowLeft className="text-orange-500" /></span>
        </button>

        {/* Carousel */}
        <div className="w-full  h-full mx-auto overflow-hidden ">
          <div
            className="flex items-center transition-transform duration-500 ease-in-out  mx-auto"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)` }}
          >
            {/* Cards: group them based on responsive design */}
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                style={{ minWidth: `${100 / cardsPerSlide}%` }}
              >
                <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-[70%] lg:w-[80%] md:w-[80%] lg:h-[70%] md:h-[70%] h-[40%] object-cover rounded-l-3xl"
                  />
                  <div className=" mt-0 md:mt-2 lg:mt-2 p-4 text-center">
                    <h3 className=" text-base lg:text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-500 lg:text-base text-sm">{card.weight}</p>
                    <button className="lg:mt-2 md:mt-2 mt-1 px-4 py-2 bg-white text-orange-500 border-2 border-orange-500 rounded text-sm lg:text-base md:text-base">
                      BUY NOW
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
          className="absolute right-2 lg:right-4  top-1/2 -translate-y-1/2 p-2 rounded-full z-10"
        >
          <span className="text-2xl"><ArrowRight className="text-orange-500" /></span>
        </button>
      </div>
      
    </div>
  );
};

export default Gallery;