import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../styles/formations/FormationLycee.css';
import FormationCaracteristiques from '../../components/FormationCaracteristiques';

function FormationLycee(){

    const [menuFormationOpen, setMenuFormationOpen] = useState(false);

    return(
        <main>
            <FormationCaracteristiques />

            <h1>Résumé</h1>
            <p>
                Cette formation a pour but : former les futurs génies du commerce, pour cela on a plusieurs débouchés qu'on verra plus tard.
                C'est pourquoi nous vous proposons l'alternance en école de commerce, en effet cela va vous permet de vous créer des opportunités qui vous seront présentées, alors saisissez-les, et surtout ne les laissez pas passer!
            </p>
            <h1>Programme</h1>
            <div className={`menuFormation ${menuFormationOpen ? "show" : ""}`}>
                <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                    Bac général et technologique
                </NavLink>
                <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                    BAC STMG
                </NavLink>
                <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                    BAC STI2D
                </NavLink>
                <NavLink to="/formations/formation-lycee" className={({ isActive }) => isActive ? "active" : ""}>
                    BAC STD2A
                </NavLink>
            </div>
            <p></p>
            <h1>Admission</h1>
            <p>L'entrée se fait de manière classique, on postule directement sur le site</p>
            <h1>Les avantages pour les futurs lycéens</h1>
            <ul>
                <li>Variété de spécialités en bac général</li>
            </ul>
        </main>
    );
}

export default FormationLycee;