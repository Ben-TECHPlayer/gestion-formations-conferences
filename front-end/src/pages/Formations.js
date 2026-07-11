import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Formations.css';

function Formations() {
    return (
        <main>
            <div class="panel-formations-scrollable">
                <article id="panel-formations">
                    <div class="type-formation-item">
                        <Link to="/formations/formation-college">
                            <div class="type-formation-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/college-madrid.png`} alt="Collège" />
                            </div>
                            <div class="type-formation-texte">
                                <h2>Collège</h2>
                                <p>Cursus collège</p>
                            </div>
                        </Link>
                    </div>

                    <div class="type-formation-item">
                        <Link to="/formations/formation-lycee">
                            <div class="type-formation-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/lycee-international-est-parisien.png`} alt="Lycée" />
                            </div>
                            <div class="type-formation-texte">
                                <h2>Lycée</h2>
                                <p>Cursus lycée</p>
                            </div>
                        </Link>
                    </div>

                    <div class="type-formation-item">
                        <Link to="/formations/formation-ecole-de-commerce">
                            <div class="type-formation-image">
                                <img src={`${process.env.PUBLIC_URL}/assets/hec-paris.png`} alt="Ecole de commerce" />
                            </div>
                            <div class="type-formation-texte">
                                <h2>Ecole de commerce</h2>
                                <p>Cursus école de commerce</p>
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

export default Formations;
