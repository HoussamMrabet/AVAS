import { useState, useEffect } from 'react';

export interface Message {
  _id?: string;
  fullName: string;
  email: string;
  subject: string;
  content: string;
  isRead: boolean; // Changed to boolean
  createdAt?: string;
  updatedAt?: string;
}

export interface MessageFormData {
  fullName: string;
  email: string;
  subject: string;
  content: string;
}

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const baseUrl = 'http://localhost:3900/api/messages';

  // Get all messages
  const getAllMessages = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(baseUrl);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des messages');
      }
      
      const data = await response.json();
      setMessages(data);
      return data;
    } catch (err) {
      console.error('Error fetching messages:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des messages';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get message by ID
  const getMessageById = async (messageId: string): Promise<Message> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/${messageId}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du message');
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching message:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement du message';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add new message
  const addMessage = async (messageData: MessageFormData): Promise<Message> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la création du message');
      }

      const newMessage = await response.json();
      setMessages(prevMessages => [...prevMessages, newMessage]);
      return newMessage;
    } catch (err) {
      console.error('Error adding message:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la création du message';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update message status
  const updateMessageStatus = async (messageId: string, message: Message): Promise<Message> => {
    try {
      setLoading(true);
      setError('');
      const { _id, createdAt, updatedAt, __v, ...newMessage } = message;
      const response = await fetch(`${baseUrl}/${messageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( newMessage ),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la mise à jour du message');
      }

      const updatedMessage = await response.json();
      setMessages(prevMessages =>
        prevMessages.map(message =>
          message._id === messageId ? { ...message, ...updatedMessage } : message
        )
      );
      return updatedMessage;
    } catch (err) {
      console.error('Error updating message status:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la mise à jour du message';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Mark message as read
  const markAsRead = async (messageId: string, message: Message): Promise<Message> => {
    message.isRead = true;
    return updateMessageStatus(messageId, message); // Set isRead to true
  };

  // Mark message as unread
  const markAsUnread = async (messageId: string, message: Message): Promise<Message> => {
    message.isRead = false;
    return updateMessageStatus(messageId, message); // Set isRead to false
  };

  // Delete message
  const deleteMessage = async (messageId: string): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/${messageId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du message');
      }

      setMessages(prevMessages =>
        prevMessages.filter(message => message._id !== messageId)
      );
    } catch (err) {
      console.error('Error deleting message:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression du message';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getUnreadCount = (): number => {
    return messages.filter(message => message.isRead == false).length;
  };

  // Initialize messages on hook mount
  useEffect(() => {
    getAllMessages();
  }, []);

  return {
    messages,
    loading,
    error,
    getAllMessages,
    getMessageById,
    addMessage,
    markAsRead,
    markAsUnread,
    deleteMessage,
    getUnreadCount
  };
};
