import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import Header from "./Header";
import '../styles/Home.css';
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
