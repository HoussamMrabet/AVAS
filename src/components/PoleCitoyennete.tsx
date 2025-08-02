import React from 'react';

const PoleCitoyennete: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* First Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-left mb-12">
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
              En réponse à l'observation d'une <span className='font-medium text-black'>diminution de l'implication des habitants</span> dans la vie de leur quartier, l'Association AVAS a pris l'initiative de créer le "<span className='font-medium text-black'>Pôle Citoyenneté</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            Objectifs
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>

        {/* Text and Logo */}
        <div className="flex flex-row justify-between items-start gap-8 mb-12">
          <div className="flex-1">
            <p className="text-gray-600 leading-relaxed text-lg">
              Ce pôle vise à <span className='font-medium text-black'>revitaliser la participation</span> des adultes en lançant un véritable <span className='font-medium text-black'>"Incubateur d'initiatives citoyennes"</span> avec pour objectif central le <span className='font-medium text-black'>renforcement du pouvoir d'agir</span> des habitants.
            </p>
          </div>

          {/* Small Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors duration-300">
              <img src='/logo.jpg' className="w-18 h-18 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Full-width Picture */}
        <div className="mb-12">
          <img
            src="/citoyennete1.jpeg"
            alt="Modern office space with team collaboration"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Text below picture */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed text-lg text-left">
            Au sein de ce pôle, un <span className='font-medium text-black'>groupe d'habitants</span> a été constitué, participant activement à différents projets. L'accent est mis sur l'<span className='font-medium text-black'>initiation des habitants</span> à réaliser une expertise d'usage de leur cadre de vie, complétant ainsi les expertises d'ouvrages sur l'aménagement du territoire.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg text-left pt-5">
            Un diagnostic, réalisé de manière collaborative entre janvier & février 2023, nous a permis d'identifier <span className='font-medium text-black'>3 enjeux prioritaires</span> :
          </p>
        </div>

        {/* Three boxes */}
        <div className="space-y-6 mb-12">
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-8 rounded-lg border border-yellow-500 hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-600 leading-relaxed text-center">
              Faire montrer en competences notre ecosysteme associatif
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 p-8 rounded-lg border border-yellow-400 hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-600 leading-relaxed text-center">
              Encourager les mobilisations constructives
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#fff6dc] to-yellow-200 p-8 rounded-lg border border-yellow-300 hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-600 leading-relaxed text-center">
              Former au leadership de jeunes adultes
            </p>
          </div>
        </div>

        {/* Final title and text */}
        <div className="text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            L’ÉQUIPE AU COEUR DE L’INCUBATION
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Depuis janvier 2023, une équipe s'est constituée et s'étoffe progressivement au rythme des chantiers qui structurent notre plan d’action.
          </p>
        </div>
      </section>

      {/* Third Section - Statistics */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            Objectifs
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>

        {/* Description text */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            Apprendre en faisant l'expérience collaborative pour acquérir les compétences nécessaires au développement de projets et être en mesure d'en piloter les étapes : l'ingénierie du projet, sa gestion et sa valorisation.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mt-5">
            Chaque membre qui intègre activement l'aventure reste impliqué dans son ancrage associatif et apporte ses compétences pour les partager, de telle sorte que l'ensemble de I'équipe puisse progresser.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mt-5">
            Dans le cadre d’un plan de montée en compétences,les membres ont déja été formés :
          </p>
          <ul className="list-disc pl-6">
            <li>au “community-organizing” par Hélène Balazard, chercheuse et politiste (ENTPE),</li>
            <li>à la “Communication Non-Violente” par Jean-Luc Sost (“à partir de maintenant”),</li>
            <li>aux “Valeurs de la République & Laïcité” par Ruth Ouazana & Jaafar Greinch (“Racines de Demain”).</li>
          </ul>
        </div>

        {/* Statistics Container */}
        <div className="bg-[#fff6dc] rounded-xl p-8 mb-12 shadow-sm">
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
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 mb-12">
          {/* First Image */}
          <img
            src="/citoyennete2.jpeg"
            alt="Team collaboration workshop"
            className="w-80 h-80 object-cover rounded-sm shadow-custom"
          />

          {/* Second Image */}
          <img
            src="/citoyennete3.jpeg"
            alt="Professional development session"
            className="w-80 h-80 object-cover rounded-sm shadow-custom"
          />

          {/* Third Image */}
          <img
            src="/citoyennete4.png"
            alt="Community engagement activities"
            className="w-80 h-80 object-cover rounded-sm shadow-custom"
          />
        </div>

        {/* Final text */}
        <div className="text-left">
          <p className="text-gray-600 leading-relaxed text-lg">
            À la suite de la création de ce pôle, et grâce à un travail étroit avec les habitants, les partenaires et les institutions, nous avons pu développer dix projets structurants. Ces initiatives visent à renforcer le pouvoir d'agir des habitants et à revitaliser la participation citoyenne au sein du quartier du Mas du Taureau.
          </p>
        </div>
      </section>

      {/* Fourth Section - Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PARMI CES PROJETS, ON RETROUVE
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>

        {/* Description text */}
        <div className="mb-12">
          <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
            Les Chantiers de Mobilisations pour répondre à l’Enjeu de CONCERTATION
          </p>
        </div>

        {/* Four Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6">
          {/* Box 1 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              1
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Initier une expertise d'usage des habitants du quartier des Noirettes dans le cadre de la rénovation de la ZAC du Mas du Taureau.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              2
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Favoriser un diagnostic réalisé par les habitants pour appuyer l’écriture de la convention locale d'application des contrats de ville 2024-2030.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              3
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Entamer une étude prospective des besoins de mobilité des Vaudais en vue de la construction du T9 et de la réglementation de la Zone à Faibles Émissions (ZFE).
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              4
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Expérimenter une rencontre interculturelle entre étudiants et habitants via la création et la gestion d'un jardin partagé.
              </p>
            </div>
          </div>
        </div>

        {/* Description text */}
        <div className="mb-12">
          <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
            Les Chantiers de Plaidoyers pour répondre à l'Enjeu de LEADERSHIP
          </p>
        </div>

        {/* Four Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6">
          {/* Box 1 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              5
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Médiatiser l'écosystème inspirant de l’engagement vaudais pour dynamiser les initiatives solidaires locales.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              6
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Développer un Groupe de Travail dédié à la promotion de la citoyenneté et des initiatives issues des quartiers populaires de la métropole lyonnaise.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              7
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Se connecter aux expériences de “community organizing” des “Brighton & London Citizens” pour tester une organisation locale adaptée à la métropole lyonnaise.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              8
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Partager les expériences de vie entre jeunes Chinois et Français afin d'engager un dialogue culturel enrichissant
              </p>
            </div>
          </div>
        </div>

        {/* Description text */}
        <div className="mb-12">
          <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
            Les Chantiers d'Interpellations Citoyennes pour faire converger “Mobilisations, Concertations & Ledareship, Diagnostics & Plaidoyers”
          </p>
        </div>

        {/* Four Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6">
          {/* Box 1 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              9
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Organiser une Assemblée de Plaidoyers et de Débats Publics intitulée "A Vaulx Souhaits", mobilisant les habitants autour de sujets d'intérêt public.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-[#fff6dc] px-8 pt-8 pb-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              10
            </div>
            <div className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Créer un Fonds Local d'Archives dédié à la mémoire collective des habitants des quartiers du Mas du Taureau, conservant ainsi le patrimoine oral et écrit de la communauté.
              </p>
            </div>
          </div>
        </div>

        {/* Description text */}
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className='mb-10'>
          <p className="text-gray-600 font-bold leading-relaxed text-2xl max-w-4xl">
            LES CHANTIERS DE MOBILISATIONS POUR RÉPONDRE A L’ENJEU DE CONCERTATION
          </p>
        </div>
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 1
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='flex flex-col justify-center md:flex-row md:justify-between gap-8 my-8'>
          <div className='w-2/3'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a permis :
            </p>
            <ul className="list-disc pl-6">
              <li className='my-4'>La mise en place d'un collectif d'habitants investis sur plusieurs projets d'incubation.</li>
              <li className='my-4'>L'organisation par les habitants d'un recensement des problèmes de chauffage dans les bâtiments du quartier, en <span className="bg-yellow-300 p-1 inline">décembre 2023.</span></li>
              <li className='my-4'>En <span className="bg-yellow-300 p-1 inline">janvier 2024,</span> la modification par les pouvoirs publics du plan de résidentialisation, notamment sur le sujet du “City- Stade”.</li>
              <li className='my-4'> En <span className="bg-yellow-300 p-1 inline">février 2024,</span> nous sommes mentionnés par le Réseau APPUII (Alternatives Pour des Projets Urbains Ici & à l'International) dans la Catégorie “contestations pour construire des alternatives” du Rapport réalisé par son Observatoire.</li>
            </ul>
          </div>
          <div className='w-1/3 mx-auto md:mx-0'>
            <img
              src="/cit-p1.png"
              alt="Team collaboration workshop"
              className="w-80 h-80 object-cover rounded-sm shadow-custom2"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 2
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div>
          <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
            Ce que cela a favorisé :
          </p>
          <ul className="list-disc pl-6">
            <li className='my-4'>L'élaboration d'un partenariat avec linstitution pour alimenter laide à la décision politique</li>
            <li className='my-4'>Un croisement d'éléments de diagnostics et un partage de méthodologies avec des spécialistes et des experts</li>
          </ul>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 3
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='flex flex-col justify-center md:flex-row md:justify-between gap-8 my-8'>
          <div className='w-2/3'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a favorisé :
            </p>
            <ul className="list-disc pl-6">
              <li className='my-4'>La montée en compétences de l'équipe de notre incubateur.</li>
              <li className='my-4'>La prise de conscience par les habitants de leur potentiel d'expertise d'usage et la confiance qu'ils nous portent.</li>
              <li className='my-4'>Le renforcement de l'esprit collaboratif avec l'équipe du GPV ainsi qu'’avec l'écosystème institutionnel à l'échelle de la métropole.</li>
              <li className='my-4'>La prise en compte de notre travail d'expertise dans le document officiel de cette Convention Locale d'Application des Contrats de Ville de Vaulx en Velin <span className="bg-yellow-300 p-1 inline">2024 - 2030.</span></li>
            </ul>
          </div>
          <div className='w-1/3 mx-auto md:mx-0'>
            <img
              src="/cit-p3.png"
              alt="Team collaboration workshop"
              className="w-80 h-80 object-cover rounded-sm shadow-custom2"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 4
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='my-8'>
          <div className='my-5'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a favorisé :
            </p>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
              L'apprentissage du « faire-ensemble » entre deux populations dont les vécus quotidiens sont très différents.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 mb-12">
            {/* First Image */}
            <img
              src="/cit-p41.jpeg"
              alt="Team collaboration workshop"
              className="w-80 h-80 object-cover rounded-sm shadow-custom"
            />

            {/* Second Image */}
            <img
              src="/cit-p42.jpeg"
              alt="Professional development session"
              className="w-80 h-80 object-cover rounded-sm shadow-custom"
            />

            {/* Third Image */}
            <img
              src="/cit-p43.jpeg"
              alt="Community engagement activities"
              className="w-80 h-80 object-cover rounded-sm shadow-custom"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className='mb-10'>
          <p className="text-gray-600 font-bold leading-relaxed text-2xl max-w-4xl">
            LES CHANTIERS DE MOBILISATIONS POUR REPONDRE A L’ENJEU DE LEADERSHIP
          </p>
        </div>
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 5
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='my-8'>
          <div className='my-5'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a favorisé :
            </p>
            <ul className="list-disc pl-6">
              <li className='my-4'>La structuration de l'écosystème d'intérêts citoyens que nous construisons, et son élargissement.</li>
              <li className='my-4'>Une sérieuse montée en compétences des membres de notre équipe d'incubation.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 6
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='my-8'>
          <div className='my-5'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a permis :
            </p>
            <ul className="list-disc pl-6">
              <li className='my-4'><span className="bg-yellow-300 p-1 inline">Plus de 20 réunions</span> de travail & la mise en oeuvre d'outils collaboratifs.</li>
              <li className='my-4'>L'effort de la documentation pour croiser et confronter les points de vue.</li>
              <li className='my-4'>L'effort de l'écoute & l'exigence argumentaire pour débattre.</li>
              <li className='my-4'>En <span className="bg-yellow-300 p-1 inline">5 mois, 4 temps d'échange à </span>Vaulx en Velin avec le Sénateur Henri Cabanel & sa Directrice.</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 mb-12">
            {/* First Image */}
            <img
              src="/cit-p61.jpeg"
              alt="Team collaboration workshop"
              className="w-[400px] h-[300px] object-cover rounded-sm shadow-custom"
            />

            {/* Second Image */}
            <img
              src="/cit-p62.jpeg"
              alt="Professional development session"
              className="w-[400] h-[300px] object-cover rounded-sm shadow-custom"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 7
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='flex flex-col justify-center md:flex-row md:justify-between gap-8 my-8'>
          <div className='w-2/3'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a favorisé :
            </p>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
              Un rapprochement avec l'équipe de jeunes-leaders de Lyon 8ème formée par Samia Bencherifa (Centres Sociaux Gisèle Halimi & Jean Mermoz) avec qui nous cultivons l’intérêt de l'éducation populaire & du bien-commun qui en résulte.
            </p>
          </div>
          <div className='w-1/3 mx-auto md:mx-0'>
            <img
              src="/cit-p7.jpeg"
              alt="Team collaboration workshop"
              className="w-80 h-80 object-cover rounded-sm shadow-custom2"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 8
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div className='flex flex-col justify-center md:flex-row md:justify-between gap-8 my-8'>
          <div className='w-2/3'>
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que nous voulons favoriser :
            </p>
            <ul className="list-disc pl-6">
              <li className='my-4'>Linter-connaissance culturelle pour “dépasser les frontières”.</li>
              <li className='my-4'>Mettre en lumiére des parcours de vie inspirants.</li>
              <li className='my-4'>Susciter une prise de conscience sociale & une reconnaissance de ces jeunes-adultes qui sont exemplaires par leur agilité.</li>
            </ul>
          </div>
          <div className='w-1/3 mx-auto md:mx-0'>
            <img
              src="/cit-p8.png"
              alt="Team collaboration workshop"
              className="w-80 h-80 object-cover rounded-sm shadow-custom2"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className='mb-10'>
          <p className="text-gray-600 font-bold leading-relaxed text-2xl max-w-4xl">
            LES CHANTIERS D’INTERPELLATIONS CITOYENNES POUR FAIRE CONVERGER “MOBILISATIONS, CONCERTATIONS & LEADERSHIP, DIAGNOSTICS & PLAIDOYERS”
          </p>
        </div>
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 9
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div>
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
              Ce que cela a permis :
            </p>
            <p className="text-[#ffd430] bg-[#fff6dc] font-semibold leading-relaxed px-8 py-2 text-lg max-w-4xl">
              PERSPECTIVE Automne - Hiver 2024
            </p>
          </div>
          <ul className="pl-6">
            <li className='relative my-4'>Comment inscrire une trajectoire culturelle (I'identité et 'appartenance) alors qu'il peut y avoir un conflit de normes entre l'espace privé et l'espace public ?<span className="absolute -left-8 -top-2 text-4xl text-yellow-500 font-extrabold">1</span></li>
            <li className='relative my-4'>Comment naviguer au milieu d’une pluralité de registres éthiques (léducation) alors qu'il peut y avoir un conflit de normes entre I'espace familial et scolaire autant quavec la rue ?<span className="absolute -left-8 top-0 text-4xl text-yellow-500 font-extrabold">2</span></li>
            <li className='relative my-4'>Comment déterminer un projet professionnel (le travail) alors qu'il peut y avoir un conflit de normes entre la réussite individuelle et la dimension altruiste de la réussite ?<span className="absolute -left-8 top-0 text-4xl text-yellow-500 font-extrabold">3</span></li>
            <li className='relative my-4'>Comment permettre aux décideurs institutionnels deffectuer des arbitrages apaisés (la concertation) alors qu'’il peut y avoir un conflit de normes entre l'expertise d'ouvrage des techniciens et l'expertise d'usage des habitants ?<span className="absolute -left-8 -top-2 text-4xl text-yellow-500 font-extrabold">4</span></li>
          </ul>
          <p className="text-gray-600 font-semibold leading-relaxed text-lg max-w-4xl">
            Ce qu'il nous reste à faire pour réaliser l'évènement début 2025 :
          </p>
          <ul className="list-disc pl-6">
            <li className='my-4'>Finaliser le bouclage financier et partenarial de ce projet.</li>
            <li className='my-4'>Réaliser <span className="bg-yellow-300 p-1 inline">16 Podcasts</span> de Trajectoires de vies Inspirantes (4 par Thématique).</li>
            <li className='my-4'>Préparer les <span className="bg-yellow-300 p-1 inline">4 Plaidoyers</span> qui en rendront compte (1 par Thématique) tout en mobilisant nos partenaires pour mettre en oeuvre un Comité de Pilotage.</li>
            <li className='my-4'>Préparer l'évènement (un samedi de décembre 2024 ou de janvier 2025) qui présentera l'ensemble à l'occasion d'une Assemblée Citoyenne conçue pour susciter des débats.</li>
          </ul>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        {/* Title with horizontal line */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 whitespace-nowrap">
            PROJET 10
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent ml-8"></div>
        </div>
        <div>
          <div className="flex justify-end mb-5">
            <p className="text-[#ffd430] bg-[#fff6dc] font-semibold leading-relaxed px-8 py-2 text-lg max-w-4xl">
              PERSPECTIVE Printemps 2025
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Ce projet vise à préserver et valoriser la mémoire de Vaulx-en-Velin à travers les témoignages et analyses des habitants, souvent négligés par les institutions. Ils'agit de documenter l’histoire locale au plus près des citoyens, en dehors du prisme médiatique. Les matériaux visuels et sonores collectés servent à dresser des diagnostics tout en illustrant la solidarité et l'ingéniosité des générations de Vaudais. Grâce à des outils collaboratifs, ces archives seront structurées et mises en valeur via un plan de classement. <br />
            Ce Fonds Local, en constante évolution, référencera une multitude d’'histoires urbaines avec la participation essentielle des habitants. À l'automne 2024, un Comité de Pilotage sera mis en place et des experts consultés pour structurer ce projet, qui aboutira à une collection accessible en médiathèques et sur une plateforme numérique.
          </p>
        </div>
      </section>

    </div>
  );
};

export default PoleCitoyennete;