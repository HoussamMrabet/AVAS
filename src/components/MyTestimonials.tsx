import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, X, Save, MessageSquare, Star } from 'lucide-react';
import { useTestimonials, TestimonialFormData, Testimonial } from '../hooks/useTestimonials';
import { useAuth } from '../hooks/useAuth';

const MyTestimonials: React.FC = () => {
  const { 
    getTestimonialsByUserId, 
    addTestimonial, 
    updateTestimonial, 
    deleteTestimonial,
    loading,
    error 
  } = useTestimonials();
  const { getCurrentUser } = useAuth();
  const currentUser = getCurrentUser();

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [previewTestimonial, setPreviewTestimonial] = useState<Testimonial | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  const [formData, setFormData] = useState<TestimonialFormData>({
    comment: '',
    author: currentUser?.name || '',
    position: '',
    featured: false,
    userId: currentUser?.id || 0,
  });

  // Load user testimonials on component mount
  useEffect(() => {
    if (currentUser) {
      loadUserTestimonials();
    }
  }, []);
  
  const loadUserTestimonials = async () => {
    if (!currentUser) return;
    
    try {
      setLoadingTestimonials(true);
      const userTestimonials = await getTestimonialsByUserId(currentUser.id);
      setTestimonials(userTestimonials);
    } catch (err) {
      console.error('Error loading user testimonials:', err);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const resetForm = () => {
    setFormData({
      comment: '',
      author: currentUser?.name || '',
      position: '',
      featured: false,
      userId: currentUser.id,
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setShowPreviewModal(false);
    setSelectedTestimonial(null);
    setPreviewTestimonial(null);
    resetForm();
  };

  const handleAddTestimonial = () => {
    setModalType('add');
    resetForm();
    setSelectedTestimonial(null);
    setShowModal(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setModalType('edit');
    setSelectedTestimonial(testimonial);
    setFormData({
      comment: testimonial.comment,
      author: testimonial.author,
      position: testimonial.position,
      featured: testimonial.featured,
      userId: testimonial.userId,
    });
    setShowModal(true);
  };

  const handlePreviewTestimonial = (testimonial: Testimonial) => {
    setPreviewTestimonial(testimonial);
    setShowPreviewModal(true);
  };

  const handleDeleteTestimonial = async (testimonialId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      try {
        await deleteTestimonial(testimonialId);
        await loadUserTestimonials(); // Reload testimonials
        alert('Témoignage supprimé avec succès !');
      } catch (err) {
        alert('Erreur lors de la suppression du témoignage');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      if (modalType === 'add') {
        await addTestimonial(formData);
        alert('Témoignage ajouté avec succès !');
      } else {
        await updateTestimonial(selectedTestimonial!._id!, formData);
        alert('Témoignage mis à jour avec succès !');
      }
      await loadUserTestimonials(); // Reload testimonials
      closeModal();
    } catch (err) {
      alert(`Erreur lors de ${modalType === 'add' ? 'l\'ajout' : 'la mise à jour'} du témoignage`);
    } finally {
      setIsSaving(false);
    }
  };

  if (!currentUser) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Vous devez être connecté pour accéder à cette page.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Mes Témoignages</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Partagez votre expérience avec AVAS
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Mes Témoignages</h2>
            <button
              onClick={handleAddTestimonial}
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              <Plus size={20} />
              <span>Ajouter un témoignage</span>
            </button>
          </div>

          {loadingTestimonials ? (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Chargement de vos témoignages...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600">{error}</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun témoignage</h3>
              <p className="text-gray-600 mb-6">Vous n'avez pas encore créé de témoignage.</p>
              <button
                onClick={handleAddTestimonial}
                className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <Plus size={20} />
                <span>Créer mon premier témoignage</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      {testimonial.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-2">
                          <Star size={12} className="mr-1" />
                          Mis en avant
                        </span>
                      )}
                      <h3 className="font-semibold text-gray-900 mb-1">{testimonial.author}</h3>
                      <p className="text-sm text-purple-600 mb-3">{testimonial.position}</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4 italic">
                    "{testimonial.comment}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500">
                      {testimonial.createdAt && (
                        <span>
                          Créé le {new Date(testimonial.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handlePreviewTestimonial(testimonial)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="Voir"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEditTestimonial(testimonial)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                        title="Modifier"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(testimonial._id!)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                        title="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {modalType === 'add' ? 'Ajouter un témoignage' : 'Modifier le témoignage'}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre rôle/position *
                  </label>
                  <input
                    type="text"
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ex: Bénévole, Parent, Participant..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre témoignage *
                  </label>
                  <textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                    placeholder="Partagez votre expérience avec AVAS..."
                    required
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note :</strong> Votre témoignage sera soumis pour révision. 
                    Seuls les administrateurs peuvent décider de le mettre en avant sur la page d'accueil.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50"
                  >
                    <Save size={16} />
                    <span>{isSaving ? 'Enregistrement...' : 'Enregistrer'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {showPreviewModal && previewTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Aperçu du témoignage</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Status Badge */}
                <div className="flex justify-center">
                  {previewTestimonial.featured ? (
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <Star size={16} className="mr-2" />
                      Témoignage mis en avant
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      Témoignage en attente de validation
                    </span>
                  )}
                </div>

                {/* Testimonial Content */}
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <blockquote className="text-lg md:text-xl text-gray-900 leading-relaxed mb-4 italic">
                    "{previewTestimonial.comment}"
                  </blockquote>
                  <div className="text-gray-700">
                    <p className="font-semibold text-lg">{previewTestimonial.author}</p>
                    <p className="text-sm">{previewTestimonial.position}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      closeModal();
                      handleEditTestimonial(previewTestimonial);
                    }}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <Edit size={16} />
                    <span>Modifier</span>
                  </button>
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
    </section>
  );
};

export default MyTestimonials;