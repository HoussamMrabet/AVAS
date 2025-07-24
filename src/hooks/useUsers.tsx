import { useState, useEffect } from 'react';
import { User } from './useAuth';

export interface UserFormData {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'professionnel' | 'benevole' | 'global';
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get all users
  const getAllUsers = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch('http://localhost:3900/api/users');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des utilisateurs');
      }
      
      const userData = await response.json();
      setUsers(userData);
      return userData;
    } catch (err) {
      console.error('Error fetching users:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des utilisateurs';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get user by ID
  const getUserById = async (userId: string): Promise<User> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`http://localhost:3900/api/users/${userId}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de l\'utilisateur');
      }
      
      const userData = await response.json();
      return userData;
    } catch (err) {
      console.error('Error fetching user:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement de l\'utilisateur';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add new user
  const addUser = async (userData: UserFormData): Promise<User> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch('http://localhost:3900/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la création de l\'utilisateur');
      }

      const newUser = await response.json();
      setUsers(prevUsers => [...prevUsers, newUser]);
      return newUser;
    } catch (err) {
      console.error('Error adding user:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la création de l\'utilisateur';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const updateUser = async (userId: string, userData: Partial<UserFormData>): Promise<User> => {
    try {
      setLoading(true);
      setError('');
      
      // Remove password from update if it's empty
      const updateData = userData.password 
        ? userData 
        : { name: userData.name, email: userData.email, role: userData.role };

      const response = await fetch(`http://localhost:3900/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la mise à jour de l\'utilisateur');
      }

      const updatedUser = await response.json();
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user._id === userId ? { ...user, ...updatedUser } : user
        )
      );
      return updatedUser;
    } catch (err) {
      console.error('Error updating user:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la mise à jour de l\'utilisateur';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (userId: string): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`http://localhost:3900/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
      }

      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
    } catch (err) {
      console.error('Error deleting user:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression de l\'utilisateur';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Initialize users on hook mount
  useEffect(() => {
    getAllUsers();
  }, []);

  return {
    users,
    loading,
    error,
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    setError, // Allow manual error clearing
  };
};