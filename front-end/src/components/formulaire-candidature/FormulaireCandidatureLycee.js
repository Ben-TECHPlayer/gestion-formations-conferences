import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function FormulaireCandidatureLycee(){

    const [result, setResult] = useState("");
    const [choixVoieLycee, setChoixVoieLycee] = useState("");
    const [showMessageBox, setShowMessageBox] = useState(false);
    
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi....");
        const formData = new FormData(event.target);
        formData.append("access_key", "9e3023eb-c5d9-476a-b365-b285eb36b516");

        const specialites = formData.getAll("prochainesSpecialites");
        formData.append("specialitesChoisies", specialites.join(", "));

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Votre demande est transmise.");
            setShowMessageBox(true); // ✅ affiche la boîte
            event.target.reset();

            // ✅ ferme automatiquement après 4 secondes
            setTimeout(() => setShowMessageBox(false), 4000);
        } else {
            setResult("Erreur lors de l'envoi.");
        }
    };
    
    return(
        <form id="formulaire-candidature-lycee" onSubmit={onSubmit}>
            <fieldset>Objectif Lycée</fieldset>

            <input type="text" name="lastName" placeholder="Votre nom" required />
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="number" name="age" placeholder="Votre âge" required />
            <input type="email" name="email" placeholder="Votre adresse mail" required/>
            <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>

            <select name="prochaineVoieLycee" required onChange={(e) => setChoixVoieLycee(e.target.value)}>
                <option value="">Sélectionnez votre voie de formation à laquelle vous souhaitez rentrer</option>
                <option value="bac-general">Bac général</option>
                <option value="bac-technologique">Bac technologique</option>
            </select>

            {choixVoieLycee === "bac-general" && ( 
            <select className="bac-general" name="prochainesSpecialites" required multiple>
                <option value="">Sélectionnez vos spécialités</option>
                <option value="Mathématiques">Mathématiques</option>
                <option value="Sciences économiques et sociales">Sciences économiques et sociales</option>
                <option value="Sciences de l'ingénieur">Sciences de l'ingénieur</option>
                <option value="Physique-Chimie">Physique-Chimie</option>
                <option value="Sciences de la vie">Sciences de la vie et de la Terre</option>
            </select>
            )}

            {choixVoieLycee === "bac-technologique" && (
            <select className="bac-technologique" name="prochaineFormation" required>
                <option value="">Sélectionnez votre formation</option>
                <option value="Bac STMG">Bac STMG</option>
                <option value="Bac STI2D">Bac STI2D</option>
                <option value="Bac STD2A">Bac STD2A</option>
            </select>
            )}

            <textarea name="message" placeholder="Votre message" required/>
            <input type="submit" value={"Envoyer votre demande"} />

            {showMessageBox && (
            <div className="message-box">
                <p>✅ Votre candidature a bien été envoyée !</p>
                <button onClick={() => setShowMessageBox(false)}>Fermer</button>
            </div>
            )}
        </form>
    );
}

export default FormulaireCandidatureLycee;