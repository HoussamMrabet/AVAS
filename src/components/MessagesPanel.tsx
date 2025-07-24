import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Mail, 
  MailOpen, 
  Eye, 
  X, 
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
  Circle,
  Trash2
} from 'lucide-react';
import { useMessages, Message } from '../hooks/useMessages';

const MessagesPanel: React.FC = () => {
  const { 
    messages, 
    loading, 
    error, 
    getAllMessages, 
    markAsRead, 
    markAsUnread, 
    deleteMessage 
  } = useMessages();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [filteredMessages, setFiltredMessages] = useState<Message[]>([]);

  useEffect(() => {
    const filters = messages.filter(message => {
      // Search filter
      const searchMatch = searchTerm === '' || 
        message.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.content.toLowerCase().includes(searchTerm.toLowerCase());
  
      // Status filter
      const statusMatch = filterStatus === 'all' || 
        (filterStatus === 'read' && message.isRead == "true") ||
        (filterStatus === 'unread' && message.isRead == "false");
  
      return searchMatch && statusMatch;
    });

    setFiltredMessages(filters);
  }, [messages, searchTerm, filterStatus])
  // Filter and search messages

  const handleMessageClick = async (message: Message) => {
    await markAsRead(message._id, message);
    setSelectedMessage(message);
    setShowPreviewModal(true);
  };

  const handleToggleReadStatus = async (message: Message, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal
    
    if (!message._id) return;
    
    setIsUpdating(message._id);
    try {
      if (message.isRead == "true") {
        await markAsUnread(message._id, message);
      } else {
        await markAsRead(message._id, message);
      }
    } catch (err) {
      console.error('Error updating message status:', err);
    } finally {
      setIsUpdating(null);
    }
  };

  const handleDeleteMessage = async (messageId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal
    
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      try {
        await deleteMessage(messageId);
      } catch (err) {
        console.error('Error deleting message:', err);
        alert('Erreur lors de la suppression du message');
      }
    }
  };

  const closeModal = () => {
    setShowPreviewModal(false);
    setSelectedMessage(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusCounts = () => {
    const total = messages.length;
    const unread = messages.filter(m => m.isRead == "false").length;
    const read = messages.filter(m => m.isRead == "true").length;
    return { total, read, unread };
  };

  const statusCounts = getStatusCounts();

  if (loading && messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={getAllMessages}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg w-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <p className="text-sm text-gray-600 mt-1">
              {statusCounts.total} message{statusCounts.total !== 1 ? 's' : ''} au total
            </p>
          </div>
          
          {/* Status Summary */}
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">{statusCounts.unread} non lu{statusCounts.unread !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">{statusCounts.read} lu{statusCounts.read !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher par nom, email, sujet ou contenu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'all' | 'read' | 'unread')}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="all">Tous les messages</option>
              <option value="unread">Non lus</option>
              <option value="read">Lus</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="max-h-96 overflow-y-auto">
        {filteredMessages.length === 0 ? (
          <div className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm || filterStatus !== 'all' ? 'Aucun message trouvé' : 'Aucun message'}
            </h3>
            <p className="text-gray-600">
              {searchTerm || filterStatus !== 'all' 
                ? 'Essayez de modifier vos critères de recherche ou de filtrage.'
                : 'Les nouveaux messages apparaîtront ici.'
              }
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredMessages.map((message, index) => (
              <div
                key={index}
                onClick={() => handleMessageClick(message)}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
                  message.isRead == "false" ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                      {message.isRead == "false" ? (
                        <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      ) : (
                        <MailOpen className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                      <h4 className={`font-medium truncate ${message.isRead == "false" ? 'text-gray-900' : 'text-gray-700'}`}>
                        {message.fullName}
                      </h4>
                      <span className="text-sm text-gray-500 flex-shrink-0">
                        {message.email}
                      </span>
                    </div>

                    {/* Subject */}
                    <h5 className={`font-medium mb-1 truncate ${message.isRead == "false" ? 'text-gray-900' : 'text-gray-700'}`}>
                      {message.subject}
                    </h5>

                    {/* Content Preview */}
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {message.content}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {message.createdAt && formatDate(message.createdAt)}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => handleToggleReadStatus(message, e)}
                      disabled={isUpdating === message._id}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 disabled:opacity-50"
                      title={message.isRead == "true" ? 'Marquer comme non lu' : 'Marquer comme lu'}
                    >
                      {isUpdating === message._id ? (
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : message.isRead == "true" ? (
                        <Circle className="w-4 h-4" />
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={(e) => message._id && handleDeleteMessage(message._id, e)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                      title="Supprimer le message"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleMessageClick(message)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      title="Voir le message"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {showPreviewModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {selectedMessage.isRead == "false" ? (
                    <Mail className="w-6 h-6 text-blue-600" />
                  ) : (
                    <MailOpen className="w-6 h-6 text-gray-400" />
                  )}
                  <h3 className="text-xl font-bold text-gray-900">Message</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Message Details */}
              <div className="space-y-6">
                {/* Sender Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">{selectedMessage.fullName}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a 
                          href={`mailto:${selectedMessage.email}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          {selectedMessage.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {selectedMessage.subject}
                  </h4>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.content}
                    </p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Date de réception
                      </label>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {selectedMessage.createdAt && formatDate(selectedMessage.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    <Mail size={16} />
                    <span>Répondre</span>
                  </a>
                  
                  <button
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesPanel;

export { MessagesPanel }