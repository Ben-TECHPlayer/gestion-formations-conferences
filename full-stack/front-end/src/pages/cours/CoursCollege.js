// Importer React ainsi que les routeurs
import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// Importer la customisation de la page de cours
import '../styles/pages/Cours.css';

function CoursCollege() {

    return (
        <main>
            <div className="cours-container">
                <h1>Cours pour les collèges</h1>
                <div className="infos-cours">
                    {/* Donner des informations sur ce cours */}
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
                        {/* Mettre des tarifs en place */}
                        <div className="prix-cours">
                            <h1>Cours</h1>
                            <h2>Prix : 150€</h2>
                        </div>
                        {/* Demander aux utilisateurs de payer */}
                        <div className="emplacement-paiement">
                            <Link to="/paiement" className="bouton-paiement">Payer</Link>
                            <img src={`${process.env.PUBLIC_URL}/assets/PaiementSecuriseLogo.png`} alt="Secure pay" />
                        </div>
                    </div>
                </div>

                {/* Dire pourquoi c'est avantageux d'assister à ces ateliers */}
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
        </main>
    );
}

export default CoursCollege;