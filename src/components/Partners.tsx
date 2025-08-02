import React from 'react';
import { useState } from 'react';
import { Users, Handshake, Building2, Award, Globe, Building } from 'lucide-react';

const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const partners =
    [
      {
        id: 1,
        name: "Mairie de Vaulx en Velin",
        logo: "/partners/partner2.svg",
        category: "Institutionnel",
        description: "Soutient les initiatives locales en faveur du développement social, éducatif, culturel et citoyen sur le territoire communal."
      },
      {
        id: 2,
        name: "Métropole de Lyon",
        logo: "/partners/partner1.png",
        category: "Institutionnel",
        description: "Soutien aux projets de développement local sur le territoire de la métropole lyonnaise."
      },
      {
        id: 3,
        name: "ANCT – Agence nationale de la cohésion des territoires",
        logo: "/partners/partner4.jpeg",
        category: "Institutionnel",
        description: "Soutien aux actions innovantes en faveur du développement territorial et de la cohésion des territoires."
      },
      {
        id: 4,
        name: "FDVA – Ministère de l'Éducation Nationale",
        logo: "/partners/fdva.png",
        category: "Institutionnel",
        description: "Appuie les projets visant à renforcer la vie associative et l'engagement citoyen à travers le territoire."
      },
      {
        id: 5,
        name: "Préfète du Rhône",
        logo: "/partners/partner13.png",
        category: "Institutionnel",
        description: "Accompagne et soutient les actions locales en faveur de la cohésion sociale et du développement territorial."
      },
      {
        id: 6,
        name: "CAF - Allocations Familiales",
        logo: "/partners/caf.png",
        category: "Institutionnel",
        description: "Soutient les initiatives en faveur des familles, de la jeunesse et du lien social sur le territoire."
      },
      {
        id: 7,
        name: "LAET – Laboratoire Aménagement Économie Transports",
        logo: "/partners/partner11.svg",
        category: "Académique",
        description: "Participe à la recherche et à l’innovation autour des enjeux territoriaux et de mobilité."
      },
      {
        id: 8,
        name: "Université de Chine - East China Normal University",
        logo: "/partners/east_china_university.png",
        category: "Académique",
        description: "Partenaire académique international engagé dans les échanges interculturels et la coopération éducative."
      },
      {
        id: 9,
        name: "Laboratoire EVS – Environnement Ville Société",
        logo: "/partners/partner10.jpeg",
        category: "Académique",
        description: "Contribue à la recherche pluridisciplinaire sur les dynamiques territoriales, sociales et environnementales."
      },
      {
        id: 10,
        name: "Collège Henri Barbusse",
        logo: "/partners/partner12.png",
        category: "Académique",
        description: "Implique les jeunes dans des projets éducatifs et citoyens ancrés dans leur territoire."
      },
      {
        id: 11,
        name: "ENTPE – École de l’aménagement durable",
        logo: "/partners/partner7.png",
        category: "Académique",
        description: "Forme des ingénieurs et experts engagés pour un aménagement durable, solidaire et innovant des territoires."
      },

      {
        id: 12,
        name: 'Maison de l\'insertion et de l\'emploi',
        logo: '/partners/partner5.jpg',
        category: 'Emploi',
        description: 'Accompagne les publics vers l’insertion sociale et professionnelle à travers des actions de proximité.'
      },
      {
        id: 13,
        name: 'France Travail',
        logo: '/partners/partner6.svg',
        category: 'Emploi',
        description: 'Accompagne les demandeurs d’emploi et les entreprises dans leurs démarches d’insertion et de recrutement.'
      },
      {
        id: 14,
        name: 'Alliés',
        logo: '/partners/allies.jpg',
        category: 'Emploi',
        description: 'Soutient les dynamiques locales en favorisant l\'engagement citoyen et le pouvoir d\'agir des habitant·es.'
      },
      {
        id: 15,
        name: 'Fondation masalina',
        logo: '/partners/masalina.png',
        category: 'Fondation',
        description: 'Encourage les initiatives solidaires et culturelles au service du vivre-ensemble.'
      },
      {
        id: 16,
        name: 'Fondation de France',
        logo: '/partners/fondation_france.png',
        category: 'Fondation',
        description: 'Soutient des projets d’intérêt général pour une société plus juste, solidaire et innovante.'
      },
      {
        id: 17,
        name: 'Le Next Level',
        logo: '/partners/next_level.png',
        category: 'Associatif',
        description: 'Favorise l\'expression et l’engagement des jeunes à travers des projets artistiques et culturels.'
      },
      {
        id: 18,
        name: 'SHL (Social Hacker Lab)',
        logo: '/partners/shl.png',
        category: 'Associatif',
        description: 'Stimule l’innovation sociale en accompagnant les initiatives citoyennes et collaboratives.'
      },
      {
        id: 19,
        name: 'Msports',
        logo: '/partners/msports.png',
        category: 'Associatif',
        description: 'Utilise le sport comme levier d’inclusion, de cohésion sociale et de développement personnel.'
      },
      {
        id: 20,
        name: 'Coeur Banlieu Zhar',
        logo: '/partners/coeur_banlieu.png',
        category: 'Associatif',
        description: 'Valorise les talents et initiatives des quartiers à travers des actions culturelles, sociales et solidaires.'
      },
      {
        id: 21,
        name: 'est métropole habitat',
        logo: '/partners/est_metropole_habitat.png',
        category: 'Entreprise',
        description: 'Favorise l’accès à un logement de qualité et soutient les dynamiques sociales au sein des quartiers.'
      },
      {
        id: 22,
        name: 'Carrion',
        logo: '/partners/carrion.jpeg',
        category: 'Entreprise',
        description: 'Participe à l’amélioration du cadre de vie à travers des projets d’aménagement et de construction responsables.'
      },
      {
        id: 23,
        name: 'Colas',
        logo: '/partners/colas.png',
        category: 'Entreprise',
        description: 'Contribue au développement des infrastructures durables et à l’aménagement du territoire.'
      },
      {
        id: 24,
        name: 'Pétavit',
        logo: '/partners/petavit.jpeg',
        category: 'Entreprise',
        description: 'Intervient dans les travaux publics pour soutenir le développement et la transformation des espaces urbains.'
      },
      {
        id: 25,
        name: 'Perrier',
        logo: '/partners/perrier.png',
        category: 'Entreprise',
        description: 'Acteur local engagé dans des projets d’aménagement et de valorisation du territoire.'
      },
      {
        id: 26,
        name: 'Keolis',
        logo: '/partners/keolis.png',
        category: 'Entreprise',
        description: 'Opérateur de mobilité durable, engagé pour un transport accessible et adapté aux besoins des territoires.'
      },
      {
        id: 27,
        name: 'JCDecaux',
        logo: '/partners/jcdecaux.png',
        category: 'Entreprise',
        description: 'Participe à l’aménagement urbain et à la communication de proximité à travers ses mobiliers publicitaires.'
      },
      {
        id: 28,
        name: 'SOGEA',
        logo: '/partners/sogea.png',
        category: 'Entreprise',
        description: 'Contribue à la réalisation d’infrastructures durables au service des territoires et de leurs habitants.'
      },
      {
        id: 29,
        name: 'ANGE – Association Nouvelle Génération Engagée',
        logo: '/partners/ange.jpeg',
        category: 'Associatif',
        description: 'Encourage l’engagement des jeunes à travers des actions solidaires, éducatives et citoyennes.'
      },
      {
        id: 30,
        name: 'Voasis – Nos Cultures Partagées',
        logo: '/partners/voasis.png',
        category: 'Associatif',
        description: 'Accompagne les jeunes dans leurs projets en valorisant la créativité, l’expression et l’engagement.'
      },
      {
        id: 31,
        name: 'À Partir de Maintenant',
        logo: '/partners/a_partir_de_maintenant.jpeg',
        category: 'Associatif',
        description: 'Agit pour l’émancipation des jeunes en soutenant leurs initiatives citoyennes, culturelles et sociales.'
      },
      {
        id: 32,
        name: 'Air Play Rhone Alpes',
        logo: '/partners/air_play.png',
        category: 'Associatif',
        description: 'Déploie des actions sportives et ludiques pour favoriser le vivre-ensemble, l’inclusion et la cohésion sociale.'
      },
      {
        id: 33,
        name: 'Une Voie pour Tous',
        logo: '/partners/une_voie_pour_tous.png',
        category: 'Associatif',
        description: 'Œuvre pour l’insertion sociale et professionnelle des personnes en situation de précarité ou d’exclusion.'
      },
      {
        id: 34,
        name: 'MAN (Mouvement pour une Alternative Non violente)',
        logo: '/partners/man.png',
        category: 'Associatif',
        description: 'Sensibilise et forme à la non-violence active pour favoriser la paix, la justice sociale et la citoyenneté responsable.'
      },
      {
        id: 35,
        name: 'Matrice Prod',
        logo: '/partners/matrice_prod.png',
        category: 'Associatif',
        description: 'Accompagne la création audiovisuelle et numérique au service des initiatives culturelles, sociales et citoyennes.'
      },
      {
        id: 36,
        name: 'Les racines de demain',
        logo: '/partners/racines_demain.png',
        category: 'Associatif',
        description: 'Favorise l’éducation à l’environnement, le lien social et l’engagement citoyen à travers des actions ancrées dans le territoire.'
      },
      {
        id: 37,
        name: 'Espace projet interassociatifs',
        logo: '/partners/espace_interassociatif.jpeg',
        category: 'Associatif',
        description: 'Facilite la coopération entre associations et soutient les dynamiques collectives au service du territoire.'
      },
      {
        id: 38,
        name: 'NECC – Nouveau Cirque du Collectif Chapiteau',
        logo: '/partners/necc.png',
        category: 'Associatif',
        description: 'Favorise l’inclusion et l’expression artistique à travers les arts du cirque et les pratiques culturelles partagées.'
      },
      {
        id: 39,
        name: 'Association Voltaire',
        logo: '/partners/voltaire.png',
        category: 'Associatif',
        description: 'Soutient l’émancipation et la participation citoyenne par des actions éducatives, culturelles et sociales.'
      },
      {
        id: 40,
        name: 'Smile Paradise',
        logo: '/partners/smile_paradise.png',
        category: 'Associatif',
        description: 'Crée des espaces bienveillants pour l’épanouissement des jeunes à travers des projets éducatifs, culturels et solidaires.'
      },
      {
        id: 41,
        name: 'dojo',
        logo: '/partners/dojo.png',
        category: 'Associatif',
        description: 'Favorise le développement personnel et le vivre-ensemble à travers la pratique des arts martiaux et des disciplines de bien-être.'
      },
      {
        id: 42,
        name: 'Human Distreat',
        logo: '/partners/human_distreat.jpeg',
        category: 'Associatif',
        description: 'Sensibilise aux enjeux sociaux et environnementaux à travers des créations artistiques engagées et des actions collectives.'
      },
      {
        id: 43,
        name: 'Centre Social Gisèle Halimi et Centre Social Mermoz',
        logo: '/partners/centres_sociaux.png',
        category: 'Associatif',
        description: 'Ancrés dans leur quartier, ils renforcent le lien social, soutiennent les familles et accompagnent les initiatives des habitant·es.'
      },
      {
        id: 44,
        name: 'Institut Alinsky – Démocratie d’interpellation',
        logo: '/partners/alinsky.png',
        category: 'Associatif',
        description: 'Favorise l’organisation collective et la participation citoyenne pour faire entendre la voix des habitant·es dans l’espace public.'
      },
      {
        id: 45,
        name: 'Citizens UK',
        logo: '/partners/citizens_uk.png',
        category: 'Associatif',
        description: 'Mobilise les citoyen·nes pour agir collectivement sur les enjeux locaux et faire avancer la justice sociale par l’organisation communautaire.'
      },
      {
        id: 46,
        name: 'AMAFI – Association française des marchés financiers',
        logo: '/partners/amafi.png',
        category: 'Associatif',
        description: 'Représente les acteurs des marchés financiers en France et en Europe, et œuvre pour une finance au service de l’économie réelle.'
      },
      {
        id: 47,
        name: "surp'rize",
        logo: '/partners/surprize.jpg',
        category: 'Associatif',
        description: 'Mobilise les Encourage l’expression artistique et l’engagement des jeunes à travers des projets culturels, éducatifs et participatifs. pour agir collectivement sur les enjeux locaux et faire avancer la justice sociale par l’organisation communautaire.'
      },
      {
        id: 48,
        name: 'Noum',
        logo: '/partners/noum.jpg',
        category: 'Associatif',
        description: 'Soutient les dynamiques collectives en accompagnant les habitant·es dans la mise en œuvre de projets citoyens, solidaires et émancipateurs.'
      }
    ];
  const categories = [
    { name: 'Institutionnel', icon: Building2, color: 'blue' },
    { name: 'Académique', icon: Building, color: 'red' },
    { name: 'Emploi', icon: Users, color: 'green' },
    { name: 'Fondation', icon: Award, color: 'purple' },
    { name: 'Associatif', icon: Handshake, color: 'orange' },
    { name: 'Entreprise', icon: Globe, color: 'gray' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-400 bg-blue-50',
      red: 'border-red-400 bg-red-50',
      green: 'border-green-400 bg-green-50',
      purple: 'border-purple-400 bg-purple-50',
      orange: 'border-orange-400 bg-orange-50',
      gray: 'border-gray-400 bg-gray-50'
    };
    return colorMap[color] || 'border-gray-400 bg-gray-50';
  };

  const filteredPartners = selectedCategory
    ? partners.filter(partner => partner.category === selectedCategory)
    : partners;

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
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
            <span className="font-bold text-blue-600"> 48 partenaires institutionnels, associatifs et privés</span>.
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full shadow-sm border transition-all duration-200 hover:shadow-md hover:scale-105 ${isSelected
                  ? `bg-${category.color}-100 border-${category.color}-400`
                  : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
              >
                <IconComponent size={16} className={`text-${category.color}-600`} />
                <span className={`text-xs md:text-sm font-medium ${isSelected ? `text-${category.color}-700` : 'text-gray-700'}`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredPartners.map((partner) => {
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

        {/* No Results Message */}
        {filteredPartners.length === 0 && selectedCategory && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Building2 size={48} className="mx-auto" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Aucun partenaire trouvé</h4>
            <p className="text-gray-600 mb-4">
              Aucun partenaire ne correspond à la catégorie "{selectedCategory}".
            </p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Voir tous les partenaires
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16 bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Rejoignez Notre Réseau</h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
            Vous souhaitez devenir partenaire d'AVAS et contribuer au développement de Vaulx-en-Velin ?
            Contactez-nous pour explorer les opportunités de collaboration.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium text-sm md:text-base"
          >
            Devenir Partenaire
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;