import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../styles/formations/FormationLycee.css';
import '../../styles/Formations.css';
import FormationCaracteristiques from '../../components/FormationCaracteristiques';

function FormationLycee(){

    const [selection, setSelection] = useState("bouton-resume");
    const [selectionFormation, setSelectionFormation] = useState("bouton-bac-general");
    // const [menuFormationOpen, setMenuFormationOpen] = useState(false);

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
            <div className="menuFormation">
                <button className={selectionFormation === "bouton-bac-general" ? "active" : ""} onClick={() => setSelectionFormation("bouton-bac-general")}>
                    Bac général
                </button>
                <button className={selectionFormation === "bouton-bac-stmg" ? "active" : ""} onClick={() => setSelectionFormation("bouton-bac-stmg")}>
                    BAC STMG
                </button>
                <button className={selectionFormation === "bouton-bac-sti2d" ? "active" : ""} onClick={() => setSelectionFormation("bouton-bac-sti2d")}>
                    BAC STI2D
                </button>
                <button className={selectionFormation === "bouton-bac-std2a" ? "active" : ""} onClick={() => setSelectionFormation("bouton-bac-std2a")}>
                    BAC STD2A
                </button>
            </div>
            {selectionFormation === "bouton-bac-general" && (
            <p>Maths</p>
            )}
            {selectionFormation === "bouton-bac-stmg" && (
            <p>Gestion</p>
            )}
            {selectionFormation === "bouton-bac-sti2d" && (
            <p>Anglais</p>
            )}
            {selectionFormation === "bouton-bac-std2a" && (
            <p>Dessin</p>
            )}
            </div>
            )}

            {selection === "bouton-admission" && (
            <div className="section-formation">
            <h1>Admission</h1>
            <p>L'entrée se fait de manière classique, on postule directement sur le site</p>
            </div>
            )}
            
            <h1>Les avantages pour les futurs lycéens</h1>
            <ul>
                <li>Variété de spécialités en bac général</li>
            </ul>
        </main>
    );
}

export default FormationLycee;