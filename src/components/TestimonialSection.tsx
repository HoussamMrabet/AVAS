import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      comment: "Très bon stage avec Kim Bou",
      author: "Amaris De Pilla",
      position: "Bénévale"
    },
    {
      id: 2,
      comment: "Grâce à AVAS, mon fils a repris confiance en lui et s'investit pleinement dans ses études. Un vrai changement !",
      author: "Mme Zineb A.",
      position: "Parent"
    },
    {
      id: 3,
      comment: "AVAS m'a permis de mieux m'organiser dans mes devoirs et découvrir des métiers que je ne connaissais pas. Je me sens plus confiant pour l'avenir.",
      author: "Bernard Semeur",
      position: "Éléve"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="px-4 md:px-0">
      <div className="my-6 md:my-10 min-h-[400px] md:min-h-[500px] flex flex-col py-8 md:py-16 mx-auto bg-black">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
            Témoignages
          </h2>
        </div>

        {/* Testimonial Slider - Fixed Height Container */}
        <div className="relative max-w-4xl mx-auto flex-1 flex flex-col px-4 md:px-0">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-12 top-1/3 transform -translate-y-1/2 text-white hover:text-[#9F9B9B] p-2 md:p-3 z-10"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} className="md:w-9 md:h-9" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-12 top-1/3 transform -translate-y-1/2 text-white hover:text-[#9F9B9B] p-2 md:p-3 z-10"
            disabled={isAnimating}
          >
            <ChevronRight size={24} className="md:w-9 md:h-9" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center px-8 md:px-16">
            <div 
              className={`transition-all duration-300 ${
                isAnimating 
                  ? slideDirection === 'right' 
                    ? 'transform translate-x-8 opacity-0' 
                    : 'transform -translate-x-8 opacity-0'
                  : 'transform translate-x-0 opacity-100'
              }`}
            >
              {/* Comment */}
              <blockquote className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 md:mb-8 italic">
                "{currentTestimonial.comment}"
              </blockquote>

              {/* Author */}
              <div className="text-gray-300">
                <p className="text-base md:text-lg font-semibold text-white mb-1">
                  {currentTestimonial.author}
                </p>
                <p className="text-sm md:text-base">
                  {currentTestimonial.position}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setSlideDirection(index > currentIndex ? 'right' : 'left');
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;