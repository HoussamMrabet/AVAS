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
            description: "Formation aux normes de sécurité et qualité sur site",
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            title: "Posture Professionnelle",
            description: "Développement des compétences relationnelles et professionnelles",
            image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            title: "Communication Non-Violente (CNV)",
            description: "Techniques de communication et de résolution de conflits",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
    ];

    const missions = [
        {
            period: "Janvier - Juin 2024",
            title: "Médiation pour les travaux d'adduction d'eau",
            partner: "Projet TÉAT",
            description: "Accompagnement des travaux d'infrastructure hydraulique avec coordination entre les équipes techniques et les riverains.",
            image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            period: "Jusqu'en Juillet 2024",
            title: "Médiation pour COLAS",
            partner: "Coordination eau/gaz",
            description: "Médiation lors des travaux de coordination des réseaux d'eau et de gaz, assurant la sécurité et la communication avec les habitants.",
            image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
    ];

    const results2024 = [
        { icon: CheckCircle, number: "7", label: "embauches", color: "text-green-600" },
        { icon: Clock, number: "100+", label: "heures de formation", color: "text-green-600" },
        { icon: Wrench, number: "6000", label: "heures de travail", color: "text-purple-600" }
    ];

    const ramadanStats = [
        { number: "4000-6000", label: "visiteurs quotidiens" },
        { number: "317", label: "mètres d'étals" },
        { number: "70+", label: "commerçants" },
        { number: "30", label: "jours de consultation" }
    ];

    const mediationObjectives = [
        "Lutter contre la vente non réglementée",
        "Améliorer les relations commerçants-clients",
        "Créer un environnement public paisible",
        "Améliorer la logistique et l'accessibilité familiale"
    ];

    const partners = [
        { name: "Métropole Grand Lyon", logo: "/partners/partner1.png" },
        { name: "Ville de Vaulx-en-Velin", logo: "/partners/partner2.svg" },
        { name: "Keolis", logo: "/partners/partner3.png" }
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
                        Le Pôle Médiation d'AVAS aide les jeunes à intégrer le monde du travail en s'appuyant sur leur
                        connaissance locale du territoire. Nous proposons des actions de médiation structurées et
                        harmonieuses qui favorisent l'insertion professionnelle tout en répondant aux besoins du quartier.
                    </p>
                </div>
            </div>

            {/* Section 2: Recruitment & Training */}
            <div className="bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8 lg:mb-12">
                        LE RECRUTEMENT ET LA FORMATION
                    </h2>

                    <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
                        Notre programme de formation prépare les futurs médiateurs aux défis du terrain.
                        Chaque participant acquiert les compétences essentielles pour exercer efficacement
                        son rôle de médiateur urbain.
                    </p>

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
                                            alt={mission.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4 md:p-6 lg:p-8">
                                        <div className="bg-green-100 text-green-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 w-fit">
                                            {mission.period}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{mission.title}</h3>
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
                                AVAS organise régulièrement des forums de l'emploi en partenariat avec France Travail.
                                Ces événements créent des opportunités de rencontre directe entre employeurs et
                                demandeurs d'emploi du territoire.
                            </p>

                            <div className="bg-green-50 rounded-lg p-4 md:p-6 border-l-4 border-green-500">
                                <h4 className="text-lg md:text-xl font-bold text-green-900 mb-2 md:mb-3">Objectif</h4>
                                <p className="text-green-800 text-sm md:text-base">
                                    Rapprocher les employeurs et les chercheurs d'emploi pour favoriser
                                    l'insertion professionnelle locale.
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
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-800 mb-2 md:mb-3">
                                        {result.number}
                                    </div>
                                    <p className="text-teal-700 font-medium text-sm md:text-base">{result.label}</p>
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

                    <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
                        Chaque année, AVAS assure la médiation lors du marché du Ramadan, un événement culturel
                        et commercial majeur qui attire des milliers de visiteurs. Notre équipe veille au bon
                        déroulement de cet événement emblématique.
                    </p>

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                                alt="Marché du Ramadan"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                                alt="Visiteurs du marché"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                                alt="Étals du marché"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
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
                                <p className="text-sm md:text-base text-gray-800">{objective}</p>
                            </div>
                        ))}
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