import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useInfos } from '../hooks/useInfos';

const HeroSection: React.FC = () => {
  const { site } = useInfos();

  return (
    <div className="mx-auto relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
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
      <div className="relative z-10 max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-20 px-4 md:px-6 lg:px-8 w-full h-full flex flex-col">
        <div className="text-center flex-1 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 leading-tight py-6 md:py-10 px-4">
            Par la jeunesse ,Pour la jeunesse 
            <span className="block">pour les quartiers, pour la ville</span>
          </h1>
        </div>

        {/* White Content Box */}
        <div className="bg-white shadow-2xl mb-5 py-4 md:py-6 px-4 md:px-8 lg:px-12 max-w-3xl mx-auto border-t-4 border-black">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
            {/* Left Side - Text Content */}
            <p className="text-gray-600 text-base md:text-lg lg:mb-0 text-center lg:text-left">
              Agir pour nous aider à grandir
            </p>
        
            {/* Right Side - CTA Button */}
            <a 
              href={site?.social?.donation || '#'} // Replace with your real donation link
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#FD6160] to-[#FD5F5E] text-white py-3 md:py-4 px-6 md:px-8 shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 rounded-full text-sm md:text-base"
            >
              <span className="whitespace-nowrap">FAIRE UN DON</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;