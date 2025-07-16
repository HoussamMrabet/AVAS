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
    <section className="py-16 bg-white">
      <div className="mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            2024 en chiffres
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              {/* Stat Number */}
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                {stat.value}
              </div>
              
              {/* Stat Title */}
              <h3 className="text-xl font-medium text-black">
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