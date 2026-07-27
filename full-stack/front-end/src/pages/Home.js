// Importer React ainsi que ses états, ses hooks, ses routeurs avec liens
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// Importer la customisation de la page d'accueil
import '../styles/pages/Home.css';

// Importer le formulaire de contact
import FormulaireContact from '../components/formulaire/FormulaireContact';

function Home() {


    return (
        <main>
            {/* La partie pour mon contenu principal de ma page d'accueil */}

            {/* La partie qui comporte mon formulaire de contact */}
            <FormulaireContact/>
        </main>
    );
}

export default Home;
