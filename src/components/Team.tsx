import React from 'react';
import { useTeams } from '../hooks/useTeams';
import { useInfos } from '../hooks/useInfos';

const Team: React.FC = () => {

  const { site } = useInfos();

  const { teams } = useTeams();


  const teamMembers = teams.filter(member => member.isPrimary === true);
  const volunteers = teams.filter(member => member.isPrimary !== true);

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/team-hero.png')` }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
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
            <span className="font-bold text-blue-600"> 10 collaborateurs permanents</span> et plus de
            <span className="font-bold text-blue-600"> 60 bénévoles actifs</span> travaillent ensemble
            pour porter les valeurs d'AVAS et réaliser nos missions sur le terrain.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Chaque membre de l'équipe apporte son expertise, sa passion et son engagement pour créer
            un impact positif durable dans la vie des habitants de Vaulx-en-Velin. Notre approche
            collaborative et intergénérationnelle nous permet d'innover constamment dans nos méthodes
            d'accompagnement et d'animation.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">L'Équipe Permanente</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border-t-4 border-blue-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.avatar || "https://i.ibb.co/0RxMKYM8/l60Hf.png"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-2 md:mb-3 text-sm md:text-base">{member.position}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">{member.description}</p>
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
                key={volunteer._id}
                className="bg-white rounded-lg p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden border-2 border-blue-200">
                  <img
                    src={volunteer.avatar || "https://i.ibb.co/0RxMKYM8/l60Hf.png"}
                    alt={volunteer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h5 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">{volunteer.name}</h5>
                <p className="text-blue-600 text-xs font-medium mb-1 line-clamp-2">{volunteer.position}</p>
                <p className="text-gray-500 text-xs">Depuis {volunteer.startDate}</p>
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
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Devenir Bénévole
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;