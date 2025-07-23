import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Shield, Bell, Globe, Save, Trash2, AlertTriangle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useUsers } from '../hooks/useUsers';

const Settings: React.FC = () => {
  const { getCurrentUser, signOut } = useAuth();
  const { deleteUser } = useUsers();
  const currentUser = getCurrentUser();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('security');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    language: 'fr',
    theme: 'light'
  });

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setIsSaving(false);
    alert('Mot de passe modifié avec succès !');
  };

  const handlePreferencesChange = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Préférences sauvegardées !');
  };

  const handleDeleteAccount = async () => {
    if (!currentUser) return;
    
    if (deleteConfirmation !== 'SUPPRIMER') {
      alert('Veuillez taper "SUPPRIMER" pour confirmer la suppression de votre compte.');
      return;
    }

    setIsDeleting(true);
    try {
      await deleteUser(currentUser._id);
      alert('Votre compte a été supprimé avec succès.');
      signOut(); // Log out the user
      window.location.href = '/'; // Redirect to home page
    } catch (err) {
      console.error('Error deleting account:', err);
      alert('Erreur lors de la suppression du compte. Veuillez réessayer.');
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
      setDeleteConfirmation('');
    }
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteConfirmation('');
  };

  const tabs = [
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'general', label: 'Général', icon: Globe },
    { id: 'account', label: 'Compte', icon: Trash2 }
  ];

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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Paramètres</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Gérez vos préférences et paramètres de sécurité
          </p>
        </div>
      </div>

      {/* Settings Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="text-sm md:text-base">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              {/* Security Tab */}
              {activeTab === 'security' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6 md:mb-8">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sécurité</h2>
                  </div>

                  <form onSubmit={handlePasswordChange} className="space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Mot de passe actuel
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          id="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre mot de passe actuel"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Nouveau mot de passe
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          id="newPassword"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Nouveau mot de passe"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmer le nouveau mot de passe
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Confirmer le nouveau mot de passe"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSaving}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                    >
                      <Lock size={16} />
                      <span>{isSaving ? 'Modification...' : 'Modifier le mot de passe'}</span>
                    </button>
                  </form>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6 md:mb-8">
                    <Bell className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Notifications</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Notifications par email</h3>
                        <p className="text-sm text-gray-600">Recevoir les actualités et événements par email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.emailNotifications}
                          onChange={(e) => setPreferences(prev => ({ ...prev, emailNotifications: e.target.checked }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Notifications SMS</h3>
                        <p className="text-sm text-gray-600">Recevoir les alertes importantes par SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.smsNotifications}
                          onChange={(e) => setPreferences(prev => ({ ...prev, smsNotifications: e.target.checked }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <button
                      onClick={handlePreferencesChange}
                      disabled={isSaving}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
                    >
                      <Save size={16} />
                      <span>{isSaving ? 'Sauvegarde...' : 'Sauvegarder'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* General Tab */}
              {activeTab === 'general' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6 md:mb-8">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Général</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                        Langue
                      </label>
                      <select
                        id="language"
                        value={preferences.language}
                        onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
                        Thème
                      </label>
                      <select
                        id="theme"
                        value={preferences.theme}
                        onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="light">Clair</option>
                        <option value="dark">Sombre</option>
                        <option value="auto">Automatique</option>
                      </select>
                    </div>

                    <button
                      onClick={handlePreferencesChange}
                      disabled={isSaving}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
                    >
                      <Save size={16} />
                      <span>{isSaving ? 'Sauvegarde...' : 'Sauvegarder'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === 'account' && (
                <div>
                  <div className="flex items-center space-x-3 mb-6 md:mb-8">
                    <Trash2 className="w-6 h-6 text-red-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gestion du Compte</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Account Information */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Informations du compte</h3>
                      <div className="space-y-2 text-sm text-blue-800">
                        <p><strong>Nom :</strong> {currentUser.name}</p>
                        <p><strong>Email :</strong> {currentUser.email}</p>
                        <p><strong>Rôle :</strong> {currentUser.role}</p>
                      </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                        <h3 className="text-lg font-semibold text-red-900">Zone de danger</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-red-900 mb-2">Supprimer mon compte</h4>
                          <p className="text-sm text-red-800 mb-4">
                            Cette action est irréversible. Toutes vos données seront définitivement supprimées, 
                            y compris vos témoignages, commandes et informations personnelles.
                          </p>
                          <ul className="text-sm text-red-800 mb-4 space-y-1">
                            <li>• Suppression de toutes vos données personnelles</li>
                            <li>• Suppression de vos témoignages</li>
                            <li>• Suppression de votre historique d'activités</li>
                            <li>• Déconnexion automatique</li>
                          </ul>
                        </div>
                        
                        <button
                          onClick={() => setShowDeleteModal(true)}
                          className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
                        >
                          <Trash2 size={16} />
                          <span>Supprimer mon compte</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Confirmer la suppression</h3>
                  <p className="text-sm text-gray-600">Cette action est irréversible</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800 mb-3">
                    <strong>Attention :</strong> Vous êtes sur le point de supprimer définitivement votre compte.
                  </p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>• Toutes vos données seront supprimées</li>
                    <li>• Vos témoignages seront supprimés</li>
                    <li>• Cette action ne peut pas être annulée</li>
                  </ul>
                </div>

                <div>
                  <label htmlFor="deleteConfirmation" className="block text-sm font-medium text-gray-700 mb-2">
                    Pour confirmer, tapez <strong>"SUPPRIMER"</strong> ci-dessous :
                  </label>
                  <input
                    type="text"
                    id="deleteConfirmation"
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tapez SUPPRIMER"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleDeleteAccount}
                    disabled={isDeleting || deleteConfirmation !== 'SUPPRIMER'}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Trash2 size={16} />
                    <span>{isDeleting ? 'Suppression...' : 'Supprimer définitivement'}</span>
                  </button>
                  <button
                    onClick={closeDeleteModal}
                    disabled={isDeleting}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                  >
                    Annuler
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

export default Settings;