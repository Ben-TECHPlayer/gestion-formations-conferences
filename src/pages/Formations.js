import React, { useState, useEffect } from 'react';
import '../styles/Formations.css';

function Formations() {
    return (
        <main className="home-slider-container">
            <div class="panel-formations-scrollable">
                <article id="panel-formations">
                    <div class="formation-item">
                        <div class="formation-title">
                            <h2>Collège</h2>
                            {/* <img src="./images/lycee-modeste-leroy.png" alt="Lycée Modeste Leroy" class="img-fluid"> */}
                        </div>
                        {/* <p><strong>Période : 2021-2023</strong></p> */}
                        {/* <p><span style="text-decoration: underline;">Mention assez bien</span> avec la moyenne générale de 12,14/20</p> */}
                        {/* <p><span>Mention assez bien</span> avec la moyenne générale de 12,14/20</p> */}
                        {/* <p><strong>Certification PIX</strong></p> */}
                    </div>

                    <div class="formation-item">
                        <div class="formation-title">
                            <h2>Lycée</h2>
                            {/* <img src="./images/iut-orsay.png" alt="IUT d'Orsay - Université Paris-Saclay" class="img-fluid"> */}
                        </div>
                        {/* <p><strong>Période : 2023-2027</strong></p> */}
                        {/* <p><strong>Certifications LinkedIn :</strong></p> */}
                        {/* <ul style="margin-top: 0; " class="liste-certifications"> */}
                        {/* <ul>
                            <li><a href="https://www.linkedin.com/learning/certificates/0ba9ca8c66ec19ce0ac2198342b9237fed41325c666016a8be00562dc3a6de9b?trk=share_certificate">Certification Devenir développeur web full-stack</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/28e438c2ee097339b80d2025b4033754ab12d8532b9a19554bcad1e5b622a3f6?trk=share_certificate">Certification Devenir designer web</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/d67bf1a1c431e133671841b91828285162d9f179879eb5d83150ad90cca15211?trk=share_certificate">Certification Devenir développeur d'applications mobiles avec Android</a></li>
                        </ul> */}
                    </div>

                    <div class="formation-item">
                        <div class="formation-title">
                            <h2>Ecole de commerce</h2>
                            {/* <img src="./images/iut-orsay.png" alt="IUT d'Orsay - Université Paris-Saclay" class="img-fluid"> */}
                        </div>
                        {/* <p><strong>Période : 2027-2030</strong></p> */}
                        {/* <p><strong>Certifications LinkedIn :</strong></p> */}
                        {/* <ul style="margin-top: 0; " class="liste-certifications"> */}
                        {/* <ul>
                            <li><a href="https://www.linkedin.com/learning/certificates/0ba9ca8c66ec19ce0ac2198342b9237fed41325c666016a8be00562dc3a6de9b?trk=share_certificate">Certification Devenir développeur web full-stack</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/28e438c2ee097339b80d2025b4033754ab12d8532b9a19554bcad1e5b622a3f6?trk=share_certificate">Certification Devenir designer web</a></li>
                            <li><a href="https://www.linkedin.com/learning/certificates/d67bf1a1c431e133671841b91828285162d9f179879eb5d83150ad90cca15211?trk=share_certificate">Certification Devenir développeur d'applications mobiles avec Android</a></li>
                        </ul> */}
                    </div>
                </article>
            </div>
            
            {/* <fieldset>Contactez-nous</fieldset>
            <button type="submit" id="destination-formulaire-contact" name="demande" value="Demande un renseignement"></input> */}
        
        </main>
    );
}

export default Formations;
