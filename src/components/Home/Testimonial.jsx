import { useState } from 'react';
import person from "../../assets/Testimonials/person.png"

const testimonials = [
  {
    text: "I ordered a couple of necklaces and a pair of earrings from you at the Valentine's Day jewelry party. .. Thanks from a very appreciative customer who will wear your wonderful necklaces constantly",
    name: "Adam Thomson",
    image: person
  },
  {
    text: "I ordered a couple of necklaces and a pair of earrings from you at the Valentine's Day jewelry party. .. Thanks from a very appreciative customer who will wear your wonderful necklaces constantly",
    name: "Adam Thomson",
    image: person
  },
  {
    text: "I ordered a couple of necklaces and a pair of earrings from you at the Valentine's Day jewelry party. .. Thanks from a very appreciative customer who will wear your wonderful necklaces constantly",
    name: "Adam Thomson",
    image:person
  },
 
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-medium text-center mb-8">Testimonials</h2>
      <div className="bg-white  p-6">
        <p className="text-gray-600 text-center mb-6">
          {testimonials[currentIndex].text}
        </p>
        <div className="flex flex-col items-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={80}
            height={80}
            className="rounded-full mb-2"
          />
          <p className="font-semibold">{testimonials[currentIndex].name}</p>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
