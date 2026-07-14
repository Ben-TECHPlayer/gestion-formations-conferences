import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Header from "./Header";
import '../../styles/formulaire/FormulaireContact.css';

// Plateforme d'apprentissage en commerce
function FormulaireContact() {
    const [result, setResult] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#formulaire-contact") {
            const element = document.getElementById("formulaire-contact");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi....");
        const formData = new FormData(event.target);
        formData.append("access_key", "a30bc28f-59e6-4782-9ced-0814c617ec56");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Votre demande est transmise.");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };


    return (
        <form id="formulaire-contact" onSubmit={onSubmit}>
            <fieldset>Contactez-nous</fieldset>

            <input type="text" name="lastName" placeholder="Votre nom" required />
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="email" name="email" placeholder="Votre adresse mail" required/>
            <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>

            <select name="profile" required>
                <option value="">Sélectionnez votre type de demande</option>
                <option value="Collège">Collége</option>
                <option value="Lycée">Lycée</option>
                <option value="Ecole de commerce">Ecole de commerce</option>
                <option value="Banque">Banque</option>
                <option value="Assurance">Assurance</option>
                <option value="Etablissement banquier">Etablissement banquier</option>
            </select>

            <select name="requestType" required>
                <option value="">Sélectionnez votre type de demande</option>
                <option value="Formations">Formations</option>
                <option value="Conférences">Conférences</option>
            </select>
            <textarea name="message" placeholder="Votre message" required/>
            <input type="submit" value={"Envoyer votre demande"} />
        </form>
    );
}

export default FormulaireContact;