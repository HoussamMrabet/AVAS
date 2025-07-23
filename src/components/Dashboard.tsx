import React, { useState } from 'react';
import { Users, Home, Edit3, Trash2, Plus, Search, Filter, Eye, UserCheck, UserX, X, Save, UserPlus, Settings } from 'lucide-react';
import { useUsers } from '../hooks/useUsers';
import { useTeams } from '../hooks/useTeams';
import { useInfos } from '../hooks/useInfos';
import { User } from '../hooks/useAuth';

interface UserFormData {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface TeamFormData {
  name: string;
  position: string;
  description: string;
  avatar: string;
  startDate: string;
}

interface InfoFormData {
  website: string;
  phone: string;
  email: string;
  address: string;
  siret: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    linktr: string;
  };
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'teams' | 'infos'>('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<'all' | 'admin' | 'user'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [previewUser, setPreviewUser] = useState<User | null>(null);
  
  // Team states
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);
  const [showEditTeamModal, setShowEditTeamModal] = useState(false);
  const [showPreviewTeamModal, setShowPreviewTeamModal] = useState(false);
  const [editingTeam, setEditingTeam] = useState<any>(null);
  const [previewTeam, setPreviewTeam] = useState<any>(null);
  const [teamFormData, setTeamFormData] = useState<TeamFormData>({
    name: '',
    position: '',
    description: '',
    avatar: '',
    startDate: ''
  });
  
  // Info states
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  const [infoFormData, setInfoFormData] = useState<InfoFormData>({
    website: '',
    phone: '',
    email: '',
    address: '',
    siret: '',
    social: {
      facebook: '',
      instagram: '',
      twitter: '',
      linktr: ''
    }
  });
  
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  
  // Use the custom hooks
  const { users, loading, error, addUser, updateUser, deleteUser } = useUsers();
  const { teams, loading: teamsLoading, error: teamsError, addTeam, updateTeam, deleteTeam } = useTeams();
  const { site, loading: infoLoading, error: infoError } = useInfos();

  // Initialize info form data when site data is loaded
  React.useEffect(() => {
    if (site) {
      setInfoFormData({
        website: site.website || '',
        phone: site.phone || '',
        email: site.email || '',
        address: site.address || '',
        siret: site.siret || '',
        social: {
          facebook: site.social?.facebook || '',
          instagram: site.social?.instagram || '',
          twitter: site.social?.twitter || '',
          linktr: site.social?.linktr || ''
        }
      });
    }
  }, [site]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur "${userName}" ?`)) {
      try {
        await deleteUser(userId);
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    }
  };

  const handleAddUser = () => {
    setFormData({ name: '', email: '', password: '', role: 'user' });
    setFormError('');
    setShowAddModal(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: '',
      role: user.role
    });
    setFormError('');
    setShowEditModal(true);
  };

  const handlePreviewUser = (user: User) => {
    setPreviewUser(user);
    setShowPreviewModal(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    try {
      if (showEditModal) {
        await updateUser(editingUser!._id, formData);
      } else {
        await addUser(formData);
      }

      setShowAddModal(false);
      setShowEditModal(false);
      setEditingUser(null);
    } catch (err) {
      console.error('Error saving user:', err);
      setFormError(err instanceof Error ? err.message : 'Erreur lors de l\'opération');
    } finally {
      setFormLoading(false);
    }
  };


  // Team management functions
  const handleAddTeam = () => {
    setTeamFormData({ name: '', position: '', description: '', avatar: '', startDate: '' });
    setFormError('');
    setShowAddTeamModal(true);
  };

  const handleEditTeam = (team: any) => {
    setEditingTeam(team);
    setTeamFormData({
      name: team.name,
      position: team.position,
      description: team.description || '',
      avatar: team.avatar || '',
      startDate: team.startDate || ''
    });
    setFormError('');
    setShowEditTeamModal(true);
  };

  const handlePreviewTeam = (team: any) => {
    setPreviewTeam(team);
    setShowPreviewTeamModal(true);
  };

  const handleDeleteTeam = async (teamId: string, teamName: string) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer le membre "${teamName}" ?`)) {
      try {
        await deleteTeam(teamId);
      } catch (err) {
        console.error('Error deleting team member:', err);
      }
    }
  };

  const handleTeamFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    try {
      if (showEditTeamModal) {
        await updateTeam(editingTeam!._id, teamFormData);
      } else {
        await addTeam(teamFormData);
      }

      setShowAddTeamModal(false);
      setShowEditTeamModal(false);
      setEditingTeam(null);
    } catch (err) {
      console.error('Error saving team member:', err);
      setFormError(err instanceof Error ? err.message : 'Erreur lors de l\'opération');
    } finally {
      setFormLoading(false);
    }
  };

  // Info management functions
  const handleEditInfo = () => {
    setFormError('');
    setShowEditInfoModal(true);
  };

  const handleInfoFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    try {
      // Here you would call an API to update site info
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowEditInfoModal(false);
      alert('Informations mises à jour avec succès !');
    } catch (err) {
      console.error('Error updating site info:', err);
      setFormError(err instanceof Error ? err.message : 'Erreur lors de la mise à jour');
    } finally {
      setFormLoading(false);
    }
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowPreviewModal(false);
    setShowAddTeamModal(false);
    setShowEditTeamModal(false);
    setShowPreviewTeamModal(false);
    setShowEditInfoModal(false);
    setEditingUser(null);
    setPreviewUser(null);
    setEditingTeam(null);
    setPreviewTeam(null);
    setFormError('');
  };

  const getRoleColor = (role: string) => {
    return role === 'admin' ? 'text-blue-600 bg-blue-100' : 'text-gray-600 bg-gray-100';
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Dashboard Admin</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Gestion des utilisateurs et administration du système
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Navigation Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 md:mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Users size={16} className="inline mr-2" />
              Utilisateurs
            </button>
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'teams'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <UserPlus size={16} className="inline mr-2" />
              Équipe
            </button>
            <button
              onClick={() => setActiveTab('infos')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'infos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Settings size={16} className="inline mr-2" />
              Informations
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
            >
              <Home size={16} />
              <span>Retour à l'accueil</span>
            </a>
          </div>
        </div>

        {/* Users Tab */}
        {activeTab === 'users' && (
          <>
            {/* Add User Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={handleAddUser}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm md:text-base"
              >
                <Plus size={16} />
                <span>Nouvel utilisateur</span>
              </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher par nom ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value as 'all' | 'admin' | 'user')}
                    className="px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">Tous les rôles</option>
                    <option value="admin">Administrateurs</option>
                    <option value="user">Utilisateurs</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {loading ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Chargement des utilisateurs...</p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Utilisateur
                          </th>
                          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Rôle
                          </th>
                          <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                          <tr key={user._id} className="hover:bg-gray-50">
                            <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3 md:mr-4"
                                />
                                <div>
                                  <div className="text-sm md:text-base font-medium text-gray-900">{user.name}</div>
                                  <div className="text-xs md:text-sm text-gray-500">{user.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                                {user.role === 'admin' ? 'Administrateur' : 'Utilisateur'}
                              </span>
                            </td>
                            <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                              <div className="flex items-center space-x-2">
                                <button 
                                  onClick={() => handlePreviewUser(user)}
                                  className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                                  title="Voir les détails"
                                >
                                  <Eye size={16} />
                                </button>
                                <button 
                                  onClick={() => handleEditUser(user)}
                                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                  title="Modifier"
                                >
                                  <Edit3 size={16} />
                                </button>
                                <button
                                  onClick={() => handleDeleteUser(user._id, user.name)}
                                  className="text-red-600 hover:text-red-900 transition-colors duration-200"
                                  title="Supprimer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {filteredUsers.length === 0 && (
                    <div className="text-center py-8 md:py-12">
                      <Users className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Aucun utilisateur trouvé</h3>
                      <p className="text-gray-600">Aucun utilisateur ne correspond aux critères de recherche.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <>
            {/* Add Team Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={handleAddTeam}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm md:text-base"
              >
                <Plus size={16} />
                <span>Nouveau membre</span>
              </button>
            </div>

            {/* Teams Grid */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {teamsLoading ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Chargement de l'équipe...</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {teams.map((member) => (
                      <div key={member._id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center mb-3">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-sm text-blue-600">{member.position}</p>
                          </div>
                        </div>
                        
                        {member.description && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{member.description}</p>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handlePreviewTeam(member)}
                              className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                              title="Voir les détails"
                            >
                              <Eye size={16} />
                            </button>
                            <button 
                              onClick={() => handleEditTeam(member)}
                              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                              title="Modifier"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteTeam(member._id, member.name)}
                              className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              title="Supprimer"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          {member.startDate && (
                            <span className="text-xs text-gray-500">Depuis {member.startDate}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {teams.length === 0 && (
                    <div className="text-center py-8 md:py-12">
                      <UserPlus className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Aucun membre d'équipe</h3>
                      <p className="text-gray-600">Commencez par ajouter des membres à votre équipe.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {/* Infos Tab */}
        {activeTab === 'infos' && (
          <>
            {/* Edit Info Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={handleEditInfo}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
              >
                <Edit3 size={16} />
                <span>Modifier les informations</span>
              </button>
            </div>

            {/* Site Info Display */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {infoLoading ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Chargement des informations...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de contact</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Site web</label>
                        <p className="text-gray-900">{site?.website || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Téléphone</label>
                        <p className="text-gray-900">{site?.phone || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email</label>
                        <p className="text-gray-900">{site?.email || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Adresse</label>
                        <p className="text-gray-900">{site?.address || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">SIRET</label>
                        <p className="text-gray-900">{site?.siret || 'Non défini'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Facebook</label>
                        <p className="text-gray-900">{site?.social?.facebook || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Instagram</label>
                        <p className="text-gray-900">{site?.social?.instagram || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Twitter</label>
                        <p className="text-gray-900">{site?.social?.twitter || 'Non défini'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Linktree</label>
                        <p className="text-gray-900">{site?.social?.linktr || 'Non défini'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Add/Edit Team Modal */}
        {(showAddTeamModal || showEditTeamModal) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  {showAddTeamModal ? 'Ajouter un membre' : 'Modifier le membre'}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleTeamFormSubmit} className="p-6">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                    {formError}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={teamFormData.name}
                      onChange={(e) => setTeamFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Poste *
                    </label>
                    <input
                      type="text"
                      id="position"
                      value={teamFormData.position}
                      onChange={(e) => setTeamFormData(prev => ({ ...prev, position: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Poste occupé"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={teamFormData.description}
                      onChange={(e) => setTeamFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Description du rôle"
                    />
                  </div>

                  <div>
                    <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-2">
                      URL de l'avatar
                    </label>
                    <input
                      type="url"
                      id="avatar"
                      value={teamFormData.avatar}
                      onChange={(e) => setTeamFormData(prev => ({ ...prev, avatar: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Date de début
                    </label>
                    <input
                      type="text"
                      id="startDate"
                      value={teamFormData.startDate}
                      onChange={(e) => setTeamFormData(prev => ({ ...prev, startDate: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="2024"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                  >
                    <Save size={16} />
                    <span>{formLoading ? 'Enregistrement...' : 'Enregistrer'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Team Preview Modal */}
        {showPreviewTeamModal && previewTeam && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">Détails du membre</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img
                      src={previewTeam.avatar}
                      alt={previewTeam.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{previewTeam.name}</h4>
                  <p className="text-blue-600 font-semibold">{previewTeam.position}</p>
                </div>

                <div className="space-y-4">
                  {previewTeam.description && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Description
                      </h5>
                      <p className="text-gray-700">{previewTeam.description}</p>
                    </div>
                  )}
                </div>
                  {previewTeam.startDate && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Depuis:</span>
                        <span className="text-sm text-gray-900">{previewTeam.startDate}</span>
                      </div>
                    </div>
                  )}

                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                  <button
                    onClick={() => {
                      setShowPreviewTeamModal(false);
                      handleEditTeam(previewTeam);
                    }}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Edit3 size={16} />
                    <span>Modifier</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Info Modal */}
        {showEditInfoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">Modifier les informations du site</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleInfoFormSubmit} className="p-6">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Informations de contact</h4>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        Site web
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={infoFormData.website}
                        onChange={(e) => setInfoFormData(prev => ({ ...prev, website: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={infoFormData.phone}
                        onChange={(e) => setInfoFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="07 67 68 30 06"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={infoFormData.email}
                        onChange={(e) => setInfoFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="contact@avas.fr"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={infoFormData.address}
                        onChange={(e) => setInfoFormData(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="9 chemin de la ferme 69120"
                      />
                    </div>

                    <div>
                      <label htmlFor="siret" className="block text-sm font-medium text-gray-700 mb-2">
                        SIRET
                      </label>
                      <input
                        type="text"
                        id="siret"
                        value={infoFormData.siret}
                        onChange={(e) => setInfoFormData(prev => ({ ...prev, siret: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="889 352 753 00012"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Réseaux sociaux</h4>
                    
                    <div>
                      <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-2">
                        Facebook
                      </label>
                      <input
                        type="url"
                        id="facebook"
                        value={infoFormData.social.facebook}
                        onChange={(e) => setInfoFormData(prev => ({ 
                          ...prev, 
                          social: { ...prev.social, facebook: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://facebook.com/avas"
                      />
                    </div>

                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
                        Instagram
                      </label>
                      <input
                        type="url"
                        id="instagram"
                        value={infoFormData.social.instagram}
                        onChange={(e) => setInfoFormData(prev => ({ 
                          ...prev, 
                          social: { ...prev.social, instagram: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://instagram.com/avas"
                      />
                    </div>

                    <div>
                      <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-2">
                        Twitter
                      </label>
                      <input
                        type="url"
                        id="twitter"
                        value={infoFormData.social.twitter}
                        onChange={(e) => setInfoFormData(prev => ({ 
                          ...prev, 
                          social: { ...prev.social, twitter: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://twitter.com/avas"
                      />
                    </div>

                    <div>
                      <label htmlFor="linktr" className="block text-sm font-medium text-gray-700 mb-2">
                        Linktree
                      </label>
                      <input
                        type="url"
                        id="linktr"
                        value={infoFormData.social.linktr}
                        onChange={(e) => setInfoFormData(prev => ({ 
                          ...prev, 
                          social: { ...prev.social, linktr: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://linktr.ee/avas"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                  >
                    <Save size={16} />
                    <span>{formLoading ? 'Enregistrement...' : 'Enregistrer'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add/Edit User Modal */}
        {(showAddModal || showEditModal) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  {showAddModal ? 'Ajouter un utilisateur' : 'Modifier l\'utilisateur'}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="p-6">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                    {formError}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Mot de passe {showEditModal ? '(laisser vide pour ne pas changer)' : '*'}
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      required={showAddModal}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Mot de passe"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Rôle *
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as 'admin' | 'user' }))}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="user">Utilisateur</option>
                      <option value="admin">Administrateur</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                  >
                    <Save size={16} />
                    <span>{formLoading ? 'Enregistrement...' : 'Enregistrer'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* User Preview Modal */}
        {showPreviewModal && previewUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">Détails de l'utilisateur</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                {/* User Avatar and Basic Info */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img
                      src={previewUser.avatar}
                      alt={previewUser.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{previewUser.name}</h4>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getRoleColor(previewUser.role)}`}>
                    {previewUser.role === 'admin' ? 'Administrateur' : 'Utilisateur'}
                  </span>
                </div>

                {/* User Details */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Informations personnelles
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Email:</span>
                        <span className="text-sm text-gray-900">{previewUser.email}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Rôle:</span>
                        <span className="text-sm text-gray-900">
                          {previewUser.role === 'admin' ? 'Administrateur' : 'Utilisateur'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                  <button
                    onClick={() => {
                      setShowPreviewModal(false);
                      handleEditUser(previewUser);
                    }}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Edit3 size={16} />
                    <span>Modifier</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;