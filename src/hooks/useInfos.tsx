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
    twitter?: string;
    linktr?: string
  };
}

export const useInfos = () => {
  const [site, setSite] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  useEffect(() => {
    fetchSite();
  }, []);

  return { site, loading, error };
};
