import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
// // import Header from "./Header";
// import '../styles/pages/Cours.css';
// import FormulaireContact from '../components/formulaire/FormulaireContact';

function CoursCollege() {

    return (
        // La partie pour mon contenu principal de ma partie cours
        <main>
            <div className="cours-container">
                <h1>Cours pour les collèges</h1>
                <div className="infos-cours">
                    <div className="modalites-cours">
                        <h2>Les matières</h2>
                        <ul>
                            <li>Commerce</li>
                            <li>Techniques de vente</li>
                            <li>Comptabilité</li>
                            <li>Confiance en soi</li>
                            <li>Prestance</li>
                            <li>Gestion</li>
                        </ul>
                    </div>
                    <div className="tarif-cours">
                        <div className="prix-cours">
                            <h1>Cours</h1>
                            <h2>Prix : 150€</h2>
                        </div>
                        <div className="emplacement-paiement">
                            <Link to="/paiement" className="bouton-paiement">Payer</Link>
                            <img src={`${process.env.PUBLIC_URL}/assets/PaiementSecuriseLogo.png`} alt="Secure pay" />
                        </div>
                    </div>
                </div>

                <div className="avantages-cours">
                    <h1>Voici les raisons d'apprendre le pratique en commerce</h1>
                    <ul>
                        <li>Expérience enrichissante</li>
                        <li>Ateliers variés</li>
                        <li>Apprentissage efficace</li>
                        <li>Préparation pour le monde du travail</li>
                    </ul>
                </div>
            </div>

            {/* <FormulaireContact /> */}
        </main>
    );
}

export default CoursCollege;