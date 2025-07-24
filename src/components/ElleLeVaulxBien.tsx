import React from 'react';
import { Target, Users, Globe, Heart, Scissors, ChefHat, Palette } from 'lucide-react';

const ElleLeVaulxBien: React.FC = () => {
    const objectives = [
        "Encourager la présence féminine dans les espaces publics",
        "Promouvoir l'équilibre des genres et la compréhension mutuelle",
        "Favoriser l'engagement des jeunes et le développement des compétences"
    ];

    const formations = [
        { name: "Coiffure", icon: Scissors, description: "Formation professionnelle en coiffure" },
        { name: "Couture", icon: Palette, description: "Apprentissage des techniques de couture" },
        { name: "Cuisine", icon: ChefHat, description: "Formation culinaire et nutrition" }
    ];

    const benefits = [
        "Apprendre à gérer des projets de solidarité",
        "Travailler en coopération avec des acteurs locaux et internationaux",
        "Acquérir des habitudes éco-responsables"
    ];

    return (
        <section>
            {/* Hero Section */}
            <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
                {/* Fixed Background Image */}
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
                    style={{ backgroundImage: `url('/contact-hero.png')` }}
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

                {/* Content */}
                <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <div className="mb-4 md:mb-6">
                        <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-300 rounded-full mr-2 md:mr-3"></div>
                            <span className="text-sm md:text-base font-medium">AVAS Elle le Vaulx Bien</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Elle le Vaulx Bien</h1>

                    <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                        Lancé en 2022 par AVAS, ce projet vise à soutenir les jeunes femmes dans les espaces publics
                        de Vaulx-en-Velin et à promouvoir leur épanouissement personnel et professionnel.
                    </p>
                </div>
            </div>

            {/* Section 2: Objectives */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#c088c6] mb-6 md:mb-8">OBJECTIFS 2024</h2>

                        <div className="space-y-4 md:space-y-6">
                            {objectives.map((objective, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                                        <span className="text-[#c088c6] font-bold text-sm md:text-base">{index + 1}</span>
                                    </div>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed pt-1 md:pt-2">
                                        {objective}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                alt="Groupe de jeunes"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Description & Impact */}
            <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                            Un Parcours de Développement Personnel
                        </h3>

                        <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                            <p>
                                Depuis novembre 2022, notre programme organise des sorties de groupe et des activités
                                de cohésion qui ont créé un véritable lien de confiance entre les participantes.
                                Ces moments partagés ont permis de construire une dynamique positive et d'encourager
                                l'expression personnelle de chaque jeune femme.
                            </p>

                            <p>
                                L'impact positif se ressent dans le développement de la confiance en soi, de la maturité
                                et de l'autonomie des participantes. Nous observons une progression remarquable dans leur
                                capacité à s'exprimer et à prendre des initiatives.
                            </p>

                            <p>
                                En 2023, nous avons franchi une nouvelle étape avec une présence plus active des jeunes
                                femmes dans les espaces publics et la création d'espaces mixtes sécurisés où elles peuvent
                                s'épanouir en toute confiance.
                            </p>
                        </div>
                        <div className='flex flex-column justify-between gap-5 mt-10'>
                            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Groupe de jeunes"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Groupe de jeunes"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Groupe de jeunes"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: 2024 Project Milestone */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <div className="bg-purple-100 text-purple-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                            AVAS Elle le Vaulx Bien
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                        Projet Solidaire 2024 : Maroc
                    </h3>

                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6 md:mb-8">
                        Les jeunes ont choisi de participer à un projet de solidarité au Maroc,
                        en soutenant le Centre de Protection de l'Enfance à Fès.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 border-l-4 border-purple-500">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                        Centre de Protection de l'Enfance - Fès
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <div>
                            <h5 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Population accueillie :</h5>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                                <li>• Filles âgées de 4 à 18 ans</li>
                                <li>• Souvent jeunes mères ou en situation de vulnérabilité</li>
                                <li>• Besoin d'accompagnement et de protection</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Besoins identifiés :</h5>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                                <li>• Produits d'hygiène de base</li>
                                <li>• Vêtements et équipements</li>
                                <li>• Matériel éducatif et formation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Vocational Training */}
            <div className="bg-purple-50 py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center bg-[#c088c6] text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
                            <span className="w-6 h-6 md:w-8 md:h-8 bg-white text-[#c088c6] rounded-full flex items-center justify-center text-sm md:text-base font-bold mr-2 md:mr-3">3</span>
                            <span className="font-medium text-sm md:text-base">Formations Professionnelles</span>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c088c6] mb-4 md:mb-6">
                            Accompagnement Professionnel
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
                        {formations.map((formation, index) => {
                            const IconComponent = formation.icon;
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#c088c6]" />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{formation.name}</h4>
                                    <p className="text-xs md:text-sm text-gray-600">{formation.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-purple-500">
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            La situation de la cuisine nécessite une attention particulière. AVAS prévoit d'apporter
                            son soutien à travers la fourniture de kits de formation, de vêtements professionnels,
                            de produits d'hygiène, et la participation à la rénovation des espaces de formation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 6: Benefits for Young Women */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Box - Pink background */}
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 md:p-8 shadow-lg">
                        <h4 className="text-lg md:text-xl font-bold text-purple-800 mb-4 md:mb-6">
                            Bénéfices pour les jeunes filles
                        </h4>

                        <div className="space-y-3 md:space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-sm md:text-base text-purple-800 leading-relaxed">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Box - White background */}
                    <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border-2 border-purple-200">
                        <h4 className="text-lg md:text-xl font-bold text-[#c088c6] mb-4 md:mb-6">
                            Initiative Locale : ProjCouture
                        </h4>

                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-start">
                                <Heart className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Enseigne la création de produits menstruels réutilisables
                                </p>
                            </div>

                            <div className="flex items-start">
                                <Globe className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Encourage l'économie circulaire et la réduction des déchets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 7: Common Vision & Final Message */}
            <div className="bg-[#c088c6] text-white py-8 md:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                        Vision Commune & Solidarité
                    </h3>

                    <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed">
                        <p>
                            Ce projet révèle les valeurs partagées entre les jeunes françaises et marocaines :
                            la responsabilité, l'action collective, la conscience locale et globale,
                            et les partenariats solidaires.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-6 md:my-8">
                            <div className="bg-white bg-opacity-20 rounded-lg p-3 md:p-4">
                                <p className="font-semibold text-sm md:text-base">Responsabilité</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-3 md:p-4">
                                <p className="font-semibold text-sm md:text-base">Actions Collectives</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-3 md:p-4">
                                <p className="font-semibold text-sm md:text-base">Conscience Globale</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-3 md:p-4">
                                <p className="font-semibold text-sm md:text-base">Solidarité</p>
                            </div>
                        </div>

                        <p className="text-base md:text-lg lg:text-xl font-medium">
                            Il ne s'agit pas seulement d'aide, mais d'initiatives durables partagées
                            qui renforcent les liens entre nos communautés.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElleLeVaulxBien;