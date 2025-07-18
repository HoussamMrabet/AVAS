import React, { useState } from 'react';
import { Calendar, User, Eye, Share2, Heart, MessageCircle, ExternalLink } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  image: string;
  linkedinUrl: string;
}

const Actualites: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const articles: Article[] = [
    {
      id: 1,
      title: "Lancement du nouveau programme de médiation urbaine à Vaulx-en-Velin",
      excerpt: "AVAS inaugure son programme innovant de médiation urbaine pour renforcer la cohésion sociale dans les quartiers.",
      content: "Après plusieurs mois de préparation, l'Association Vaux Ambitions (AVAS) lance officiellement son nouveau programme de médiation urbaine. Cette initiative vise à créer des ponts entre les différentes communautés de Vaulx-en-Velin et à prévenir les conflits de voisinage. Notre équipe de médiateurs formés intervient désormais quotidiennement sur le terrain pour accompagner les habitants dans la résolution de leurs différends. Ce programme s'inscrit dans notre mission de renforcement du vivre-ensemble et de la cohésion sociale.",
      author: "Abdallah Slimani",
      authorAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      publishDate: "2024-01-15",
      readTime: "3 min",
      views: 1250,
      likes: 89,
      comments: 23,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com/posts/avas-mediation"
    },
    {
      id: 2,
      title: "Formation professionnelle : 50 jeunes diplômés de notre programme",
      excerpt: "Une nouvelle promotion de jeunes vient de terminer avec succès notre programme de formation aux métiers du numérique.",
      content: "C'est avec une grande fierté que nous célébrons la réussite de 50 jeunes de Vaulx-en-Velin qui viennent de terminer notre programme de formation aux métiers du numérique. Pendant 6 mois, ils ont acquis des compétences en développement web, design graphique et marketing digital. 85% d'entre eux ont déjà trouvé un emploi ou créé leur propre entreprise. Cette réussite témoigne de l'efficacité de notre approche pédagogique adaptée aux réalités du marché du travail.",
      author: "Naila Nouri",
      authorAvatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      publishDate: "2024-01-10",
      readTime: "4 min",
      views: 2100,
      likes: 156,
      comments: 45,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com/posts/avas-formation"
    },
    {
      id: 3,
      title: "Partenariat avec la Métropole de Lyon pour le développement durable",
      excerpt: "AVAS signe un accord de partenariat stratégique avec la Métropole de Lyon pour des projets environnementaux.",
      content: "L'Association Vaux Ambitions (AVAS) vient de signer un partenariat stratégique avec la Métropole de Lyon dans le cadre de sa politique de développement durable. Ce partenariat permettra de financer plusieurs projets écologiques dans notre quartier, notamment la création d'un jardin communautaire, l'installation de panneaux solaires sur nos locaux, et la mise en place d'ateliers de sensibilisation à l'écologie. Cette collaboration s'inscrit dans notre vision d'un développement local respectueux de l'environnement.",
      author: "Ahmed Khoury",
      authorAvatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      publishDate: "2024-01-08",
      readTime: "5 min",
      views: 1800,
      likes: 134,
      comments: 67,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com/posts/avas-partenariat"
    },
    {
      id: 4,
      title: "Journée portes ouvertes : plus de 300 visiteurs découvrent nos actions",
      excerpt: "Notre journée portes ouvertes annuelle a attiré de nombreux habitants curieux de découvrir nos activités.",
      content: "La journée portes ouvertes d'AVAS a été un franc succès avec plus de 300 visiteurs venus découvrir nos locaux et nos activités. Familles, jeunes, partenaires et élus locaux ont pu échanger avec nos équipes et participer à des ateliers de démonstration. Cette journée a permis de présenter concrètement l'impact de nos trois pôles d'activité et de recruter de nouveaux bénévoles. L'enthousiasme des visiteurs confirme l'importance de notre mission dans le quartier.",
      author: "Fatima Ouali",
      authorAvatar: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      publishDate: "2024-01-05",
      readTime: "3 min",
      views: 950,
      likes: 78,
      comments: 34,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com/posts/avas-portes-ouvertes"
    },
    {
      id: 5,
      title: "Nouveau local pour le pôle jeunesse : un espace moderne et accueillant",
      excerpt: "AVAS inaugure ses nouveaux locaux dédiés aux activités jeunesse avec des équipements de pointe.",
      content: "Après des mois de travaux, nous sommes fiers d'inaugurer notre nouveau local dédié au pôle jeunesse. Cet espace de 200m² entièrement rénové dispose d'une salle informatique équipée de 20 postes, d'un studio d'enregistrement, d'une salle de réunion modulable et d'un espace détente. Ces nouveaux locaux vont permettre d'accueillir davantage de jeunes et de diversifier nos activités. L'aménagement a été pensé avec les jeunes pour créer un lieu qui leur ressemble.",
      author: "Karim Benali",
      authorAvatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      publishDate: "2024-01-03",
      readTime: "4 min",
      views: 1650,
      likes: 112,
      comments: 28,
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com/posts/avas-nouveau-local"
    },
    {
      id: 6,
      title: "Bilan 2023 : une année de croissance et d'impact social",
      excerpt: "Retour sur une année exceptionnelle marquée par de nombreuses réalisations et une croissance significative.",
      content: "L'année 2023 restera marquée comme une année charnière pour AVAS. Nous avons accompagné plus de 500 personnes, organisé 45 événements, formé 120 jeunes et créé 15 nouveaux partenariats. Notre budget a augmenté de 40% grâce à la confiance renouvelée de nos financeurs. Cette croissance s'accompagne d'une professionnalisation de nos équipes avec le recrutement de 3 nouveaux salariés. Ces résultats témoignent de la pertinence de notre approche et de l'engagement sans faille de nos équipes.",
      author: "Samira Hadj",
      authorAvatar: "https://images.pexels.com/photos/3763189/pexels-photo-3763189.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      publishDate: "2023-12-28",
      readTime: "6 min",
      views: 2800,
      likes: 203,
      comments: 89,
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com/posts/avas-bilan-2023"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        {/* Fixed Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/actuality-hero.png')` }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Actualités</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Découvrez les dernières nouvelles et réalisations d'AVAS
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">Restez Informés</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8">
            Suivez l'actualité d'AVAS et découvrez nos dernières réalisations, partenariats et événements.
            Nos articles, initialement publiés sur LinkedIn, vous permettent de rester connectés avec
            notre communauté et de suivre l'évolution de nos projets en temps réel.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            De la médiation urbaine aux formations professionnelles, en passant par nos événements
            communautaires, chaque article témoigne de notre engagement quotidien pour le développement
            de Vaulx-en-Velin.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border-t-4 border-blue-500"
            >
              {/* Article Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-4 md:p-6">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center mb-3 md:mb-4">
                  <img
                    src={article.authorAvatar}
                    alt={article.author}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2 md:mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-medium text-gray-900">{article.author}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={10} className="md:w-3 md:h-3 mr-1" />
                      <span>{formatDate(article.publishDate)}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 md:pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="flex items-center">
                      <Eye size={10} className="md:w-3 md:h-3 mr-1" />
                      <span>{formatNumber(article.views)}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart size={10} className="md:w-3 md:h-3 mr-1" />
                      <span>{article.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={10} className="md:w-3 md:h-3 mr-1" />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                      <Share2 size={10} className="md:w-3 md:h-3" />
                    </button>
                    <a
                      href={article.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={14} className="md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium text-sm md:text-base">
            Charger Plus d'Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Actualites;