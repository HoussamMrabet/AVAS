import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'budget',
      title: 'Budget Annuel',
      value: '+200K'
    },
    {
      id: 'projects',
      title: 'Projets Menés',
      value: '+20'
    },
    {
      id: 'participants',
      title: 'Participants Formés',
      value: '108'
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-8">
            2024 en chiffres
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              {/* Stat Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 md:mb-4">
                {stat.value}
              </div>
              
              {/* Stat Title */}
              <h3 className="text-lg md:text-xl font-medium text-black">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;