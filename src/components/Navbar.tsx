import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = [
    { label: 'Jeunesse', href: '/poles/jeunesse' },
    { label: 'Elle le Vaulx Bien', href: '/poles/elle-le-vaulx-bien' },
    { label: 'Médiation Urbaine', href: '/poles/mediation-urbaine' },
    { label: 'Citoyenneté', href: '/poles/citoyennete' },
  ];

  return (
    <nav className="relative z-50 bg-white">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/logo.png" alt="AVAS Logo" className="max-h-20 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {/* First 3 links */}
              <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Accueil</a>
              <span className="text-gray-300">|</span>
              <a href="/actualites" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Actualités</a>
              <span className="text-gray-300">|</span>
              <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Qui sommes nous ?</a>
              <span className="text-gray-300">|</span>

              {/* Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Poles
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 hidden group-hover:block z-40">
                  {dropdownItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <span className="text-gray-300">|</span>
              <a href="/partenaires" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Nos partenaires</a>
              <span className="text-gray-300">|</span>
              <a href="/equipe" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Notre équipe</a>
              <span className="text-gray-300">|</span>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
              <span className="text-gray-300">|</span>
              <a href="/profil" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Profil</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 px-6 py-6 overflow-y-auto">
          <div className="max-w-7xl px-20 mx-auto flex flex-col space-y-4 mt-20">
            <a href="/" className="text-gray-700 hover:text-blue-600 text-lg">Accueil</a>
            <a href="/actualites" className="text-gray-700 hover:text-blue-600 text-lg">Actualités</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 text-lg">Qui sommes nous ?</a>

            {/* Dropdown Toggle */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 text-lg"
              >
                Poles
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  {dropdownItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-500 text-base py-1"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/partenaires" className="text-gray-700 hover:text-blue-600 text-lg">Nos partenaires</a>
            <a href="/equipe" className="text-gray-700 hover:text-blue-600 text-lg">Notre équipe</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 text-lg">Contact</a>
            <a href="/profil" className="text-gray-700 hover:text-blue-600 text-lg">Profil</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
