// Importer React ainsi que ses hooks, ses routeurs
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Importer la customisation du formulaire
import '../../styles/FormulaireAuthentification.css';

function Register() {
    const [result, setResult] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    // Permettre la navigation rapide vers le formulaire
    // useEffect(() => {
    //     if (location.hash === "#formulaire-contact") {
    //         const element = document.getElementById("formulaire-contact");
    //         if (element) {
    //             element.scrollIntoView({ behavior: "smooth" });
    //         }
    //     }
    // }, [location]);

    // Mettre des restrictions pour 
    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 chiffres
        return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
    };

    // Permettre l'envoi du formulaire de manière efficace
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Création du compte en cours...");

        const formData = new FormData(event.target);

        // Transformer ces données en objet standard pour pouvoir l'envoyer en JSON
        const dataObj = Object.fromEntries(formData.entries());

        // const response = await fetch("https://api.web3forms.com/submit", {
        //     method: "POST",
        //     body: formData
        // });

        try {
            // 3. ⚠️ IMPORTANT : Remplace par le vrai chemin vers ton PHP !
            const response = await fetch("http://localhostt:3000/plateforme-apprentissage-commerce/#/authentification/inscription.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // On prévient PHP qu'on envoie du JSON
                },
                body: JSON.stringify(dataObj)
            });

            const data = await response.json();
            
            // 4. Gestion de la réponse de ton fichier PHP
            if (response.ok) { 
                setResult("Compte créé avec succès ! Redirection vers la connexion...");
                event.target.reset();
                // Redirection automatique au bout de 2 secondes
                setTimeout(() => navigate('/login'), 2000); 
            } else {
                // Si l'email existe déjà ou qu'il y a une erreur dans le PHP
                setResult("Erreur : " + (data.erreur || "Inscription impossible."));
            }
        } catch (error) {
            setResult("Erreur critique : Impossible de joindre le serveur PHP.");
        }
    };


    return (
        // Mettre en place notre formulaire de contact
        <form id="formulaire-contact" onSubmit={onSubmit} className="form-auth">
            <fieldset>Créer un compte apprenant</fieldset>

            {/* Affichage du résultat (Succès ou Erreur) */}
            {result && <div className="result-message" style={{marginBottom: "15px", fontWeight: "bold"}}>{result}</div>}

            {/* Dire aux utilisateurs de mettre leurs coordonnées personnelles */}
            <input type="text" name="lastName" placeholder="Votre nom" required />
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="email" name="email" placeholder="Votre adresse mail" required/>
            <input type="tel" name="phoneNumber" placeholder="Votre numéro de téléphone" required onChange={(e) => {e.target.value = formatPhone(e.target.value); }}/>
            <input type="password" name="mot_de_passe" placeholder="Choisissez un mot de passe" required />
            <input type="submit" className="btn-submit" value={"S'inscrire"} />
        </form>
    );
}

export default Register;