import React from 'react';
import { usePosts } from '../hooks/usePosts';

const Actualites: React.FC = () => {
  const { posts, isLoading, error } = usePosts();

  const mappedArticles = posts.map((post, index): any => ({
    id: index + 1,
    title: post.caption?.split('\n')[0] || 'Publication Instagram',
    excerpt: post.caption?.split('\n').slice(1).join(' ') || '',
    content: post.caption || '',
    thumbnail: post.thumbnail_url,
    publishDate: post.timestamp,
    image: post.media_url,
    linkedinUrl: post.permalink
  }));

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url('/actuality-hero.png')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Actualités</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Découvrez les dernières nouvelles et réalisations d'AVAS
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">Restez Informés</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8">
            Suivez l'actualité d'AVAS sur Instagram et découvrez nos dernières publications, événements et initiatives.
          </p>
        </div>

        {/* Loading or Error */}
        {isLoading ? (
          <p className="text-center text-gray-500">Chargement des publications...</p>
        ) : error ? (
          <p className="text-center text-red-500">Erreur : {error}</p>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {mappedArticles.map((article: any) => (
                <a
                  key={article.id}
                  href={article.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border-t-4 border-blue-500"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.thumbnail || article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Actualites;
