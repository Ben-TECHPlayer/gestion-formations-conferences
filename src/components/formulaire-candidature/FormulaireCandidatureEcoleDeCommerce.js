import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function FormulaireCandidatureEcoleDeCommerce(){

    const [result, setResult] = useState("");
    
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("En cours d'envoi....");
        const formData = new FormData(event.target);
        formData.append("access_key", "9bb43483-5320-4c16-b1e8-c471ac0ac63a");

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
        <form id="formulaire-candidature-ecole-de-commerce" onSubmit={onSubmit}>
            <fieldset>Objectif Ecole de commerce</fieldset>

            <input type="text" name="lastName" placeholder="Votre nom" required />
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="number" name="age" placeholder="Votre âge" required />
            <input type="email" name="email" placeholder="Votre adresse mail" required/>
            <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>

            <select name="formationActuelle" required>
                <option value="">Sélectionnez votre formation actuelle</option>
                <option value="Bac général">Bac général</option>
                <option value="Bac STMG">Bac STMG</option>
                <option value="Bac STI2D">Bac STI2D</option>
                <option value="Bac STD2A">Bac STD2A</option>
                <option value="BTS">BTS</option>
                <option value="DUT">DUT</option>
                <option value="BUT">BUT</option>
                <option value="Licence">Licence</option>
                <option value="Licence professionnelle">Licence professionnelle</option>
                <option value="Licence MIAGE">Licence MIAGE</option>
                <option value="Master 1">Master 1</option>
            </select>

            <select name="prochaineFormationCommerce" required>
                <option value="">Sélectionnez votre voie de formation à laquelle vous souhaitez rentrer</option>
                <option value="A">Programme Grand Ecole</option>
                <option value="B">Voie classique en 5 ans</option>
                {/* <option value="C">4ème</option> */}
            </select>

            {/* <select name="prochainesSpecialites" required>
                <option value="">Sélectionnez vos spécialités</option>
                <option value="A">Mathématiques</option>
                <option value="B">Sciences économiques et sociales</option>
                <option value="C">Sciences de l'ingénieur</option>
                <option value="D">Physique-Chimie</option>
                <option value="E">Sciences de la vie et de la Terre</option>
            </select>

            <select name="prochaineFormation" required>
                <option value="">Sélectionnez votre formation</option>
                <option value="A">Bac STMG</option>
                <option value="B">Bac STI2D</option>
                <option value="C">Bac STD2A</option>
            </select> */}

            <textarea name="message" placeholder="Votre message" required/>
            <input type="submit" value={"Envoyer votre demande"} />
        </form>
    );
}

export default FormulaireCandidatureEcoleDeCommerce;