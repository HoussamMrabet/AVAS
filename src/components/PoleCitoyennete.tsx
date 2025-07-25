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
    <div className="min-h-screen bg-white">
      {/* First Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            PRÉSENTATION
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Circle with 2023 */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">2023</span>
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex-1 lg:pl-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began with a vision to transform the digital landscape through
              innovative solutions and cutting-edge technology. We believe in creating
              experiences that not only meet today's needs but anticipate tomorrow's challenges.
              With a focus on excellence and continuous improvement, we've built a foundation
              that supports sustainable growth and meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            Our Story
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>

        {/* Text and Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex-1">
            <p className="text-gray-600 leading-relaxed text-lg">
              From humble beginnings to industry leadership, our path has been defined by
              innovation, dedication, and an unwavering commitment to quality. We've
              consistently pushed boundaries, embraced new technologies, and fostered
              a culture of continuous learning and growth.
            </p>
          </div>

          {/* Small Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors duration-300">
              <img src='/logo.jpg' className="w-18 h-18 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Full-width Picture */}
        <div className="mb-12">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Modern office space with team collaboration"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Text below picture */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed text-lg text-left">
            Our collaborative approach brings together diverse perspectives and expertise,
            creating an environment where innovation thrives. Every project is an opportunity
            to exceed expectations and deliver solutions that make a lasting impact.
          </p>
        </div>

        {/* Three boxes */}
        <div className="space-y-6 mb-12">
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-8 rounded-lg border border-yellow-500 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritize cutting-edge solutions and forward-thinking approaches that
              set new standards in the industry. Our commitment to innovation drives
              everything we do.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 p-8 rounded-lg border border-yellow-400 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
            <p className="text-gray-600 leading-relaxed">
              Every deliverable undergoes rigorous testing and quality checks to ensure
              it meets our high standards and exceeds client expectations. Excellence
              is never compromised.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-8 rounded-lg border border-yellow-300 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Partnership</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in building lasting relationships through transparent communication,
              collaborative problem-solving, and a genuine commitment to your success and growth.
            </p>
          </div>
        </div>

        {/* Final title and text */}
        <div className="text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Join us in shaping the future through innovative solutions and exceptional
            experiences. Let's work together to turn your vision into reality and create
            something extraordinary that stands the test of time.
          </p>
        </div>
      </section>

      {/* Third Section - Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            Our Impact
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>

        {/* Description text */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Our commitment to community engagement and professional development has created
            meaningful opportunities for growth and collaboration. Through volunteer initiatives
            and structured internship programs, we've fostered an environment where learning
            and giving back go hand in hand.
          </p>
        </div>

        {/* Statistics Container */}
        <div className="bg-yellow-50 rounded-xl p-8 mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* First Statistic */}
            <div className="text-center flex-1">
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium mb-4 shadow-sm">
                2022 - 2024
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
                + 1 150
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                heures d'engagement bénévole
              </p>
            </div>

            {/* Vertical Separator */}
            <div className="hidden lg:block w-px h-24 bg-yellow-300"></div>
            <div className="lg:hidden w-24 h-px bg-yellow-300"></div>

            {/* Second Statistic */}
            <div className="text-center flex-1">
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium mb-4 shadow-sm">
                2023 - 2024
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
                + 1 000
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                heures d'engagement dans le cadre de stages gratifiés
              </p>
            </div>
          </div>
        </div>

        {/* Three Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First Image */}
          <div className="text-center">
            <div className="bg-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Team collaboration workshop"
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Second Image */}
          <div className="text-center">
            <div className="bg-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Professional development session"
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Third Image */}
          <div className="text-center">
            <div className="bg-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Community engagement activities"
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Final text */}
        <div className="text-left">
          <p className="text-gray-600 leading-relaxed text-lg">
            These initiatives represent more than just numbers – they reflect our dedication
            to building a stronger community and providing valuable learning experiences.
            Each hour invested contributes to personal growth, professional development,
            and positive social impact that extends far beyond our organization.
          </p>
        </div>
      </section>

      {/* Fourth Section - Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            Our Process
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>

        {/* Description text */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Our proven methodology ensures consistent results and exceptional outcomes.
            Through a structured approach that combines strategic planning, creative execution,
            and continuous optimization, we deliver solutions that exceed expectations and
            drive meaningful results for our clients.
          </p>
        </div>

        {/* Four Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="relative bg-yellow-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              1
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
              <p className="text-gray-700 leading-relaxed">
                We begin by understanding your unique needs, goals, and challenges. Through
                comprehensive research and strategic planning, we create a roadmap that
                aligns with your vision and objectives.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-yellow-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              2
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Our creative team brings your vision to life through innovative design and
                robust development. We focus on creating solutions that are both beautiful
                and functional, ensuring optimal user experience.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-yellow-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              3
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing & Refinement</h3>
              <p className="text-gray-700 leading-relaxed">
                Quality assurance is paramount in our process. We conduct thorough testing,
                gather feedback, and make necessary refinements to ensure the final product
                meets the highest standards of excellence.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative bg-yellow-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              4
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Launch & Support</h3>
              <p className="text-gray-700 leading-relaxed">
                We ensure a smooth launch and provide ongoing support to maximize your success.
                Our commitment extends beyond delivery, offering continuous optimization and
                maintenance to keep your solution performing at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PoleCitoyennete;