import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../styles/formations/FormationEcoleDeCommerce.css';
import FormationCaracteristiques from '../../components/FormationCaracteristiques';

function FormationEcoleDeCommerce(){

    const [selection, setSelection] = useState("bouton-resume");

    return(
        <main>
            <FormationCaracteristiques selection={selection} setSelection={setSelection} />

            {selection === "bouton-resume" && (
            <div className="section-formation">
            <h1>Résumé</h1>
            <p>
                Cette formation a pour but : former les futurs génies du commerce, pour cela on a plusieurs débouchés qu'on verra plus tard.
                C'est pourquoi nous vous proposons l'alternance en école de commerce, en effet cela va vous permet de vous créer des opportunités qui vous seront présentées, alors saisissez-les, et surtout ne les laissez pas passer!
            </p>
            </div>
            )}

            {selection === "bouton-programme" && (
            <div className="section-formation">
            <h1>Programme</h1>
            <p></p>
            </div>
            )}

            {selection === "bouton-admission" && (
            <div className="section-formation">
            <h1>Admission</h1>
            <p>L'entrée se fait en 3ème année d'école de commerce par défaut, et elle est postulable de plusieurs manières :</p>
            <ul>
                <li>Par voie classique en 5 ans, après le Bac STMG</li>
                <li>Après le BAC +3, notamment le BUT TC</li>
                <li>Via les admissions parallèles avec une deuxième année validée en BUT Techniques de Commercialisation</li>
            </ul>
            </div>
            )}
            
            <h1>Les avantages pour les futurs étudiants en école de commerce</h1>
            <ul>
                <li>Formation gratuite</li>
                <li>Diplôme reconnu par l'Etat</li>
                <li>Rémunération généreuse</li>
                <li>Vie étudiante au sommet</li>
                <li>Expérience professionnelle à l'international</li>
            </ul>
            <h1>Débouchés</h1>
            <ul>
                <li>Commercial</li>
                <li>Technico-commercial</li>
                <li>Ingénieur commercial</li>
                <li>Business Intelligence</li>
            </ul>
        </main>
    );
}

export default FormationEcoleDeCommerce;