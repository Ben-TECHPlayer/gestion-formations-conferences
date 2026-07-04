import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../styles/conferences/ConferenceRentreeLycee.css';
// import FormationCaracteristiques from '../../components/FormationCaracteristiques';

function ConferenceRentreeLycee(){

    const [menuConferenceOpen, setMenuConferenceOpen] = useState(false);

    return(
        <main>
            {/* <FormationCaracteristiques /> */}
            <img src={`${process.env.PUBLIC_URL}/assets/conference-rentree-lycee.png`} alt="Lycée" />
            
            <h1>Conférence de la rentrée lycée</h1>
            {/* Description */}
            <p>

            </p>

            {/* Infos pratiques */}
            <p>Lieu : </p>
            <p>Date : </p>
            {/* 

            <p> 
                Cette formation a pour but : former les futurs génies du commerce, pour cela on a plusieurs débouchés qu'on verra plus tard.
                C'est pourquoi nous vous proposons l'alternance en école de commerce, en effet cela va vous permet de vous créer des opportunités qui vous seront présentées, alors saisissez-les, et surtout ne les laissez pas passer!
            </p>
            <h1>Programme</h1>
            <p></p>
            <h1>Admission</h1>
            <p>L'entrée se fait en 3ème année d'école de commerce par défaut, et elle est postulable de plusieurs manières :</p>
            <ul>
                <li>Par voie classique en 5 ans, après le Bac STMG</li>
                <li>Après le BAC +3, notamment le BUT TC</li>
                <li>Via les admissions parallèles avec une deuxième année validée en BUT Techniques de Commercialisation</li>
            </ul>
            <h1>Les avantages pour les collégiens</h1>
            <p></p> */}
        </main>
    );
}

export default ConferenceRentreeLycee;