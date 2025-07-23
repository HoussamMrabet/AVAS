import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useInfos } from '../hooks/useInfos'; // Adjust path

const Footer: React.FC = () => {
  const { site } = useInfos();

  return (
    <footer className="flex flex-col lg:flex-row bg-black text-white">
      {/* Left Section */}
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col gap-3 md:gap-4 lg:ml-auto text-left w-fit">
          <div>
            <h3 className="text-base md:text-lg font-semibold">NOUS</h3>
            <h3 className="text-base md:text-lg font-semibold">CONTACTER</h3>
          </div>
          <div className="space-y-1 text-xs md:text-sm text-gray-300">
            <p>Tel : {site?.phone || "07 67 68 30 06"}</p>
            <p>{site?.address || "9 chemin de la ferme 69120"}</p>
            <p>SIRET : {site?.siret || "889 352 753 00012"}</p>
          </div>
          <div className="pt-2">
            <p className="text-white font-semibold text-sm md:text-base">{site?.email || "..."}</p>
            <div className="flex gap-2 md:gap-3 mt-2 text-gray-400">
              <a href={site?.social?.facebook || "#"} target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>
              <a href={site?.social?.twitter || "#"} target="_blank" rel="noopener noreferrer"><Twitter size={16} /></a>
              <a href={site?.social?.instagram || "#"} target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
            </div>
          </div>
          <div className="text-xs space-y-1 text-gray-400 mt-3 md:mt-4">
            <a href="#">Mentions légales</a><br />
            <a href="#">Politique de confidentialité</a><br />
            <a href="#">Politique de cookies</a>
          </div>
        </div>
      </div>

      {/* Center Logo aligned right */}
      <div className="flex-1 flex items-center justify-center lg:justify-start p-4 md:p-6 lg:p-8">
        <img 
          src="/logo.png"
          alt="AVAS Logo"
          className="h-20 md:h-24 lg:h-32 w-auto"
        />
      </div>

      {/* Right Newsletter Section */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 bg-[#C6B9FE] text-black text-center flex flex-col items-center justify-center">
        <h3 className="text-base md:text-lg font-semibold mb-2">RESTEZ À JOUR</h3>
        <p className="text-xs md:text-sm">Abonnez-vous à notre <br className="hidden md:block" /> newsletter pour être à jour</p>
        <p className="text-xs md:text-sm mt-3 md:mt-4">
          Lien <br /> <a href={site?.social?.linktr || "#"} target="_blank" rel="noopener noreferrer" className="border-b-2 pb-1 md:pb-2 border-black break-all">{site?.social?.linktr || "#"}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
