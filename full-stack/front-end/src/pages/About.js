import React from 'react';

// Importer la customisation de la présentation de notre entreprise
import '../styles/pages/About.css';

// Si tu veux réactiver le formulaire de contact plus tard, décommente l'import et la balise en bas
// import FormulaireContact from '../components/formulaire/FormulaireContact';

function About() {
    return (
        <main className="about-page">
            {/* Section En-tête / Biographie */}
            <section className="profil-container">
                <div className="biographie-fondateur">
                    <h1>Boina CHAMSOUDINE</h1>
                    <h2>Profil commercial & technique</h2>
                    <p className="bio-description">
                        Passionné par le développement, la conception web et la gestion de projets techniques, 
                        je mets mon expertise au service de mes clients pour concevoir des solutions sur mesure, 
                        performantes et adaptées aux exigences du marché actuel.
                    </p>
                </div>
            </section>

            {/* Section CV */}
            <section className="cv-section">
                <h2>Curriculum Vitae</h2>
                <div className="cv-container">
                    <object 
                        data={`${process.env.PUBLIC_URL}/assets/cv-fondateur.pdf`} 
                        type="application/pdf" 
                    >
                        <div className="pdf-fallback">
                            <p>Votre navigateur ne supporte pas l'affichage direct des PDF.</p>
                            <a 
                                href={`${process.env.PUBLIC_URL}/assets/cv-fondateur.pdf`} 
                                download="CV_Boina_Chamsoudine.pdf"
                                className="download-btn"
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </object>
                </div>
            </section>

            {/* Section Vidéo de présentation */}
            <section className="video-section">
                <h2>Vidéo de présentation</h2>
                <div className="video-container">
                    <video 
                        controls 
                        poster={`${process.env.PUBLIC_URL}/assets/video-poster.jpg`}
                    >
                        <source src={`${process.env.PUBLIC_URL}/assets/presentation.mp4`} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
            </section>

            {/* Formulaire de contact optionnel */}
            {/* <FormulaireContact /> */}
        </main>
    );
}

export default About;