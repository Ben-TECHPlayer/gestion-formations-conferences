// Importer React ainsi que ses hooks, ses routeurs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importer les dépendances PayPal pour permettre la mise en place du paiement par PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Importer la customisation de cette page
import '../styles/pages/Paiement.css';

function Paiement() {

    // Ce state permet de savoir si Apple Pay est prêt
    const [isApplePayAvailable, setIsApplePayAvailable] = useState(false);
    // const [isApplePayAvailable, setIsApplePayAvailable] = useState(true);
    // const [isMasterpassLoaded, setIsMasterpassLoaded] = useState(false);

    // Charger le script au démarrage du composant
    useEffect(() => {
        // 1. Détection d'Apple Pay
        // On vérifie si l'API est présente dans la fenêtre du navigateur
        if (window.ApplePaySession && window.ApplePaySession.canMakePayments()) {
            setIsApplePayAvailable(true);
        }
    }, []);

    const handleApplePayClick = () => {
        alert("Logique Apple Pay à implémenter plus tard !");
        // Quand vous serez prêt, c'est ici qu'on créera l'objet new ApplePaySession(...)
    };

    // Configurer globalement PayPal
    const initialOptions = {
        "client-id": "Abn4I9lzVopG5mFZm2JBFz5qw8u1UIhtclMtFOacAi3sxu-yB_B4JRwNmJnH-NYD75p1vrZfrYOfUUYC", // À remplacer par votre vrai Client ID depuis le dashboard développeur PayPal
        currency: "EUR",
        intent: "capture",
    };

    

    return (
        // Le Provider englobe la vue pour fournir l'accès à l'API PayPal
        <PayPalScriptProvider options={initialOptions}>
            <main className="paiement-page">
                <div className="paiement-container">
                    
                    {/* En-tête de la page */}
                    <div className="paiement-header">
                        <h1>Validation de votre commande</h1>
                        <p>Sécurisez votre accès immédiat à l'atelier pratique.</p>
                    </div>

                    <div className="paiement-grid">
                        
                        {/* Colonne Récapitulatif du cours */}
                        <div className="recap-panier">
                            <h2>Récapitulatif</h2>
                            <div className="panier-card">
                                <div className="panier-info">
                                    <h3>Atelier Pratique - Collégiens</h3>
                                    <p>Commerce, techniques de vente & prise de parole</p>
                                </div>
                                <div className="panier-prix">
                                    <span>150,00 €</span>
                                </div>
                            </div>
                            <div className="panier-total">
                                <span>Total à régler</span>
                                <span className="total-montant">150,00 €</span>
                            </div>
                            <div className="securite-garantie">
                                <p>🔒 Paiement 100% sécurisé et crypté</p>
                            </div>
                        </div>

                        {/* Colonne Moyens de paiement */}
                        <div className="options-paiement">
                            <h2>Choisissez votre moyen de paiement</h2>

                            {/* Intégrer Apple Pay */}
                            {isApplePayAvailable && (
                                <div className="methode-paiement apple-pay-box">
                                    <button 
                                        onClick={handleApplePayClick}
                                        className="btn-apple-pay"
                                        aria-label="Payer avec Apple Pay"
                                    />
                                </div>
                            )}

                            <div className="separateur-ou">
                                <span>ou</span>
                            </div>

                            {/* Intégrer PayPal */}
                            <div className="methode-paiement paypal-box">
                                <PayPalButtons
                                    style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [{
                                                amount: { value: "150.00" } // Prix mis à 150€
                                            }],
                                            application_context: {
                                                shipping_preference: "NO_SHIPPING" 
                                            }
                                        });
                                    }}
                                    onApprove={async (data, actions) => {
                                        try {
                                            const coursActuel = "COURS_COLLEGE_01"; 

                                            const response = await fetch("http://localhost:8000/valider-paiement.php", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({ 
                                                    orderID: data.orderID,
                                                    id_cours: coursActuel
                                                })
                                            });

                                            const resultat = await response.json();

                                            if (resultat.success) {
                                                alert("Succès : " + resultat.message);
                                            } else {
                                                alert("Erreur lors de la validation : " + resultat.message);
                                            }
                                            
                                        } catch (erreur) {
                                            console.error("Erreur de communication :", erreur);
                                            alert("Une erreur de réseau est survenue.");
                                        }
                                    }}
                                />
                            </div>

                            <div className="retour-lien">
                                <Link to="/cours/collegiens">&larr; Retour aux détails du cours</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </PayPalScriptProvider>
    );
}

export default Paiement;
