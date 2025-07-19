import React from 'react';
import { Users, Building2, Target, Lightbulb, Calendar, MapPin, Award, Heart } from 'lucide-react';

const PoleCitoyennete: React.FC = () => {
  const goalBoxes = [
    "Faire monter en compétences nos écosystèmes associatifs",
    "Encourager les mobilisations constructives", 
    "Former au leadership de jeunes adultes"
  ];

  const projectCards = [
    {
      number: "01",
      title: "Ateliers de Formation Associative",
      description: "Renforcement des capacités organisationnelles des associations locales"
    },
    {
      number: "02", 
      title: "Laboratoire d'Innovation Citoyenne",
      description: "Espace de co-création pour développer des solutions communautaires"
    },
    {
      number: "03",
      title: "École de Leadership Jeunesse",
      description: "Programme de formation aux compétences de leadership pour les 18-30 ans"
    },
    {
      number: "04",
      title: "Réseau de Mentoring Citoyen",
      description: "Mise en relation entre citoyens expérimentés et nouveaux engagés"
    },
    {
      number: "05",
      title: "Plateforme de Dialogue Interculturel",
      description: "Espaces d'échange et de compréhension mutuelle entre communautés"
    },
    {
      number: "06",
      title: "Observatoire Participatif Local",
      description: "Collecte et analyse collaborative des enjeux du territoire"
    }
  ];

  const mobilisationProjects1 = [
    {
      number: "1",
      title: "Cité et Territoire",
      goals: [
        "Développer une vision partagée du territoire",
        "Renforcer l'identité locale positive",
        "Créer des espaces de dialogue citoyen"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      number: "2", 
      title: "Quartiers Durables",
      goals: [
        "Promouvoir l'écologie urbaine",
        "Sensibiliser aux enjeux environnementaux",
        "Développer des initiatives vertes locales"
      ],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      number: "3",
      title: "Économie Solidaire",
      goals: [
        "Soutenir l'entrepreneuriat social local",
        "Créer des circuits économiques courts",
        "Favoriser l'insertion par l'activité économique"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      number: "4",
      title: "Culture et Patrimoine",
      goals: [
        "Valoriser le patrimoine local",
        "Développer l'offre culturelle participative",
        "Renforcer le lien social par la culture"
      ],
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ];

  const mobilisationProjects2 = [
    {
      number: "5",
      title: "Leadership Participatif",
      goals: [
        "Former aux techniques d'animation participative",
        "Développer les compétences de facilitation",
        "Créer un réseau de leaders citoyens"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      number: "6",
      title: "Engagement Numérique",
      goals: [
        "Utiliser les outils numériques pour la participation",
        "Créer des plateformes collaboratives",
        "Former aux usages citoyens du numérique"
      ],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      number: "7",
      title: "Médiation Citoyenne",
      goals: [
        "Former aux techniques de médiation",
        "Prévenir et résoudre les conflits locaux",
        "Créer du lien social par le dialogue"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      number: "8",
      title: "Gouvernance Partagée",
      goals: [
        "Expérimenter de nouvelles formes de démocratie",
        "Impliquer les citoyens dans les décisions publiques",
        "Créer des instances de co-construction"
      ],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ];

  const interpellationObjectives = [
    "Comment renforcer la participation citoyenne dans les décisions locales ?",
    "Quels outils pour améliorer la concertation entre habitants et institutions ?",
    "Comment développer le leadership citoyen dans nos quartiers ?",
    "Quelles méthodes pour faire converger les initiatives locales ?"
  ];

  return (
    <section>
      {/* Page Title Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            PRÉSENTATION
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">
            Ce projet s'inscrit dans le cadre de l'incubation de l'initiative AVAS à Vaulx-en-Velin
          </p>
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6">
            2023
          </div>
          <div className="w-16 md:w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-12">OBJECTIFS</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
              Le Pôle Citoyenneté d'AVAS vise à renforcer l'engagement citoyen et le pouvoir d'agir 
              des habitants de Vaulx-en-Velin. À travers une approche collaborative et participative, 
              nous accompagnons les initiatives locales et développons les compétences citoyennes 
              pour construire ensemble un territoire plus démocratique et inclusif.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-100 rounded-full flex items-center justify-center">
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Banner */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
          alt="Atelier communautaire"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Goals Highlight Boxes */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="space-y-3 md:space-y-4">
          {goalBoxes.map((goal, index) => (
            <div key={index} className="bg-yellow-100 border-l-4 border-yellow-400 p-4 md:p-6 rounded-r-lg hover:shadow-md transition-shadow duration-300">
              <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">{goal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Incubation Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            L'ÉQUIPE AU CŒUR DE L'INCUBATION
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-8 md:mb-12">
            <div>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                Notre approche collaborative place l'équipe au centre du processus d'incubation. 
                Nous développons des méthodes participatives qui responsabilisent chaque acteur 
                et créent une dynamique collective forte. Cette démarche permet de construire 
                des projets ancrés dans les réalités du territoire.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">1150</div>
                  <p className="text-xs md:text-sm text-gray-600">participants</p>
                </div>
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">1000</div>
                  <p className="text-xs md:text-sm text-gray-600">heures d'ingénierie collective</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Atelier collaboratif"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Conférence participative"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          PARMI CES PROJETS, ON RETROUVE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projectCards.map((project, index) => (
            <div key={index} className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm md:text-base">{project.number}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
              <div className="w-full h-1 bg-yellow-400 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* First Chantiers de Mobilisation Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            CHANTIERS DE MOBILISATION
          </h2>
          
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {mobilisationProjects1.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-yellow-600 font-bold text-sm md:text-base">PROJET {project.number}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      {project.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base text-gray-700">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-video lg:aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Chantiers de Mobilisation Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          CHANTIERS DE MOBILISATION - LEADERSHIP & ENGAGEMENT
        </h2>
        
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {mobilisationProjects2.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                      <span className="text-yellow-600 font-bold text-sm md:text-base">PROJET {project.number}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {project.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interpellations Citoyennes Section */}
      <div className="bg-yellow-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12 leading-tight">
            QUARTIERS D'INTERPELLATIONS CITOYENNES<br />
            POUR FAIRE CONVERGER VAULX'ALTIONS, CONCERTATIONS & LEADERSHIP
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                <span className="text-yellow-600 font-bold text-sm md:text-base">PROJET 9</span>
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Perspective Automne 2024
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {interpellationObjectives.map((objective, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-xs md:text-sm">{index + 1}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1">{objective}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xs md:text-sm text-gray-600 italic">
              Cette démarche s'appuie sur les valeurs de participation, de transparence et de co-construction 
              qui guident l'action d'AVAS depuis sa création.
            </p>
          </div>
        </div>
      </div>

      {/* Final Project */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 border-l-4 border-yellow-400">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
              <span className="text-yellow-600 font-bold text-sm md:text-base">PROJET 10</span>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Perspective printemps 2025
            </div>
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Ce projet final vise à consolider l'ensemble des acquis et des expérimentations menées 
            dans le cadre du Pôle Citoyenneté. Il s'agira de créer un modèle reproductible de 
            développement citoyen qui pourra être essaimé sur d'autres territoires. Cette démarche 
            s'appuiera sur l'évaluation participative des actions menées et la capitalisation des 
            bonnes pratiques identifiées. L'objectif est de construire un référentiel d'actions 
            citoyennes qui serve de base à de futurs projets de développement territorial participatif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoleCitoyennete;