// Importer React ainsi que ses états, ses hooks, ses routeurs avec liens
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// Importer la customisation de la présentation de notre entreprise
import '../styles/pages/About.css';

// Importer le formulaire de contact
import FormulaireContact from '../components/formulaire/FormulaireContact';

function About() {


    return (
        <main>
            {/* La partie pour mon contenu principal de ma page d'accueil */}
            <div className="profil-container">
                {/* Faire la biographie du fondateur */}
                <div className="biographie-fondateur">
                    <h1>Boina CHAMSOUDINE</h1>
                    <h2>Profil commercial</h2>
                </div>

                {/* Mettre son CV */}
                <div className="cv-fondateur">
                    {/* A mettre le CV plus tard */}
                    {/* <object 
                        data={`${process.env.PUBLIC_URL}/assets/cv-fondateur.pdf`} 
                        type="application/pdf" 
                        width="150%" 
                        height="800px" 
                        style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                    >
                        <p>
                            Votre navigateur ne supporte pas l'affichage direct des PDF. 
                            <a href={`${process.env.PUBLIC_URL}/assets/cv-fondateur.pdf`} download="CV_Ben_Ali.pdf"> Cliquez ici pour télécharger mon CV</a>.
                        </p>
                    </object> */}
                </div>
            </div>

            {/* Mettre la vidéo de présentation */}
            <div className="video-container">
                {/* Intégrer une vidéo externe qu'on a téléchargé */}
                <video 
                    controls 
                    width="100%" 
                    style={{ maxWidth: '800px', borderRadius: '8px', textAlign: 'center' }}
                >
                    {/* <source src={`${process.env.PUBLIC_URL}/assets/.mp4`} type="video/mp4" /> */}
                    {/* A mettre la vidéo plus tard */}
                </video>
            </div>
            
            {/* La partie qui comporte mon formulaire de contact */}
            <FormulaireContact/>
        </main>
    );
}

export default About;