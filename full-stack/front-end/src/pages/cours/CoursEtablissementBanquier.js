import React from 'react';
import { Link } from 'react-router-dom';

// Importer la customisation de la page de cours
import '../../styles/pages/Cours.css';

function CoursEtablissementBanquier() {
    return (
        <main className="cours-page">
            <div className="cours-container">
                <div className="cours-header">
                    <h1>Cours & Ateliers pour les établissements banquiers</h1>
                    <p className="sous-titre">Découvrez les bases du commerce, de la gestion et de la prise de parole pour booster votre confiance dans un établissement banquier.</p>
                </div>

                <div className="infos-cours">
                    {/* Informations et matières */}
                    <div className="modalites-cours">
                        <h2>Les matières étudiées</h2>
                        <ul className="liste-matieres">
                            <li><strong>Commerce :</strong> Apprendre les fondamentaux de l'échange et de la relation client.</li>
                            <li><strong>Techniques de vente :</strong> S'initier à l'argumentation et à la négociation persuasive.</li>
                            <li><strong>Comptabilité :</strong> Saisir les notions de base de la gestion financière et des chiffres.</li>
                            <li><strong>Confiance en soi :</strong> Vaincre la timidité et s'affirmer face aux autres.</li>
                            <li><strong>Prestance :</strong> Maîtriser son langage corporel, sa posture et son expression orale.</li>
                            <li><strong>Gestion :</strong> Organiser ses projets et gérer son temps efficacement.</li>
                        </ul>
                    </div>

                    {/* Bloc Tarif et Paiement */}
                    <div className="tarif-cours">
                        <div className="prix-cours">
                            <h3>Tarif de l'atelier</h3>
                            <p className="montant">150€</p>
                            <span className="details-tarif">Accès complet à tous les modules pratiques</span>
                        </div>
                        
                        <div className="emplacement-paiement">
                            <Link to="/paiement" className="bouton-paiement">Payer l'atelier</Link>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/PaiementSecuriseLogo.png`} alt="Paiement sécurisé" />
                        </div>
                    </div>
                </div>

                {/* Pourquoi assister à ces ateliers */}
                <div className="avantages-cours">
                    <h2>Pourquoi participer à nos ateliers pratiques ?</h2>
                    <div className="grille-avantages">
                        <div className="avantage-card">
                            <h3>Expérience enrichissante</h3>
                            <p>Une immersion concrète loin des cours théoriques traditionnels pour apprendre en s'amusant.</p>
                        </div>
                        <div className="avantage-card">
                            <h3>Ateliers variés</h3>
                            <p>Des exercices ludiques, des mises en situation réelles et des jeux de rôle interactifs.</p>
                        </div>
                        <div className="avantage-card">
                            <h3>Apprentissage efficace</h3>
                            <p>Des méthodes pédagogiques adaptées aux jeunes pour assimiler rapidement les compétences clés.</p>
                        </div>
                        <div className="avantage-card">
                            <h3>Préparation d'avenir</h3>
                            <p>Donner une longueur d'avance et développer l'esprit d'initiative pour le futur monde professionnel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CoursEtablissementBanquier;