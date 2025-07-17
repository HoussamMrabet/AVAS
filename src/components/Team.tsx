import React from 'react';
import { Users, Heart, Award, Mail, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Abdallah Slimani',
      role: 'Président',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Fondateur et visionnaire d\'AVAS, passionné par le développement local',
      email: 'president@avas.fr',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Naila Nouri',
      role: 'Directrice Générale',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Coordination des projets et développement stratégique',
      email: 'n.nailiavas@gmail.com',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Karim Benali',
      role: 'Responsable Pôle Jeunesse',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Animation et accompagnement des jeunes du quartier',
      email: 'jeunesse@avas.fr',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Fatima Ouali',
      role: 'Responsable Médiation Urbaine',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Gestion des conflits et médiation de proximité',
      email: 'mediation@avas.fr',
      linkedin: '#'
    },
    {
      id: 5,
      name: 'Ahmed Khoury',
      role: 'Responsable Pôle Citoyenneté',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Développement de projets collaboratifs citoyens',
      email: 'citoyennete@avas.fr',
      linkedin: '#'
    },
    {
      id: 6,
      name: 'Samira Hadj',
      role: 'Coordinatrice Administrative',
      image: 'https://images.pexels.com/photos/3763189/pexels-photo-3763189.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Gestion administrative et financière',
      email: 'admin@avas.fr',
      linkedin: '#'
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: 'Amaris De Pilla',
      role: 'Bénévole Animation',
      image: 'https://images.pexels.com/photos/3763200/pexels-photo-3763200.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      since: '2022'
    },
    {
      id: 2,
      name: 'Bernard Semeur',
      role: 'Bénévole Accompagnement',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      since: '2021'
    },
    {
      id: 3,
      name: 'Leila Mansouri',
      role: 'Bénévole Événementiel',
      image: 'https://images.pexels.com/photos/3763201/pexels-photo-3763201.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      since: '2023'
    },
    {
      id: 4,
      name: 'Youssef Alami',
      role: 'Bénévole Communication',
      image: 'https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      since: '2022'
    },
    {
      id: 5,
      name: 'Nadia Cherif',
      role: 'Bénévole Médiation',
      image: 'https://images.pexels.com/photos/3763202/pexels-photo-3763202.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      since: '2020'
    },
    {
      id: 6,
      name: 'Omar Belkacem',
      role: 'Bénévole Jeunesse',
      image: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      since: '2023'
    }
  ];

  return (
    <section>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Notre Équipe</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Une équipe passionnée et engagée au service de la communauté
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">L'Esprit d'Équipe AVAS</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8">
            Notre force réside dans la diversité et la complémentarité de notre équipe. 
            <span className="font-bold text-green-600"> 10 collaborateurs permanents</span> et plus de 
            <span className="font-bold text-green-600"> 60 bénévoles actifs</span> travaillent ensemble 
            pour porter les valeurs d'AVAS et réaliser nos missions sur le terrain.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Chaque membre de l'équipe apporte son expertise, sa passion et son engagement pour créer 
            un impact positif durable dans la vie des habitants de Vaulx-en-Velin. Notre approche 
            collaborative et intergénérationnelle nous permet d'innover constamment dans nos méthodes 
            d'accompagnement et d'animation.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          <div className="text-center bg-green-50 rounded-lg p-4 md:p-6">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">10</div>
            <p className="text-sm md:text-base text-gray-600">Collaborateurs</p>
          </div>
          <div className="text-center bg-blue-50 rounded-lg p-4 md:p-6">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">60+</div>
            <p className="text-sm md:text-base text-gray-600">Bénévoles Actifs</p>
          </div>
          <div className="text-center bg-purple-50 rounded-lg p-4 md:p-6">
            <Award className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4" />
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">50/50</div>
            <p className="text-sm md:text-base text-gray-600">Parité Homme/Femme</p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">L'Équipe Permanente</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border-t-4 border-green-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-green-600 font-semibold mb-2 md:mb-3 text-sm md:text-base">{member.role}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">{member.description}</p>
                
                <div className="flex gap-2 md:gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-green-600 transition-colors duration-200"
                  >
                    <Mail size={16} className="md:w-5 md:h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin size={16} className="md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteers Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Nos Bénévoles</h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Le cœur battant d'AVAS, nos bénévoles donnent de leur temps et de leur énergie 
              pour faire vivre nos projets au quotidien.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
            {volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="bg-white rounded-lg p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden border-2 border-blue-200">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h5 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">{volunteer.name}</h5>
                <p className="text-blue-600 text-xs font-medium mb-1 line-clamp-2">{volunteer.role}</p>
                <p className="text-gray-500 text-xs">Depuis {volunteer.since}</p>
              </div>
            ))}
          </div>

          {/* Volunteer CTA */}
          <div className="text-center mt-8 md:mt-12 bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Rejoignez Notre Équipe</h4>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto">
              Vous souhaitez contribuer à nos actions et faire partie de l'aventure AVAS ? 
              Rejoignez nos bénévoles et participez activement au développement de votre quartier.
            </p>
            <button className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium text-sm md:text-base">
              Devenir Bénévole
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;