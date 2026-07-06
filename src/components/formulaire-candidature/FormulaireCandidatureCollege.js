import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function FormulaireCandidatureCollege(){

    const [result, setResult] = useState("");
    
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi....");
        const formData = new FormData(event.target);
        formData.append("access_key", "");

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
    
    return(
        <form id="formulaire-candidature-college" onSubmit={onSubmit}>
            <fieldset>Objectif Collège</fieldset>

            <input type="text" name="lastName" placeholder="Votre nom" required />
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="number" name="age" placeholder="Votre âge" required />
            <input type="email" name="email" placeholder="Votre adresse mail" required/>
            <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>

            <select name="prochaineClasse" required>
                <option value="">Sélectionnez la classe à laquelle que rentrerez</option>
                <option value="A">6ème</option>
                <option value="B">5ème</option>
                <option value="C">4ème</option>
                <option value="D">3ème</option>
            </select>

            <textarea name="message" placeholder="Votre message" required/>
            <input type="submit" value={"Envoyer votre demande"} />
        </form>
    );
}

export default FormulaireCandidatureCollege;