import React from 'react';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound: React.FC = () => {
  const suggestions = [
    {
      icon: Home,
      title: 'Accueil',
      description: 'Retournez à la page d\'accueil',
      link: '/',
      color: 'blue'
    },
    {
      icon: Search,
      title: 'Actualités',
      description: 'Découvrez nos pôles d\'activité',
      link: '/actualites',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Contact',
      description: 'Contactez notre équipe',
      link: '/contact',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; hover: string; text: string; icon: string } } = {
      blue: {
        bg: 'bg-blue-50',
        hover: 'hover:bg-blue-100',
        text: 'text-blue-600',
        icon: 'text-blue-500'
      },
      green: {
        bg: 'bg-green-50',
        hover: 'hover:bg-green-100',
        text: 'text-green-600',
        icon: 'text-green-500'
      },
      purple: {
        bg: 'bg-purple-50',
        hover: 'hover:bg-purple-100',
        text: 'text-purple-600',
        icon: 'text-purple-500'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-white">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/notfound-hero.png')` }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Page Introuvable</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Search className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">Oups ! Nous n'avons pas trouvé cette page</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8">
            Il semble que la page que vous cherchez n'existe pas. Elle a peut-être été supprimée,
            déplacée ou vous avez tapé une adresse incorrecte. Pas de panique, nous sommes là pour
            vous aider à retrouver votre chemin !
          </p>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-gray-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium mb-8 md:mb-12 text-sm md:text-base"
          >
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            <span>Retour à la page précédente</span>
          </button>
        </div>

        {/* Suggestions */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8">Où souhaitez-vous aller ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {suggestions.map((suggestion, index) => {
              const IconComponent = suggestion.icon;
              const colors = getColorClasses(suggestion.color);

              return (
                <a
                  key={index}
                  href={suggestion.link}
                  className={`${colors.bg} ${colors.hover} rounded-lg p-4 md:p-6 lg:p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group border-2 border-transparent hover:border-gray-200`}
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${colors.icon}`} />
                  </div>
                  <h4 className={`text-lg md:text-xl font-bold ${colors.text} mb-2 md:mb-3`}>
                    {suggestion.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {suggestion.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="text-center mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700 italic text-sm md:text-base">
            <strong>Le saviez-vous ?</strong> AVAS accompagne plus de 500 personnes chaque année
            à Vaulx-en-Velin à travers ses trois pôles d'activité. Découvrez nos actions sur notre page d\'accueil !
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;