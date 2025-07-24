import React from 'react';

const GallerySection: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/mission.JPG',
      title: 'Notre mission',
      description: `Nous cherchons à renforcer l'engagement des jeunes et des habitants de Vaulx-en-Velin à travers des actions ciblées dans les domaines de la jeunesse, de la citoyenneté et de la médiation urbaine. En favorisant l’accompagnement, la solidarité et le vivre-ensemble, notre mission vise à créer une dynamique locale positive et inclusive`,
      position: 'top-left',
      link: '/about'
    },
    {
      id: 2,
      image: '/initiatives.JPG',
      title: 'Notre Initiatives',
      description: `Nous visons à renforcer l'engagement des jeunes et des habitants de Vaulx-en-Velin à travers des actions menées dans les domaines de la jeunesse, de la citoyenneté et de la médiation urbaine. En valorisant l’accompagnement, la solidarité et le vivre-ensemble, nous participons activement à la construction d’une dynamique locale positive et inclusive`,
      position: 'bottom-left',
      link: '/poles/pole-jeunesse'
    },
    {
      id: 3,
      image: '/actus.JPG',
      title: 'Actus récentes',
      description: `découvrez les projets en cours (jeunes, citoyenneté, médiation urbaine), les événements mis en place et les chantiers solidaires`,
      position: 'bottom-right',
      link: '/actualites'
    },
    {
      id: 4,
      image: '/participer.jpg',
      title: 'Participer',
      description: `au renforcement de l'engagement des jeunes et des habitants de Vaulx-en-Velin, telle est notre ambition. À travers des actions en jeunesse, citoyenneté et médiation urbaine, nous favorisons l’accompagnement, la solidarité et le vivre-ensemble pour construire une dynamique locale positive et inclusive`,
      position: 'top-right',
      link: 'https://linktr.ee/avaulxambitions?utm_source=linktree_profile_share&ltsid=73c1e04c-702d-49b9-bcf7-8d86a2d6e560&fbclid=PAZXh0bgNhZW0CMTEAAaeWSxOYEImXNKvnv1LUqdMBhtoozs3eeMfxojEH1LN8bHE6bjaYqQsBwZgvKw_aem_JZPCdRMBh53ZuZ_FOcZY2w'
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'top-right':
        return 'top-4 right-4';
      default:
        return 'top-4 left-4';
    }
  };

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto px-4 md:px-0">
        <div className="space-y-4 md:space-y-8">
          {/* First Row: 40% left, 60% right */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 h-[400px] md:h-[500px] lg:h-[600px]">
            {/* First Picture - 40% width */}
            <a href={galleryItems[0].link} className="lg:w-2/5 relative overflow-hidden group">
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              
              {/* Content Box - Top Left */}
              <div className={`absolute ${getPositionClasses(galleryItems[0].position)} bg-white shadow-lg border-t-2 border-b-2 border-black p-3 md:p-6 w-48 md:w-56 transform group-hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-sm md:text-md font-bold text-gray-900 mb-2 md:mb-3">
                  {galleryItems[0].title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                  {galleryItems[0].description}
                </p>
              </div>
            </a>

            {/* Second Picture - 60% width */}
            <a href={galleryItems[1].link} className="lg:w-3/5 relative overflow-hidden group">
              <img
                src={galleryItems[1].image}
                alt={galleryItems[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              
              {/* Content Box - Bottom Left */}
              <div className={`absolute ${getPositionClasses(galleryItems[1].position)} bg-white shadow-lg border-t-2 border-b-2 border-black p-3 md:p-6 w-48 md:w-56 transform group-hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-sm md:text-md font-bold text-gray-900 mb-2 md:mb-3">
                  {galleryItems[1].title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                  {galleryItems[1].description}
                </p>
              </div>
            </a>
          </div>

          {/* Second Row: 60% left, 40% right */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Third Picture - 60% width */}
            <a href={galleryItems[2].link} className="lg:w-3/5 relative overflow-hidden group">
              <img
                src={galleryItems[2].image}
                alt={galleryItems[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              
              {/* Content Box - Bottom Right */}
              <div className={`absolute ${getPositionClasses(galleryItems[2].position)} bg-white shadow-lg border-t-2 border-b-2 border-black p-3 md:p-6 w-48 md:w-56 transform group-hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-sm md:text-md font-bold text-gray-900 mb-2 md:mb-3">
                  {galleryItems[2].title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                  {galleryItems[2].description}
                </p>
              </div>
            </a>

            {/* Fourth Picture - 40% width */}
            <a href={galleryItems[3].link} target='_blank' rel="noopener noreferrer" className="lg:w-2/5 relative overflow-hidden group">
              <img
                src={galleryItems[3].image}
                alt={galleryItems[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              
              {/* Content Box - Top Right */}
              <div className={`absolute ${getPositionClasses(galleryItems[3].position)} bg-white shadow-lg border-t-2 border-b-2 border-black p-3 md:p-6 w-48 md:w-56 transform group-hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-sm md:text-md font-bold text-gray-900 mb-2 md:mb-3">
                  {galleryItems[3].title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                  {galleryItems[3].description}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;