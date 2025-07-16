import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto relative h-auto flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-12 lg:pt-20 px-6 lg:px-8 w-full h-full flex flex-col">
        <div className="text-center flex-1 flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-5xl text-white mb-6 leading-tight py-10">
            Seul, on va plus vite ;
            <span className="block">ensemble, on va plus loin</span>
          </h1>
        </div>

        {/* White Content Box */}
        <div className="bg-white shadow-2xl mb-5 py-2 md:py-6 px-8 md:px-12 max-w-3xl mx-auto border-t-4 border-black">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <p className="text-gray-600 text-lg lg:mb-0 text-center lg:text-left">
              Agir pour nous aider à grandir
            </p>
        
            {/* Right Side - CTA Button */}
            <button className="group bg-gradient-to-r from-[#FD6160] to-[#FD5F5E] text-white py-4 px-8 shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 rounded-full">
              <span>FAIRE UN DON</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;