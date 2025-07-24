import { useState, useEffect } from 'react';

export interface Testimonial {
  _id?: string;
  comment: string;
  author: string;
  position: string;
  featured: boolean;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TestimonialFormData {
  comment: string;
  author: string;
  position: string;
  featured: boolean;
  userId: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const baseUrl = 'http://localhost:3900/api/testimonials';

  // Get all testimonials
  const getAllTestimonials = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(baseUrl);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des témoignages');
      }
      
      const data = await response.json();
      setTestimonials(data);
      return data;
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des témoignages';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get featured testimonials only
  const getFeaturedTestimonials = async (): Promise<Testimonial[]> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/featured`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des témoignages mis en avant');
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching featured testimonials:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement des témoignages mis en avant';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get testimonials by user ID
  const getTestimonialsByUserId = async (userId: string): Promise<Testimonial[]> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/user/${userId}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de vos témoignages');
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching user testimonials:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement de vos témoignages';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get testimonial by ID
  const getTestimonialById = async (testimonialId: string): Promise<Testimonial> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/${testimonialId}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du témoignage');
      }
      
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement du témoignage';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add new testimonial
  const addTestimonial = async (testimonialData: TestimonialFormData): Promise<Testimonial> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonialData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la création du témoignage');
      }

      const newTestimonial = await response.json();
      setTestimonials(prevTestimonials => [...prevTestimonials, newTestimonial]);
      return newTestimonial;
    } catch (err) {
      console.error('Error adding testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la création du témoignage';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update testimonial
  const updateTestimonial = async (testimonialId: string, testimonialData: Partial<TestimonialFormData>): Promise<Testimonial> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/${testimonialId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonialData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la mise à jour du témoignage');
      }

      const updatedTestimonial = await response.json();
      setTestimonials(prevTestimonials => 
        prevTestimonials.map(testimonial => 
          testimonial._id === testimonialId ? { ...testimonial, ...updatedTestimonial } : testimonial
        )
      );
      return updatedTestimonial;
    } catch (err) {
      console.error('Error updating testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la mise à jour du témoignage';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete testimonial
  const deleteTestimonial = async (testimonialId: string): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${baseUrl}/${testimonialId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du témoignage');
      }

      setTestimonials(prevTestimonials => 
        prevTestimonials.filter(testimonial => testimonial._id !== testimonialId)
      );
    } catch (err) {
      console.error('Error deleting testimonial:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression du témoignage';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Initialize testimonials on hook mount
  useEffect(() => {
    getAllTestimonials();
  }, []);

  return {
    testimonials,
    loading,
    error,
    getAllTestimonials,
    getFeaturedTestimonials,
    getTestimonialsByUserId,
    getTestimonialById,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    setError, // Allow manual error clearing
  };
};