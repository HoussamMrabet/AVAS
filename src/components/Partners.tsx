import React from 'react';
import { Users, Handshake, Building2, Heart, Award, Globe } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'Métropole de Lyon',
      logo: '/partners/partner1.png',
      category: 'Institutionnel',
      description: 'Soutien aux projets de développement local'
    },
    {
      id: 2,
      name: 'Ville de Vaulx-en-Velin',
      logo: '/partners/partner2.svg',
      category: 'Social',
      description: 'Accompagnement des initiatives citoyennes'
    },
    {
      id: 3,
      name: 'vaulx en velin grand projet de ville',
      logo: '/partners/partner3.png',
      category: 'emploi',
      description: 'Accompagnement des jeunes dans leur parcours professionnel'
    },
    {
      id: 4,
      name: 'ANCT – Agence nationale de la cohésion des territoires',
      logo: '/partners/partner4.jpeg',
      category: 'Social',
      description: 'Soutien aux projets de cohésion sociale et territoriale'
    },
    {
      id: 5,
      name: 'Maison métropolitaine d’insertion pour l’emploi',
      logo: '/partners/partner5.jpg',
      category: 'Emploi',
      description: 'Accompagnement à l\'insertion professionnelle des jeunes et des demandeurs d\'emploi'
    },
    {
      id: 6,
      name: 'France Travail',
      logo: '/partners/partner6.svg',
      category: 'Fondation',
      description: 'Soutien à l\'insertion professionnelle et à la formation des jeunes'
    },
    {
      id: 7,
      name: 'ENTPE – École de l’aménagement durable',
      logo: '/partners/partner7.png',
      category: 'Associatif',
      description: 'Partenariat pour la médiation urbaine et l\'aménagement du territoire'
    },
    {
      id: 8,
      name: 'UNESCO / Chaire Unesco Politiques Urbaines',
      logo: '/partners/partner8.png',
      category: 'Entreprise',
      description: 'Collaboration sur des projets de recherche et d\'innovation urbaine'
    }
  ];

  const categories = [
    { name: 'Institutionnel', icon: Building2, color: 'blue' },
    { name: 'Social', icon: Heart, color: 'red' },
    { name: 'Emploi', icon: Users, color: 'green' },
    { name: 'Fondation', icon: Award, color: 'purple' },
    { name: 'Associatif', icon: Handshake, color: 'orange' },
    { name: 'Entreprise', icon: Globe, color: 'indigo' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-400 bg-blue-50',
      red: 'border-red-400 bg-red-50',
      green: 'border-green-400 bg-green-50',
      purple: 'border-purple-400 bg-purple-50',
      orange: 'border-orange-400 bg-orange-50',
      indigo: 'border-indigo-400 bg-indigo-50'
    };
    return colorMap[color] || 'border-gray-400 bg-gray-50';
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/partners-hero.png')` }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Nos Partenaires</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Ensemble, nous construisons un réseau solide pour l'avenir de Vaulx-en-Velin
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">Un Réseau d'Excellence</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8">
            Depuis 2018, l'Association Vaux Ambitions (AVAS) a tissé des liens durables avec plus de
            <span className="font-bold text-blue-600"> 25 partenaires institutionnels, associatifs et privés</span>.
            Cette collaboration étroite nous permet de démultiplier notre impact sur le territoire et d'offrir
            des services de qualité à nos bénéficiaires.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Nos partenariats s'articulent autour de nos trois pôles d'activité : Jeunesse, Médiation Urbaine
            et Citoyenneté. Chaque collaboration est pensée pour créer une synergie positive et durable,
            au service des habitants de Vaulx-en-Velin.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Découvrez Nos Partenaires</h3>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.name} className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-white rounded-full shadow-sm border">
                <IconComponent size={16} className={`text-${category.color}-600`} />
                <span className="text-xs md:text-sm font-medium">{category.name}</span>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner) => {
            const category = categories.find(cat => cat.name === partner.category);
            const colorClasses = category ? getColorClasses(category.color) : 'border-gray-400 bg-gray-50';

            return (
              <div
                key={partner.id}
                className={`${colorClasses} border-2 rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xs md:text-sm">{partner.name}</h4>
                  <div className="flex items-center justify-center gap-1 mb-2 md:mb-3">
                    {category && (
                      <>
                        <category.icon size={12} className={`text-${category.color}-600`} />
                        <span className={`text-xs font-medium text-${category.color}-600`}>
                          {partner.category}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{partner.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16 bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Rejoignez Notre Réseau</h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            Vous souhaitez devenir partenaire d'AVAS et contribuer au développement de Vaulx-en-Velin ?
            Contactez-nous pour explorer les opportunités de collaboration.
          </p>
          <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium text-sm md:text-base">
            Devenir Partenaire
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;