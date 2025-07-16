import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-black text-white">
      {/* Left Section */}
      <div className="flex-1 p-8">
        <div className="flex flex-col gap-4 ml-auto text-left w-fit">
          <div>
            <h3 className="text-lg font-semibold">NOUS</h3>
            <h3 className="text-lg font-semibold">CONTACTER</h3>
          </div>
          <div className="space-y-1 text-sm text-gray-300">
            <p>Tel : 07 67 68 30 06</p>
            <p>9 chemin de la ferme 69120</p>
            <p>SIRET : 889 352 753 00012</p>
          </div>
          <div className="pt-2">
            <p className="text-white font-semibold">n.nailiavas@gmail.com</p>
            <div className="flex gap-3 mt-2 text-gray-400">
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Twitter size={16} /></a>
              <a href="#"><Linkedin size={16} /></a>
            </div>
          </div>
          <div className="text-xs space-y-1 text-gray-400 mt-4">
            <a href="#">Mentions légales</a><br />
            <a href="#">Politique de confidentialité</a><br />
            <a href="#">Politique de cookies</a>
          </div>
        </div>
      </div>

      {/* Center Logo aligned right */}
      <div className="flex-1 flex items-center justify-start p-8">
        <img 
          src="/logo.png" // update to your logo path
          alt="AVAS Logo"
          className="h-32 w-auto"
        />
      </div>

      {/* Right Newsletter Section */}
      <div className="flex-1 p-8 bg-[#C6B9FE] text-black text-center flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-2">RESTEZ À JOUR</h3>
        <p className="text-sm">Abonnez-vous à notre <br /> newsletter pour être à jour</p>
        <p className="text-sm mt-4">
          Lien <br /> <a href="https://linktr.ee/avosambitions?utm_source=..." className="border-b-2 pb-2 border-black">https://linktr.ee/avosambitions?utm_source=...</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
