import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Header from "./Header";
import '../styles/pages/Cours.css';
import FormulaireContact from '../components/formulaire/FormulaireContact';

function Cours() {


    return (
        <main>

            {/* La partie pour mon contenu principal de ma page d'accueil */}
            {/* <div className="cours-container">
                <div className="modalites-cours">
                    
                </div>
                <div className="tarif-cours">
                    
                </div>
            </div> */}

            {/* La partie qui comporte mon formulaire de contact */}
            <FormulaireContact/>
        </main>
    );
}

export default Cours;