import React, { useState } from 'react';
import { Package, Calendar, MapPin, Eye, Download, Filter } from 'lucide-react';

interface Order {
  id: string;
  poleName: string;
  type: string;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  location: string;
  description: string;
  participants?: number;
}

const Orders: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const orders: Order[] = [
    {
      id: 'ORD-2024-001',
      poleName: 'Pôle Jeunesse',
      type: 'Formation',
      date: '2024-01-15',
      status: 'completed',
      location: 'Centre AVAS',
      description: 'Formation aux métiers du numérique - Développement web',
      participants: 25
    },
    {
      id: 'ORD-2024-002',
      poleName: 'Pôle Médiation',
      type: 'Mission',
      date: '2024-01-20',
      status: 'completed',
      location: 'Mas du Taureau',
      description: 'Médiation urbaine - Travaux TÉAT',
      participants: 8
    },
    {
      id: 'ORD-2024-003',
      poleName: 'Elle le Vaulx Bien',
      type: 'Atelier',
      date: '2024-02-05',
      status: 'pending',
      location: 'Local associatif',
      description: 'Atelier couture - Produits menstruels réutilisables',
      participants: 15
    },
    {
      id: 'ORD-2024-004',
      poleName: 'Pôle Jeunesse',
      type: 'Événement',
      date: '2024-02-10',
      status: 'pending',
      location: 'Parc de la Feyssine',
      description: 'Sortie nature - Activités de plein air',
      participants: 40
    },
    {
      id: 'ORD-2024-005',
      poleName: 'Pôle Médiation',
      type: 'Formation',
      date: '2024-01-08',
      status: 'cancelled',
      location: 'Centre AVAS',
      description: 'Formation QSE - Annulée pour cause météo',
      participants: 12
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'pending':
        return 'En cours';
      case 'cancelled':
        return 'Annulé';
      default:
        return 'Inconnu';
    }
  };

  const getPoleColor = (poleName: string) => {
    switch (poleName) {
      case 'Pôle Jeunesse':
        return 'border-l-blue-500';
      case 'Pôle Médiation':
        return 'border-l-green-500';
      case 'Elle le Vaulx Bien':
        return 'border-l-purple-500';
      default:
        return 'border-l-gray-500';
    }
  };

  const filteredOrders = selectedFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedFilter);

  const filters = [
    { id: 'all', label: 'Toutes', count: orders.length },
    { id: 'completed', label: 'Terminées', count: orders.filter(o => o.status === 'completed').length },
    { id: 'pending', label: 'En cours', count: orders.filter(o => o.status === 'pending').length },
    { id: 'cancelled', label: 'Annulées', count: orders.filter(o => o.status === 'cancelled').length }
  ];

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Mes Commandes</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Suivez vos participations aux activités des pôles AVAS
          </p>
        </div>
      </div>

      {/* Orders Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filtrer par statut</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4 md:space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune commande trouvée</h3>
              <p className="text-gray-600">Aucune commande ne correspond aux critères sélectionnés.</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className={`bg-white rounded-lg shadow-lg border-l-4 ${getPoleColor(order.poleName)} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="p-4 md:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {order.id}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>

                      <div className="space-y-2 text-sm md:text-base">
                        <div className="flex items-center text-gray-600">
                          <Package className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="font-medium text-purple-600">{order.poleName}</span>
                          <span className="mx-2">•</span>
                          <span>{order.type}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{new Date(order.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{order.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mt-3 text-sm md:text-base">
                        {order.description}
                      </p>

                      {order.participants && (
                        <div className="mt-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {order.participants} participants
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:flex-col lg:w-32">
                      <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                        <Eye size={16} />
                        <span>Voir</span>
                      </button>
                      
                      {order.status === 'completed' && (
                        <button className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm">
                          <Download size={16} />
                          <span>Certificat</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 md:mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Résumé de vos activités</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {orders.filter(o => o.status === 'completed').length}
              </div>
              <p className="text-sm md:text-base text-gray-600">Activités terminées</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">
                {orders.filter(o => o.status === 'pending').length}
              </div>
              <p className="text-sm md:text-base text-gray-600">En cours</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
                {orders.reduce((sum, order) => sum + (order.participants || 0), 0)}
              </div>
              <p className="text-sm md:text-base text-gray-600">Total participants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;