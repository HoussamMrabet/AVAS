export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AuthError {
  message: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// Custom hook for authentication
export const useAuth = () => {
  const signIn = async (credentials: LoginCredentials): Promise<User> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, accept specific credentials or reject others
    const validCredentials = [
      { email: 'admin@avas.fr', password: 'admin123' },
      { email: 'user@avas.fr', password: 'user123' },
      { email: 'test@test.com', password: 'test123' }
    ];

    const isValid = validCredentials.some(
      cred => cred.email === credentials.email && cred.password === credentials.password
    ) || credentials.password === 'demo'; // Accept any email with 'demo' password

    if (!isValid) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }

    // Return fake user data
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: credentials.email.split('@')[0] || 'Utilisateur',
      email: credentials.email,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    };

    return user;
  };

  const signOut = () => {
    localStorage.removeItem('avas_user');
  };

  const getCurrentUser = (): User | null => {
    try {
      const userData = localStorage.getItem('avas_user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      localStorage.removeItem('avas_user');
      return null;
    }
  };

  const saveUser = (user: User) => {
    localStorage.setItem('avas_user', JSON.stringify(user));
  };

  return {
    signIn,
    signOut,
    getCurrentUser,
    saveUser
  };
};