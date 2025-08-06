import React from 'react';
import { Users, BookOpen, Target, Wrench, Calendar, MapPin, Activity, Heart } from 'lucide-react';

const PoleJeunesse: React.FC = () => {
  const dailyActivities = [
    {
      title: "Les Permanences Loisirs",
      description: "Les permanences loisirs offrent un cadre sécurisé et accueillant, favorisant les échanges et le divertissement. C'est un espace où les adolescents peuvent se détendre, nouer de nouvelles amitiés et s'épanouir à travers des activités variées."
    },
    {
      title: "Les Activités de Loisirs",
      description: "Ce sont des sorties culturelles et de loisirs variées qui donnent l'opportunité aux jeunes de découvrir de nouveaux centres d'intérêts."
    },
    {
      title: "L'Accompagnement à la Scolarité: À Vaulx Réussites",
      description: "Service d'aide scolaire personnalisé pour favoriser la réussite éducative.",
      subPoints: [
        "Aide personnalisée",
        "Relations école-parents",
        "Mentorat jeunesse"
      ]
    },
    {
      title: "Les Chantiers Jeunes",
      description: "Projets collectifs permettant aux jeunes de s'engager dans des actions concrètes au service de leur quartier.",
      subPoints: [
        "Travaux d'entretien",
        "Projets de rénovation",
        "Sensibilisation à l'environnement"
      ]
    },
    {
      title: "Un Été aux Noirettes",
      description: "Programme estival proposant des activités nautiques et de plein air pour renforcer la cohésion sociale.",
    },
    {
      title: "A Vaulx Tours",
      description: "Programme immersif pour les jeunes de Vaulx-en-Velin, renfrorçant l'identité, la fierté et le leadership",
    }
  ];

  const objectives2024 = [
    "Réduire le taux de décrochage scolaire",
    "Favoriser la réussite académique et l'engagement en classe",
    "Renforcer la confiance en soi et en ses capacités",
    "Redonner l’envie d'apprendre et d'être acteur de son parcours",
    "Aider les jeunes à prendre en main leur avenir en faisant les bons choix pour eux-mêmes."
  ];

  const chantiersTypes = [
    { name: "Entretien" },
    { name: "Peinture" },
    { name: "Piquetage" }
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
      name: "La Fête de Quartier",
      description: "Permet de mobiliser les habitants du quartier prioritaire des Noirettes autour de divers stands et de les informer sur nos actions. Clest le moment festif de l'année avec jeux gonflables, maquillage, buvette, espace gaming",
      image: "/program1.jpeg",
      stats: ["1500 habitans réunis"]
    },
    {
      name: "Les Accueils en bas de tours",
      description: "Un accueil de loisirs quotidien de 18h à 22h tous les jours, qui permet d'occuper l'espace et de mobiliser un maximum de jeunes afin de les inscrire aux différentes activités de loisirs et aux chantiers jeunes organisés pendant les vacances.",
      image: "/program2.jpeg",
      stats: ["6 semaines d'animation dans le quartier"]
    },
    {
      name: "Les Chantiers Jeunes",
      description: "Les jeunes peuvent choisir de participer à des chantiers, ce qui leur permet d'apprendre un métier, de se faire de l’argent de poche, de financer des projets personnels (code, permis) et/ou d'auto-financer les sorties qui effectuent pendant I'été",
      image: "/program5.jpeg",
      stats: [],
    },
    {
      name: "Les Vacances à la Carte",
      description: "Nous proposons aux jeunes de composer leur semaine de vacances en choisissant parmi un large panel d'activités et de sorties",
      image: "/program3.png",
      stats: ["34 sorties organisées", "+ de 300 participants"]
    },
    {
      name: "Les Bulles Oxygène",
      description: "Dans ce panel, on retrouve les Bulles d'oxygènes, des sorties et séjours dans le sud de la France",
      image: "/program4.png",
      stats: ["7 sorties organisées", "48 participants"]
    },
    {
      name: "Les Loisirs Nocturnes",
      description: "Un collectif de cinq associations locales qui allient leur force pour proposer en plus de leur programmation respective un évènement d'ampleur inter-quartier chaque samedi d'été. Au programme : cinéma en plein air, spectacles, vol en montgolfière, stand gaming...",
      image: "/program6.jpeg",
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
              Le Pôle Jeunesse est le pilier fondateur de
              l'association. Dès sa création, il a incarné la
              volonté d'accompagner et de soutenir les jeunes
              du quartier dans tous les aspects de leur
              développement, qu'il s'agisse de leur
              épanouissement personnel, de leur réussite
              scolaire ou de leur insertion sociale et
              professionnelle.
            </p>

          </div>

            <div className="w-72 mx-auto aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="/jeunesse_presentation1.jpeg"
                alt="Groupe de jeunes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center pt-2">
          <div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              Loin de se limiter à une simple assistance,
              l'association préne un accompagnement global,
              visant à responsabiliser les jeunes et à les
              encourager à devenir des acteurs de leur propre
              vie et de leur ville.
              <br />
              Fort de son expérience et de son expertise, le
              Pôle Jeunesse a développé des projets
              innovants et inclusifs qui répondent aux
              aspirations des jeunes tout en leur offrant des
              perspectives d'avenir.
            </p>

          </div>
            <div className="w-72 mx-auto aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="/jeunesse_presentation2.jpeg"
                alt="Jeunes en action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
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
            À travers son Local Jeunesse situé en plein cœur du quartier du Mas
            du Taureau, l’association joue un rôle fondamental dans la vie des
            jeunes du « Grand Mas ». Le Local Jeunesse est un véritable lieu de
            convivialité où les jeunes peuvent participer à diverses activités.
          </p>
        </div>
      </div>

      {/* Section 3: Thematic Activity Blocks */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {dailyActivities.map((activity, index) => (
            <a href={`#activity-${index}`} key={index} className="cursor-pointer border-l-4 border-blue-400 bg-blue-50 p-4 md:p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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
            </a>
          ))}
        </div>
      </div>

      <div id='activity-2' className='bg-gray-100'>
        <div className="mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-screen-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
            L'Accompagnement à la Scolarité: À Vaulx Réussites 2022
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left: Text */}
            <div className="flex-1 max-w-2xl">
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-4">
                En parallèle, le Local Jeunesse offre :
              </p>
              <ul className="list-disc pl-6 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                <li>Un soutien indispensable aux jeunes dans leur parcours scolaire.</li>
                <li>Un encadrement personnalisé permettant à de nombreux adolescents de surmonter leurs difficultés et d'avancer sereinement dans leurs études.</li>
              </ul>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Le programme “A Vaulx Réussites” est un dispositif central de notre action en faveur des jeunes. Grâce à des permanences de soutien scolaire tenues par des bénévoles dévoués, les jeunes bénéficient d'une aide précieuse pour leurs devoirs, la compréhension des cours et l'acquisition de méthodes de travail. Ce soutien tout au long de l'année favorise leur réussite académique, tout en renforçant leur motivation et leur engagement.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex-1 aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src="/accompagnement.jpeg"
                alt="Jeunes en soutien scolaire"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Objectifs 2024 */}
      <div className="py-8 md:py-12 lg:py-16">
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
      <div id='activity-3' className='bg-blue-50'>
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <h2 className="flex justify-center items-center gap-5 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">Les Chantiers Jeunes <img src="/partners/est_metropole_habitat.png" alt="Chantier" className="w-24 h-auto rounded-full shadow-md" />
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
            En partenariat avec Est Métropole Habitat nous offrons aux adolescents l'opportunité de s’investir activement dans l'entretien de leur quartier et de leur ville, tout en acquérant des compétences utiles pour leur avenir.
            <br />
            <br />
            Tout au long de l’année, selon les besoins du bailleur, les jeunes ont la possibilité de
            s'inscrire à des chantiers de quelques jours pour effectuer des travaux tels que :
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

          <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto my-8 md:my-12">
            En échange d'une gratification pour le travail réalisé, afin de participer à des sorties,
            séjours, ou investir dans leurs projets personnels.
          </p>

        </div>
      </div>

      {/* Section 6: Stat Block */}
      <div className="bg-blue-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Objectifs 2024</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 text-left mb-6 md:mb-8">
            <ul className="list-disc pl-6 mb-4">
              <li>Développer l'esprit d'équipe, la responsabilité et le goût du travail</li>
              <li>Permettre aux jeunes de contribuer à l'amélioration de leur environnement</li>
              <li>Faciliter l'insertion des jeunes qui valorise l'engagement citoyen et renforce le lien social au sein du quartier</li>
            </ul>
            Depuis deux ans, nous organisons également un chantier jeune pour l'accueil du festival
            Arta Sacra (festival mettant à I'honneur les traditions ancestrales et civilisations du
            monde entier). Notre équipe de jeunes assure l’'accueil des spectateurs lors des
            spectacles organisés à Vaulx-en-Velin, apportant ainsi leur contribution à cet événement
            culturel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 md:mb-4">18</div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700">semaines de "Chantiers jeunes"</p>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 md:mb-4">108</div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700">participants ont pu découvrir de nouveaux métiers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Un Été aux Noirettes */}
      <div id='activity-4' className='bg-gray-100'>
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">Un Été aux Noirettes</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
            Lancé en 2023, "Un été aux Noirettes" est un dispositif spécial mis en
            place pour accompagner les habitants du Grand Mas, et plus
            particulièrement ceux du quartier des Noirettes, tout au long de la
            période estivale.
            <br />
            <br />
            Ce programme propose un large éventail d'activités, offrant ainsi aux
            habitants — notamment à ceux qui ne peuvent pas quitter leur quartier
            durant I'été - l'opportunité de profiter pleinement de la saison.
            <br />
            <br />
            Il permet également à I'association de maintenir et de renforcer le lien
            avec les jeunes du quartier et leur famille. Ce dispositif contribue
            également à soulager les parents durant cette période de vacances
            scolaires.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src="/noirettes1.png"
                alt="Jeunes en bateau"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src="/noirettes2.png"
                alt="Jeux aquatiques"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src="/noirettes3.png"
                alt="Activités de groupe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div id='activity-5' className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">A Vaulx Tours</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
          Lancé en 2025, A Vaulx Tours est un programme culturel et citoyen imaginé par l’association AVAS pour accompagner les jeunes de Vaulx-en-Velin dans leur ouverture au monde et leur développement personnel. Pensé comme une invitation au voyage et à la découverte, il s’adresse à plus de 250 jeunes vaudais, notamment ceux issus des quartiers prioritaires.
          <br /><br />
          Ce dispositif propose des sorties culturelles, des week-ends immersifs et des séjours en France ou à l’étranger, autour de thématiques fortes : l’identité, l’engagement citoyen, la diversité culturelle et la fierté des quartiers. À travers ces expériences, les jeunes explorent leur histoire, rencontrent d'autres associations, visitent des institutions et découvrent de nouveaux territoires.
          <br /><br />
          A Vaulx Tours vise ainsi à valoriser les talents, encourager la prise de parole, favoriser la mixité et former les citoyens engagés de demain. Ce projet structurant constitue un levier fort d’inclusion, d’émancipation et d’éveil à la citoyenneté.
        </p>

          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src="/vaux.png"
              alt="Jeunes en bateau"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
      </div>

      {/* Section 8: Themed Program Tiles */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8 lg:mb-12">Dispositif de l'été</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {programs.map((program, index) => (
              <a
                href={`#program-${index}`}
                key={index}
                className={`${program.color} text-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-center">{program.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Section 9: Program Details with Stats */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {programDetails.map((program, index) => (
            <div id={`program-${index}`} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                  {index == 5 && (
                    <div className='flex flex-wrap gap-2 mt-4'>
                      <img src="/partners/CSLevy.jpg" alt="CSLevy" className='w-12 h-12 object-contain' />
                      <img src="/partners/surprize.jpg" alt="surprize" className='w-12 h-12 object-contain' />
                      <img src="/partners/msports.png" alt="msports" className='w-12 h-12 object-contain' />
                      <img src="/logo.png" alt="avas" className='w-12 h-12 object-contain' />
                      <img src="/partners/coeur_banlieu.png" alt="coeur banlieu" className='w-12 h-12 object-contain' />
                    </div>
                  )}
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