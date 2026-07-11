import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [candidatures, setCandidatures] = useState([]);
  const navigate = useNavigate();

  // Charger les candidatures
  const fetchCandidatures = () => {
    fetch("https://ben-techplayer.github.io/gestion-formations-conferences/backend/api/get-candidatures.php")
      .then(res => res.json())
      .then(data => setCandidatures(data));
  };

  useEffect(() => {
    fetchCandidatures();
  }, []);

  // Marquer comme traité
  const traiterCandidature = (id) => {
    fetch("https://ton-domaine.com/backend/api/update-candidature-status.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "traite" })
    })
    .then(() => fetchCandidatures());
  };

  // Supprimer une candidature
  const supprimerCandidature = (id) => {
    fetch("https://ton-domaine.com/backend/api/delete-candidature.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    .then(() => fetchCandidatures());
  };

  return (
    <div className="admin-dashboard">
      <h1>Gestion des candidatures</h1>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Voie</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {candidatures.map(c => (
            <tr key={c.id}>
              <td>{c.lastName}</td>
              <td>{c.firstName}</td>
              <td>{c.voie}</td>
              <td>{c.created_at}</td>
              <td>{c.status}</td>
              <td>
                <button onClick={() => navigate(`/admin/candidature/${c.id}`)}>
                    Voir
                </button>


                <button onClick={() => traiterCandidature(c.id)}>
                  Traiter
                </button>

                <button onClick={() => supprimerCandidature(c.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;