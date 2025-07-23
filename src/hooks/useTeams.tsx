import { useState, useEffect } from "react";

export interface Team {
  _id?: string;
  name: string;
  position: string;
  description?: string;
  avatar?: string;
  startDate?: string;
  isPrimary: Boolean;
}

export const useTeams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const baseUrl = "http://localhost:3900/api/teams";

  // Get all teams
  const getAllTeams = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des membres de l'équipe");
      }

      const data = await response.json();
      setTeams(data);
      return data;
    } catch (err) {
      console.error("Error fetching teams:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur lors du chargement des membres de l'équipe";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get team by ID
  const getTeamById = async (teamId: string): Promise<Team> => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${baseUrl}/${teamId}`);

      if (!response.ok) {
        throw new Error("Erreur lors du chargement du membre de l'équipe");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching team member:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur lors du chargement du membre de l'équipe";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Add new team member
  const addTeam = async (teamData: Team): Promise<Team> => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de la création du membre de l'équipe");
      }

      const newTeam = await response.json();
      setTeams((prev) => [...prev, newTeam]);
      return newTeam;
    } catch (err) {
      console.error("Error adding team member:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur lors de la création du membre de l'équipe";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update team member
  const updateTeam = async (teamId: string, teamData: Partial<Team>): Promise<Team> => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${baseUrl}/${teamId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de la mise à jour du membre de l'équipe");
      }

      const updatedTeam = await response.json();
      setTeams((prev) =>
        prev.map((team) => (team._id === teamId ? { ...team, ...updatedTeam } : team))
      );
      return updatedTeam;
    } catch (err) {
      console.error("Error updating team member:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur lors de la mise à jour du membre de l'équipe";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete team member
  const deleteTeam = async (teamId: string): Promise<void> => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${baseUrl}/${teamId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression du membre de l'équipe");
      }

      setTeams((prev) => prev.filter((team) => team._id !== teamId));
    } catch (err) {
      console.error("Error deleting team member:", err);
      const errorMessage = err instanceof Error ? err.message : "Erreur lors de la suppression du membre de l'équipe";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  return {
    teams,
    loading,
    error,
    getAllTeams,
    getTeamById,
    addTeam,
    updateTeam,
    deleteTeam,
    setError,
  };
};
