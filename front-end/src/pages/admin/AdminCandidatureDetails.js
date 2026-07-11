import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AdminCandidatureDetails() {
  const { id } = useParams(); // récupère l'id dans l'URL
  const navigate = useNavigate();

  const [candidature, setCandidature] = useState(null);

  // Charger la candidature
  useEffect(() => {
    fetch(`https://ton-domaine.com/backend/api/get-candidature-by-id.php?id=${id}`)
      .then(res => res.json())
      .then(data => setCandidature(data));
  }, [id]);

  // Marquer comme traité
  const traiterCandidature = () => {
    fetch("https://ton-domaine.com/backend/api/update-candidature-status.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "traite" })
    })
    .then(() => navigate("/admin")); // retour au dashboard
  };

  // Supprimer
  const supprimerCandidature = () => {
    fetch("https://ton-domaine.com/backend/api/delete-candidature.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    .then(() => navigate("/admin"));
  };

  if (!candidature) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="admin-details">
      <h1>Détails de la candidature</h1>

      <div className="details-card">
        <p><strong>Nom :</strong> {candidature.lastName}</p>
        <p><strong>Prénom :</strong> {candidature.firstName}</p>
        <p><strong>Email :</strong> {candidature.email}</p>
        <p><strong>Téléphone :</strong> {candidature.phone}</p>
        <p><strong>Voie :</strong> {candidature.voie}</p>
        <p><strong>Spécialités / Formation :</strong> {candidature.specialites}</p>
        <p><strong>Message :</strong> {candidature.message}</p>
        <p><strong>Date :</strong> {candidature.created_at}</p>
        <p><strong>Statut :</strong> {candidature.status}</p>
      </div>

      <div className="actions">
        <button onClick={traiterCandidature}>Marquer comme traité</button>
        <button onClick={supprimerCandidature}>Supprimer</button>
        <button onClick={() => navigate("/admin")}>Retour</button>
      </div>
    </div>
  );
}

export default AdminCandidatureDetails;
