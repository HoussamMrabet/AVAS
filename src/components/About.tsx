import React from 'react';

const About: React.FC = () => {
    return (
        <section className='-mx-4 md:-mx-8 lg:-mx-12 xl:-mx-20'>
            {/* Background Section with Intro */}
            <div
                className="w-full bg-[url('/background-about.png')] h-[400px] md:h-[600px] lg:h-[700px] min-h-[400px] bg-contain bg-no-repeat bg-center py-8 md:py-16"
            >
                <div className='bg-white h-full flex items-center'>
                    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-10 text-black text-left">
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium">
                            <strong>L’Association Vaux Ambitions (AVAS)</strong> est née en 2018 de
                            l'initiative d’un groupe de jeunes profondément attachés à leur
                            quartier et déterminés à en améliorer le quotidien. Face aux
                            défis socio-économiques qui marquent leur environnement, ils ont
                            rêvé d'une structure capable de fournir aux habitants de Vaulx-
                            en-Velin, et plus particulièrement aux jeunes, les moyens de
                            s'épanouir et de réussir.
                            <br />
                            <span className='mt-4 md:mt-6 lg:mt-10 block'>
                                Depuis ses débuts, AVAS a su évoluer, s'affirmer et devenir un
                                acteur incontournable à Vaulx-en-Velin. Fondée sur les valeurs de
                                solidarité, d'engagement citoyen et de coopération, L'association
                                œuvre chaque jour à renforcer le tissu social du quartier et à
                                ouvrir de nouvelles perspectives pour ses habitants.
                                Afin de mener à bien l'ensemble de nos projets, nous avons
                                structuré l’association autour de trois pôles majeurs.
                            </span>
                            {/* Truncated for brevity – paste the full paragraph from image if needed */}
                        </p>
                    </div>
                </div>
            </div>

            {/* Poles Section */}
            <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
                <div className="border-2 border-blue-400 p-4 md:p-6 rounded-lg">
                    <img src="/jeunesse.png" alt="Pôle Jeunesse" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
                    <h4 className="font-bold text-blue-600 mb-2 text-sm md:text-base">Pôle Jeunesse</h4>
                    <p className="text-xs md:text-sm">Concevoir & piloter des projets d'animations éducatives avec la jeunesse "invisible"</p>
                    <p className="mt-2 text-xs text-gray-500">Depuis 2018</p>
                </div>
                <div className="border-2 border-green-400 p-4 md:p-6 rounded-lg">
                    <img src="/emploi.png" alt="Pôle Emploi" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
                    <h4 className="font-bold text-green-600 mb-2 text-sm md:text-base">Pôle Médiation Urbaine</h4>
                    <p className="text-xs md:text-sm">Mettre en œuvre des méthodes d'anticipation et de gestion des conflits avec nos équipes de médiation.</p>
                    <p className="mt-2 text-xs text-gray-500">Depuis 2022</p>
                </div>
                <div className="border-2 border-yellow-400 p-4 md:p-6 rounded-lg">
                    <img src="/citoyennete.png" alt="Pôle Citoyenneté" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
                    <h4 className="font-bold text-yellow-600 mb-2 text-sm md:text-base">Pôle Citoyenneté</h4>
                    <p className="text-xs md:text-sm">Développer le pouvoir d'agir des vaudais au travers de projets collaboratifs.</p>
                    <p className="mt-2 text-xs text-gray-500">Depuis 2023</p>
                </div>
            </div>

            {/* Président Section */}
            <div className="max-w-6xl mx-auto px-4 mt-12 md:mt-16 lg:mt-20">
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Le mot du Président</h2>
                <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-4 md:mb-6">Abdallah Slimani</h3>
                <div className="flex flex-col md:flex-row items-end gap-6 md:gap-8">
                    <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <strong>« Seul, on va plus vite; ensemble, on va plus loin » — proverbe africain.</strong>
                        </p>
                        <p>
                            Depuis sa création en 2018 l'association avas a toujours eu pour mission de répondre au besoins de notre ville Vaulx-enVelin.A ses débuts, Avas est née de la détermination d'un groupe de jeunes du quartier du mas du taureau desireux d'accompagner leurs voisins, amis et les habitants de la ville. Ensemble nous avons commence avec un objectif simple mais puissant offrir une alternative positive a nos jeunes , renforcer leur confiance en eux et leur donner les moyen de devenir acteurs de leur propre vie.
                        </p>
                        <p>
                            Aujourd’hui, après plusieurs années d'actions, notre association a grandi, tout comme nos ambitions. Nous avons structuré nos activités en trois pôles majeurs : Jeunesse, Citoyenneté et Médiation Urbaine. Cette évolution témoigne de notre engagement à accompagner non seulement la jeunesse, mais aussi l'ensemble des habitants dans la transformation positive de notre ville. Pour l'avenir, nous restons portés par I'espoir et des projets ambitieux. Nous continuerons à être une force motrice pour l’implication citoyenne, à renforcer notre action auprès des jeunes et à tisser des liens toujours plus forts avec nos partenaires. Je tiens à exprimer ma profonde gratitude envers les membres du bureau, les salariés de l'association, nos bénévoles dévoués, ainsi que nos partenaires associatifs, institutionnels et entreprises. Votre engagement et votre soutien indéfectible ont permis à AVAS de réaliser ses missions et d'atteindre de nouveaux sommets. Ensemble, nous continuerons à aller plus loin.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/president.png"
                            alt="Président"
                            className="rounded-lg object-cover w-full max-w-xs md:max-w-sm"
                        />
                    </div>
                </div>
            </div>

            {/* 2024 en chiffres */}
            <div className="max-w-6xl mx-auto px-4 mt-12 md:mt-16 lg:mt-20">
                <h2 className="text-center text-xl md:text-2xl font-bold mb-6 md:mb-10">2024 EN CHIFFRES</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 text-white">
                    <div className="bg-blue-600 w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center px-3 md:px-4 text-xs md:text-sm">
                        <div>
                            <p>10 collaborateurs</p>
                            <p>8 ETP</p>
                            <p>Équipe mixte</p>
                            <p>50% femmes</p>
                            <p>50% hommes</p>
                        </div>
                    </div>
                    <div className="bg-red-400 md:-mx-5 w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center px-3 md:px-4 text-xs md:text-sm">
                        <div>
                            <p>+200 familles adhérentes</p>
                            <p>+60 bénévoles actifs</p>
                            <p>3 pôles structurants</p>
                        </div>
                    </div>
                    <div className="bg-yellow-400 text-black w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-center px-3 md:px-4 text-xs md:text-sm">
                        <div>
                            <p>Équipe d’administrateurs</p>
                            <p>intergénérationnelle</p>
                            <p>6 membres du bureau</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom badges */}
            <div className="max-w-4xl mx-auto px-4 mt-4 md:mt-5 mb-12 md:mb-20 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-white text-xs md:text-sm">
                <div className="bg-[#89CEC1] px-6 md:px-12 py-4 md:py-6 rounded-full md:rounded-l-full text-center w-fit">
                    + de 20 projets menés
                </div>
                <div className="bg-[#89CEC1] px-6 md:px-12 py-4 md:py-6 rounded-full md:rounded-r-full text-center w-fit">
                    + de 200 000€ de budget annuel
                </div>
            </div>
        </section>
    );
};

export default About;
