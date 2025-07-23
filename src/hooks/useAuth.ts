export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  password?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {

  const signIn = async (credentials: LoginCredentials): Promise<User> => {

    const res = await fetch('http://localhost:3900/api/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Authentication failed');
    }

    const user: User = await res.json();
    saveUser(user); // Save to localStorage or however you want
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
    saveUser,
  };
};
