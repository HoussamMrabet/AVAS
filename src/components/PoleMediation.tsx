import React from 'react';
import { ArrowRight, Users, Shield, MessageCircle, CheckCircle, Clock, Wrench, Target, Building2, Handshake } from 'lucide-react';

const PoleMediation: React.FC = () => {
    const processSteps = [
        { title: "FORMATION", icon: Users, description: "Formation des futurs médiateurs" },
        { title: "MÉDIATION", icon: Shield, description: "Actions de médiation sur le terrain" },
        { title: "INSERTION", icon: Target, description: "Insertion professionnelle des participants" }
    ];

    const trainingSkills = [
        {
            title: "Qualité, Sécurité, Environnement (QSE)",
            description: "POSTURE PROFESSIONNELLE",
            image: "/mediation1.png"
        },
        {
            title: "Posture Professionnelle",
            description: "CNV",
            image: "/mediation2.png"
        },
        {
            title: "Communication Non-Violente (CNV)",
            description: "QSE",
            image: "/mediation3.png"
        }
    ];

    const missions = [
        {
            period: "Janvier - Juin 2024",
            partner: "PETAVIT",
            description: "Nous avons assuré, pour l'entreprise PETAVIT, l'entretien et le gardiennage quotidien de leur base vie et de la zone de leur chantier à Vaulx-en-Velin, qui a pour objectif le dévoiement des canalisations d'eau pour préparer la venue du T9.",
            image: "/mediation-mission1.jpeg"
        },
        {
            period: "Jusqu'en Juillet 2024",
            partner: "COLAS",
            description: "Nous assurons, pour l'entreprise COLAS, l'entretien du gardiennage quotidien de leur base vie et de la zone de leur chantier à Vaulx-en-Velin. De plus, nous avons mis en place un poste de médiation riverain qui assure en amont la prévention au sein de l'écosystème entourant les sites en questions, en établissant un dialogue avec tous les acteurs du quartier, des jeunes en difficulté aux habitants lambda. Il facilite la communication entre les différents acteurs",
            image: "/mediation-mission2.jpeg"
        }
    ];

    const results2024 = [
        { icon: CheckCircle, number: "7", label: "embauches", description: "en parcours d'insertion dont 2 dans des prestations intellectuelles, démontrant notre capacité à accompagner vers des métiers diversifiés.", color: "text-green-600" },
        { icon: Clock, number: "100+", label: "heures de formation", description: "dispensées pour développer les compétences des bénéficiaires.", color: "text-green-600" },
        { icon: Wrench, number: "6000", label: "heures de travail", description: "en insertion qui repésentent une véritable opportunité pour les personnes accompagnées de renouer avec le monde professionnel.", color: "text-purple-600" }
    ];

    const ramadanStats = [
        { number: "4000-6000", label: "visiteurs quotidiens" },
        { number: "317", label: "mètres linéaires d'exposition" },
        { number: "70+", label: "forains" },
        { number: "30", label: "jours consécutifs" }
    ];

    const mediationObjectives = [
        {title: "Éradiquer la vente informelle et anarchique sur le Mas du Taureau", description: "Mettre en place des mesures strictes pour réguler les ventes et garantir le respect des règles commerciales."},
        {title: "Instaurer un environnement sécurisé et structuré", description: "Développer un cadre sécuritaire avec une équipe de médiateurs pour assurer la tranquillité des visiteurs et des commerçants. Aménager l'espace de manière à faciliter la circulation et l'accès aux différents stands."},
        {title: "Accroître la fréquentation en attirant un public familial", description: "Promouvoir une atmosphère conviviale et chaleureuse propice à la découverte et à la convivialité afin d'encourager une fréquentation plus diverse et inclusive."},
    ];

    const partners = [
        { name: "Métropole Grand Lyon", logo: "/partners/partner1.png" },
        { name: "Ville de Vaulx-en-Velin", logo: "/partners/partner2.svg" },
        { name: "Keolis", logo: "/partners/keolis.png" }
    ];

    const partners2 = [
        { name: "France travail", logo: "/partners/partner6.svg" },
        { name: "Ville de Vaulx-en-Velin", logo: "/partners/partner2.svg" },
        { name: "Maison de l'insertion et de l'emploi", logo: "/partners/partner5.jpg" }
    ];

    return (
        <section>
            {/* Section 1: Page Title + Overview */}
            <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
                {/* Fixed Background Image */}
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
                    style={{ backgroundImage: `url('/mediation-hero.jpg')` }}
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

                {/* Content */}
                <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">LE PÔLE MÉDIATION</h1>
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                        Accompagner l'insertion professionnelle par la médiation urbaine
                    </p>
                </div>
            </div>

            {/* Process Diagram */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
                    {processSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <React.Fragment key={index}>
                                <div className="text-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 max-w-32 md:max-w-40">{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Mission Description */}
                <div className="bg-gray-50 rounded-lg p-6 md:p-8 lg:p-10">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                        La Médiation Urbaine de l'association AVAS vise à se positionner comme un levier
                        d'insertion professionnelle et de formation pour les jeunes du quartier, capitalisant sur
                        leur connaissance intime du territoire et de ses habitants.
                        <br /><br />
                        Notre connaissance approfondie du terrain nous permet de mettre en place des postes
                        de référents riverains, assurant ainsi une communication fluide entre les différents
                        acteurs impliqués dans les chantiers.
                        <br /><br />
                        Au-delà de la simple sécurisation, notre action de Médiation Urbaine s'inscrit dans une
                        démarche globale visant à répondre aux besoins et préoccupations quotidiennes des
                        habitants, assurant ainsi un cadre de vie harmonieux.
                    </p>
                </div>
            </div>

            {/* Section 2: Recruitment & Training */}
            <div className="bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8 lg:mb-12">
                        LE RECRUTEMENT ET LA FORMATION
                    </h2>

                    <div className="text-left text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 flex flex-col lg:flex-row gap-6">
                        {/* text side */}
                        <div className="flex-1">
                            <p className="mb-2">
                                Les jeunes que nous recrutons répondent à deux critères :
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>« se conforme aux critères d'insertion présents dans les clauses sociales »</li>
                                <li>« Démontrer une volonté d'engagement »</li>
                            </ul>
                            <p>
                                Pour soutenir ces jeunes, nous proposons des formations JCDecaux continues tout au long de l'année, telles que :
                            </p>
                        </div>

                        {/* image side */}
                        <div className="w-full lg:w-1/3 flex-shrink-0">
                            <img
                                src="/mediation-partners.png"
                                alt="partners"
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {trainingSkills.map((skill, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={skill.image}
                                        alt={skill.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{skill.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 3: Urban Mediation Missions */}
            <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        MISSIONS DE MÉDIATION URBAINE
                    </h2>

                    <div className="space-y-6 md:space-y-8 lg:space-y-12">
                        {missions.map((mission, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="aspect-video lg:aspect-square overflow-hidden">
                                        <img
                                            src={mission.image}
                                            alt={mission.partner}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4 md:p-6 lg:p-8">
                                        <div className="bg-green-100 text-green-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 w-fit">
                                            {mission.period}
                                        </div>
                                        <p className="text-green-600 font-semibold mb-3 md:mb-4 text-sm md:text-base">{mission.partner}</p>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{mission.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 4: Employment Events */}
            <div className="bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        LES RENDEZ-VOUS DE L'EMPLOI
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                        <div>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                                Nous avons initié l'organisation d’un événement majeur, les
                                Rendez-vous de l’Emploi, en collaboration avec France
                                Travail , la MMIE et la ville de Vaulx-en-Velin.
                                Cet événement vise à rassembler employeurs, organismes de formation et candidats autour d'un même objectif :
                            </p>

                            <div className="bg-green-50 rounded-lg p-4 md:p-6 border-l-4 border-green-500">
                                <h4 className="text-lg md:text-xl font-bold text-green-900 mb-2 md:mb-3">Objectif</h4>
                                <p className="text-green-800 text-sm md:text-base">
                                    créer des opportunités concrètes d'insertion et d'emploi, tout en
                                    répondant aux besoins spécifiques de notre territoire.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 md:p-8 text-center">
                            <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                                    Rendez-vous de l'emploi
                                </h3>
                                <p className="text-green-600 font-semibold text-sm md:text-base mb-3 md:mb-4">
                                    Mas du Taureau
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                                    <span className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                                        France Travail
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                                        Ville de Vaulx-en-Velin
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src="/mediation-rendez.png" alt="" className="mt-6 md:mt-8 lg:mt-12 w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                </div>
            </div>

            <div className="bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        NOS PARTENAIRES
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
                        {partners2.map((partner, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 text-center font-medium">{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 5: Concrete Results 2024 */}
            <div className="bg-teal-50 py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        NOS RÉSULTATS CONCRETS EN 2024
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {results2024.map((result, index) => {
                            const IconComponent = result.icon;
                            return (
                                <div key={index} className="bg-teal-100 rounded-lg p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${result.color}`} />
                                    </div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-800 mb-2 md:mb-3">
                                        {result.number} {result.label}
                                    </div>
                                    <p className="text-teal-700 font-medium text-sm md:text-base">{result.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Section 6: Ramadan Market Mediation */}
            <div className="bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        LE MARCHÉ DU RAMADAN DE VAULX-EN-VELIN
                    </h2>

                    <div className='flex items-center justify-between mb-8 md:mb-12 gap-20'>
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 text-left leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
                            Depuis plus de deux décennies, le quartier du Grand Mas accueille
                            le marché du Ramadan de Vaulx-en-Velin. Ce marché a subi de
                            nombreuses évolutions au fil des années, devenant un événement
                            essentiel dans la vie des habitants de Vaulx-en-Velin et de la
                            métropole, qui ne pourraient envisager cette période sans lui.
                            <br /><br />
                            Avec le soutien de la mairie et de la métropole, l'association AVAS
                            organise, gére et sécurise, depuis trois ans, le plus grand marché
                            du Ramadan de la région Auvergne-Rhône-Alpes, avec cette
                            année une hausse de fréquentation, attirant quotidiennement entre
                            4 000 et 6 000 visiteurs.
                        </p>
                        <img src="/ramadan.jpeg" alt="ramadan" className="w-96 h-auto rounded-lg shadow-lg mb-6 md:mb-8 lg:mb-12 hover:scale-105 transition-transform duration-300" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                        {ramadanStats.map((stat, index) => (
                            <div key={index} className="text-center bg-gray-50 rounded-lg p-4 md:p-6">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 7: Objectives of Mediation */}
            <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        OBJECTIFS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {mediationObjectives.map((objective, index) => (
                            <div key={index} className="flex items-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                                    <span className="text-green-600 font-bold text-sm md:text-base">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base text-gray-800">{objective.title}</h3>
                                    <p className="ml-2 text-xs md:text-sm text-gray-600 hidden md:block">{objective.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-12">
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/mediation-obj1.jpeg"
                                alt="Marché du Ramadan"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/mediation-obj2.jpeg"
                                alt="Visiteurs du marché"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/mediation-obj3.jpeg"
                                alt="Étals du marché"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 8: Partners */}
            <div className="bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        NOS PARTENAIRES
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
                        {partners.map((partner, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-3 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 text-center font-medium">{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PoleMediation;