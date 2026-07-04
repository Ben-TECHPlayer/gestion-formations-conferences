import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Conferences.css';

function Conferences() {
    return (
        <main>
            <div class="panel-conferences-scrollable">
                <article id="panel-conferences">
                    <div class="conference-item">
                        <Link to="/conferences/conference-rentree-college">
                            <div class="conference-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/conference-rentree-college.png`} alt="Collège" />
                            </div>
                            <div class="conference-texte">
                                <h2>Réunion de rentrée collège</h2>
                                <p>Conférence qui consiste à préparer la rentrée scolaire pour les collégiens dans les meilleures conditions</p>
                            </div>
                        </Link>
                    </div>

                    <div class="conference-item">
                        <Link to="/conferences/conference-rentree-lycee">
                            <div class="conference-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/conference-rentree-lycee.png`} alt="Lycée" />
                            </div>
                            <div class="conference-texte">
                                <h2>Réunion de rentrée lycée</h2>
                                <p>Conférence qui consiste à préparer la rentrée scolaire pour les lycéens dans les meilleures conditions</p>
                            </div>
                        </Link>
                    </div>

                    <div class="conference-item">
                        <Link to="/conferences/conference-rentree-ecole-de-commerce">
                            <div class="conference-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/conference-rentree-ecole-de-commerce.webp`} alt="Ecole de commerce" />
                            </div>
                            <div class="conference-texte">
                                <h2>Réunion préparative pour l’alternance de la 4ème année en école de commerce</h2>
                                <p>Conférence qui consiste à préparer la rentrée scolaire pour les alternants qui vont commencer leur quatrième année d'école de commerce en apprentissage dans les meilleures conditions</p>
                            </div>
                        </Link>
                    </div>
                </article>
            </div>
            
            {/* <fieldset>Contactez-nous</fieldset>
            <button type="submit" id="destination-formulaire-contact" name="demande" value="Demande un renseignement"></input> */}
        
        </main>
    );
}

export default Conferences;
