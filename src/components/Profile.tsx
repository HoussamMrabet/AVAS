import React, { useEffect, useState } from 'react';
import { Camera, Save, Edit3 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useUsers } from '../hooks/useUsers';

const Profile: React.FC = () => {
  const { getCurrentUser, saveUser } = useAuth();
  const { updateUser } = useUsers();

  const currentUser = getCurrentUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(currentUser);
  const [tempData, setTempData] = useState(currentUser);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setProfileData(currentUser);
      setTempData(currentUser);
    }
  }, []);

  const handleSave = async () => {
    if (!profileData) return;

    setIsSaving(true);
    try {
      if (!tempData) throw new Error('Aucune donnée temporaire à enregistrer');
      const updated = await updateUser(profileData.id, {
        name: tempData.name,
        email: tempData.email,
        avatar: tempData.avatar,
        role: tempData.role,
      });

      setProfileData(updated);
      setTempData(updated);
      saveUser(updated); // update localStorage
      setIsEditing(false);
    } catch (err) {
      console.error('Erreur lors de la mise à jour du profil', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempData(prev => prev ? { ...prev, avatar: e.target?.result as string } : prev);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!profileData) return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Vous devez être connecté pour accéder à cette page.</p>
      </div>
    </section>
  );

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Mon Profil</h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            Gérez vos informations personnelles
          </p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={isEditing ? tempData?.avatar || "https://i.ibb.co/0RxMKYM8/l60Hf.png" : profileData.avatar || "https://i.ibb.co/0RxMKYM8/l60Hf.png"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors duration-200">
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {profileData.name}
              </h2>
              <p className="text-gray-600 mb-4">{profileData.email}</p>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base"
                >
                  <Edit3 size={16} />
                  <span>Modifier le profil</span>
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 text-sm md:text-base"
                  >
                    <Save size={16} />
                    <span>{isSaving ? 'Enregistrement...' : 'Enregistrer'}</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 md:px-6 py-2 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm md:text-base"
                  >
                    Annuler
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Edit Form */}
          {isEditing && (
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Modifier les informations</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={tempData?.name}
                    onChange={(e) => setTempData(prev => prev ? { ...prev, name: e.target.value } : prev)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={tempData?.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Statistiques</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-blue-50 rounded-lg p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">3</div>
                <p className="text-sm md:text-base text-gray-600">Commandes</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">2</div>
                <p className="text-sm md:text-base text-gray-600">Formations</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">5</div>
                <p className="text-sm md:text-base text-gray-600">Événements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
