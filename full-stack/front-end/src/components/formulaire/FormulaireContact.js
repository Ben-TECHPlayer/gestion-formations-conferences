// Importer React ainsi que ses hooks, ses routeurs
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";

// Importer la customisation du formulaire
import '../../styles/formulaire/FormulaireContact.css';

function FormulaireContact() {
    const [result, setResult] = useState("");
    const location = useLocation();

    // Permettre la navigation rapide vers le formulaire
    useEffect(() => {
        if (location.hash === "#formulaire-contact") {
            const element = document.getElementById("formulaire-contact");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    // Mettre des restrictions pour 
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    };

    // Permettre l'envoi du formulaire de manière efficace
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi....");
        const formData = new FormData(event.target);
        formData.append("access_key", "a30bc28f-59e6-4782-9ced-0814c617ec56");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        // Recevoir un message de confirmation que c'est envoyé
        const data = await response.json();
        if (data.success) {
            setResult("Votre demande est transmise.");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };


    return (
        // Mettre en place notre formulaire de contact
        <form id="formulaire-contact" onSubmit={onSubmit}>
            <fieldset>Contactez-nous</fieldset>

            {/* Dire aux utilisateurs de mettre leurs coordonnées personnelles */}
            <input type="text" name="lastName" placeholder="Votre nom" required />
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="email" name="email" placeholder="Votre adresse mail" required/>
            <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>

            {/* Permettre aux utilisateurs de sélectionner leur profil */}
            <select name="profile" required>
                <option value="">Sélectionnez votre profil</option>
                <option value="Collège">Collège</option>
                <option value="Lycée">Lycée</option>
                <option value="Ecole de commerce">Ecole de commerce</option>
                <option value="Banque">Banque</option>
                <option value="Assurance">Assurance</option>
                <option value="Etablissement banquier">Etablissement banquier</option>
            </select>

            {/* Permettre aux utilisateurs de sélectionner ce qui veulent demander */}
            <select name="requestType" required>
                <option value="">Sélectionnez votre type de demande</option>
                <option value="Formations">Formations</option>
                <option value="Conférences">Conférences</option>
            </select>

            {/* Dire aux utilisateurs d'envoyer un message */}
            <textarea name="message" placeholder="Votre message" required/>

            {/* Créer un bouton de validation */}
            <input type="submit" value={"Envoyer votre demande"} />
        </form>
    );
}

export default FormulaireContact;