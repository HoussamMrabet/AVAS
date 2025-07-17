import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Settings, ShoppingBag, LogOut } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
  // Mock authentication state - replace with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'John Doe', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop' });

  const dropdownItems = [
    { label: 'Jeunesse', href: '/poles/jeunesse' },
    { label: 'Elle le Vaulx Bien', href: '/poles/elle-le-vaulx-bien' },
    { label: 'Médiation Urbaine', href: '/poles/mediation-urbaine' },
    { label: 'Citoyenneté', href: '/poles/citoyennete' },
  ];

  const userDropdownItems = [
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Settings', href: '/settings', icon: Settings },
    { label: 'Orders', href: '/orders', icon: ShoppingBag },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsUserDropdownOpen(false);
  };
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
              
              {/* Authentication Section */}
              {!isLoggedIn ? (
                <button 
                  onClick={handleLogin}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Login
                </button>
              ) : (
                <div className="relative group">
                  <button 
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{user.name}</span>
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {isUserDropdownOpen && (
                    <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 w-48 z-40">
                      {userDropdownItems.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <a
                            key={idx}
                            href={item.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <IconComponent size={16} className="mr-3" />
                            {item.label}
                          </a>
                        );
                      })}
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut size={16} className="mr-3" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
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
            
            {/* Mobile Authentication */}
            {!isLoggedIn ? (
              <button 
                onClick={handleLogin}
                className="text-gray-700 hover:text-blue-600 text-lg text-left"
              >
                Login
              </button>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center text-gray-700 text-lg">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span>{user.name}</span>
                </div>
                <div className="pl-11 space-y-1">
                  {userDropdownItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center text-gray-600 hover:text-blue-500 text-base py-1"
                      >
                        <IconComponent size={16} className="mr-2" />
                        {item.label}
                      </a>
                    );
                  })}
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-600 hover:text-blue-500 text-base py-1"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
