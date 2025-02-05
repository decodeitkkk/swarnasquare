
// import { useState, useEffect } from "react";
// import img1 from "../../assets/Home/Gallery/1.png";
// import img2 from "../../assets/Home/Gallery/2.png";
// import img3 from "../../assets/Home/Gallery/3.png";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const Gallery = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [cardsPerSlide, setCardsPerSlide] = useState(3); 

//   const cards = [
//     {
//       title: "Proin Commodo",
//       weight: "200 Gm",
//       img: img1,
//     },
//     {
//       title: "Vestibulum Porta",
//       weight: "500 Gm",
//       img: img2,
//     },
//     {
//       title: "Jewellery Set",
//       weight: "1000 Gm",
//       img: img3,
//     },
//     {
//       title: "Jewellery Set",
//       weight: "200 Gm",
//       img: img1,
//     },
//     {
//       title: "Vestibulum Porta",
//       weight: "500 Gm",
//       img: img2,
//     },
//     {
//       title: "Jewellery Set",
//       weight: "1000 Gm",
//       img: img3,
//     },
//   ];

//   // Adjust the number of cards shown per slide based on window width
//   const updateCardsPerSlide = () => {
//     const width = window.innerWidth;
//     if (width < 640) {
//       setCardsPerSlide(1); // 1 card on small screens
//     } else if (width >= 640 && width < 1024) {
//       setCardsPerSlide(2); // 2 cards on medium screens
//     } else {
//       setCardsPerSlide(3); // 3 cards on large screens
//     }
//   };

//   useEffect(() => {
//     updateCardsPerSlide(); // Set on load
//     window.addEventListener("resize", updateCardsPerSlide); // Update on window resize
//     return () => window.removeEventListener("resize", updateCardsPerSlide); // Cleanup
//   }, []);

//   const totalSlides = Math.ceil(cards.length / cardsPerSlide); // Total number of slides based on cardsPerSlide

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className="max-w-7xl mx-auto my-12 py-10 text-center px-4 bg-[rgba(255,228,159,0.2)]">
//       <div className="text-[36px] md:text-[72px] font-bold text-white mb-8">
//         ULTIMATE COLLECTION
//       </div>

//       <div className="relative flex items-center justify-center mx-auto">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2  p-2 rounded-full z-10"
//         >
//           <span className="text-2xl">
//             <ArrowLeft className="text-orange-500" />
//           </span>
//         </button>

//         {/* Carousel */}
//         <div className="w-full h-full mx-auto overflow-hidden">
//           <div
//             className="flex items-center transition-transform duration-500 ease-in-out mx-auto"
//             style={{
//               transform: `translateX(-${
//                 currentSlide * (100 / cardsPerSlide)
//               }%)`,
//             }}
//           >
//             {/* Cards: group them based on responsive design */}
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
//                 style={{ minWidth: `${100 / cardsPerSlide}%` }}
//               >
//                 <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="w-[70%] lg:w-[80%] md:w-[80%] lg:h-[70%] md:h-[70%] h-[40%] object-cover rounded-l-3xl"
//                   />
//                   <div className=" mt-0 md:mt-2 lg:mt-2 p-4 text-center">
//                     <h3 className=" text-base lg:text-xl font-semibold">
//                       {card.title}
//                     </h3>
//                     <p className="text-gray-500 lg:text-base text-sm">
//                       {card.weight}
//                     </p>
//                     <button className="lg:mt-2 md:mt-2 mt-1 px-4 py-2 bg-white text-orange-500 border-2 border-orange-500 rounded text-sm lg:text-base md:text-base">
//                       BUY NOW
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           className="absolute right-2 lg:right-4  top-1/2 -translate-y-1/2 p-2 rounded-full z-10"
//         >
//           <span className="text-2xl">
//             <ArrowRight className="text-orange-500" />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(5);

  const cards = [
    {
      title: "TEMPLE WORK",
      // img: "./quote-bg.png",
      type: "category",
    },
    {
      title: "GOLD BEADS",
      img: "/api/placeholder/240/240",
      type: "category",
    },
    {
      title: "GOLD CHAINS",
      img: "/api/placeholder/240/240",
      type: "category",
    },
    {
      title: "GOLD BULLION",
      img: "/api/placeholder/240/240",
      type: "category",
      // subtitle: "24 carat 995",
    },
    {
      title: "DIE COLLECTION",
      img: "/api/placeholder/240/240",
      type: "category",
    },
    {
      title: "GOLD ATTACHMENTS",
      img: "/api/placeholder/240/240",
      type: "category",
    },
  ];

  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsPerSlide(2);
    } else if (width >= 640 && width < 1024) {
      setCardsPerSlide(4);
    } else {
      setCardsPerSlide(5);
    }
  };

  useEffect(() => {
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
    <div className="relative w-full bg-[rgba(254,211,104,0.3)] py-12">
      <h2 className="text-3xl text-white text-center">ULTIMATE COLLECTION</h2>
      {/* <div className="w-full mx-auto relative"> */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
      >
        <ArrowLeft className="text-yellow-500 w-6 h-6" />
      </button>

      <div className="h-[450px] overflow-hidden bg-[#CAB276]">
        <div
          className="flex transition-transform duration-500 ease-in-out mt-12"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 px-2 py-6"
              style={{ width: `${100 / cardsPerSlide}%` }}
            >
              <div
                className={`
                  relative group cursor-pointer 
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]
                  h-[300px]
                `}
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden h-64">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-300" />

                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-sm font-bold tracking-wider">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Button Container */}
                <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center">
                  <button
                    className="px-6 py-2 bg-yellow-500 text-black text-sm rounded-full 
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

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
      >
        <ArrowRight className="text-yellow-500 w-6 h-6" />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Gallery;