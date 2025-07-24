import { useState, useEffect } from 'react';

export interface SiteData {
  website?: string;
  phone?: string;
  email?: string;
  address?: string;
  siret?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    snap?: string;
    tiktok?: string;
    linkedin?: string;
    linktr?: string
    donation?: string;
  };
}

export const useInfos = () => {
  const [site, setSite] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing info data
  const fetchSite = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:3900/api/infos");

      if (!res.ok) throw new Error("Erreur lors du chargement des informations du site");

      const data = await res.json();
      setSite(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // New: Update info data by sending PUT request
  const updateSite = async (updatedData: SiteData) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:3900/api/infos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Erreur lors de la mise à jour des informations");
      }

      const data = await res.json();
      setSite(data); // update local state with new info
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setError(message);
      throw err;  // rethrow so caller can handle too
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSite();
  }, []);

  return { site, loading, error, updateSite };
};
