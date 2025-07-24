import React from 'react';
import { Users, BookOpen, Target, Wrench, Calendar, MapPin, Activity, Heart } from 'lucide-react';

const PoleJeunesse: React.FC = () => {
  const dailyActivities = [
    {
      title: "Les Permanences Loisirs",
      description: "Services d'accompagnement récréatif pour les jeunes, offrant un espace d'écoute et de soutien au quotidien."
    },
    {
      title: "Les Activités de Loisirs",
      description: "Sorties culturelles et de loisirs permettant aux jeunes de découvrir de nouveaux horizons et de développer leur ouverture d'esprit."
    },
    {
      title: "L'Accompagnement à la Scolarité: À Vaulx Réussites",
      description: "Service d'aide scolaire personnalisé pour favoriser la réussite éducative.",
      subPoints: [
        "Aide personnalisée",
        "Relations école-parents",
        "Mentorat jeunesse"
      ]
    }
  ];

  const objectives2024 = [
    "Favoriser la réussite scolaire",
    "Développer l'autonomie et la responsabilité",
    "Renforcer le rôle dans la vie de la cité",
    "Promouvoir l'engagement citoyen",
    "Accompagner vers l'insertion professionnelle"
  ];

  const chantiersTypes = [
    { name: "Entretien"},
    { name: "Peinture"},
    { name: "Piquetage"}
  ];

  const programs = [
    { name: "La Fête de Quartier", color: "bg-blue-500" },
    { name: "Les Accueils en bas de tours", color: "bg-blue-600" },
    { name: "Les Chantiers Jeunes", color: "bg-blue-700" },
    { name: "Les Vacances à la Carte", color: "bg-blue-500" },
    { name: "Les Bulles Oxygène", color: "bg-blue-600" },
    { name: "Les Loisirs Nocturnes", color: "bg-blue-700" }
  ];

  const programDetails = [
    {
      name: "Les Vacances à la Carte",
      description: "Programme de vacances personnalisées offrant aux jeunes des expériences enrichissantes pendant les périodes de congés scolaires.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      stats: ["34 sorties organisées", "+ de 300 participants"]
    },
    {
      name: "Les Bulles Oxygène",
      description: "Espaces de détente et d'évasion permettant aux jeunes de se ressourcer et de développer leur bien-être personnel.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      stats: ["48 participants"]
    },
    {
      name: "Les Loisirs Nocturnes",
      description: "Activités nocturnes encadrées offrant une alternative positive aux jeunes durant les soirées et week-ends.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      stats: ["500–800 personnes accueillies"]
    }
  ];

  return (
    <section>
      {/* Section 1: Introduction */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/pole-jeunesse.png')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">PÔLE JEUNESSE</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Accompagner, soutenir et valoriser la jeunesse de Vaulx-en-Velin
          </p>
        </div>
      </div>

      {/* Introduction Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              Le Pôle Jeunesse d'AVAS accompagne les jeunes de 11 à 25 ans dans leur épanouissement personnel, 
              leur réussite scolaire et leur insertion sociale. Notre mission est de créer un environnement 
              bienveillant où chaque jeune peut développer ses potentiels et construire son avenir.
            </p>
            
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Accompagnement personnalisé et soutien éducatif</span>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Développement de l'autonomie et de la responsabilité</span>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Initiatives citoyennes et engagement communautaire</span>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Activités culturelles et de loisirs enrichissantes</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Groupe de jeunes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Jeunes en action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: AU QUOTIDIEN */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16 relative overflow-hidden">
        {/* AVAS Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img src="/logo.png" alt="AVAS" className="w-64 md:w-96 lg:w-128" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-6 lg:mb-8">AU QUOTIDIEN</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
            Chaque jour, notre équipe dédiée met en œuvre des actions concrètes pour accompagner les jeunes 
            dans leur parcours. De l'aide aux devoirs aux sorties culturelles, nous créons un environnement 
            propice à l'épanouissement et à la réussite.
          </p>
        </div>
      </div>

      {/* Section 3: Thematic Activity Blocks */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {dailyActivities.map((activity, index) => (
            <div key={index} className="border-l-4 border-blue-400 bg-blue-50 p-4 md:p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{activity.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">{activity.description}</p>
              {activity.subPoints && (
                <ul className="space-y-1 md:space-y-2">
                  {activity.subPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Objectifs 2024 */}
      <div className="bg-gray-100 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8 lg:mb-12">Objectifs 2024</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {objectives2024.map((objective, index) => (
                <div key={index} className="flex items-center p-3 md:p-4 bg-blue-50 rounded-lg">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-800">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Les Chantiers Jeunes */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">Les Chantiers Jeunes</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
          Les chantiers jeunes permettent aux participants de développer leur sens des responsabilités, 
          leur citoyenneté tout en percevant une rémunération pour leur engagement.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {chantiersTypes.map((type, index) => {
            return (
              <div key={index} className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{type.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 6: Stat Block */}
      <div className="bg-blue-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 md:mb-4">18</div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700">semaines de projets jeunes</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 md:mb-4">108</div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700">participants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Un Été aux Noirettes */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">Un Été aux Noirettes</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
          Chaque été, nous organisons un programme exceptionnel aux Noirettes, offrant aux jeunes des activités 
          nautiques, des jeux aquatiques et des moments de convivialité en plein air. Ces séjours renforcent 
          la cohésion de groupe et créent des souvenirs inoubliables.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Jeunes en bateau"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Jeux aquatiques"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Activités de groupe"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Section 8: Themed Program Tiles */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8 lg:mb-12">Nos Programmes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${program.color} text-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-center">{program.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 9: Program Details with Stats */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {programDetails.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1 aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="lg:col-span-2 p-4 md:p-6 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{program.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">{program.description}</p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {program.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="bg-blue-100 text-blue-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoleJeunesse;