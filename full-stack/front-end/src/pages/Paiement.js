// Importer React ainsi que ses hooks, ses routeurs
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Importer Stripe ainsi que ses dépendances pour permettre la mise en place du paiement par Apple Pay
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import BoutonApplePay from './BoutonApplePay';

// Importer les dépendances PayPal pour permettre la mise en place du paiement par PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Importer la customisation de cette page
import '../styles/pages/Paiement.css';

function Paiement() {

    // 1. On écoute ce qui arrive de l'URL
    const location = useLocation();

    // 2. LA MAGIE EST ICI : 
    // Si on vient d'un clic sur un cours, on prend ses données (location.state).
    // Si on teste la page directement sur cette branche, on prend les données de secours après le "||".
    const detailsCours = location.state || {
        id_cours: "COURS_TEST_01",
        titre: "Atelier Pratique - Test Développeur",
        description: "Mode test activé sur la branche paiement",
        prix: "150.00", 
        prixAffichage: "150,00 €",
        lienRetour: "/"
    };

    // Ce state permet de savoir si Apple Pay est prêt
    const [isApplePayAvailable, setIsApplePayAvailable] = useState(false);
    
    // Remplacez par votre VRAIE clé publique "Test" récupérée sur le dashboard Stripe (pk_test_...)
    const stripePromise = loadStripe('pk_test_51TyWALRp8adLoeJMLPhOfGcShzgQ3QXCCgOJVdVfJefqdFtlagKliVvbPvG6vy7xy1aoYdrtnOaA3OvA5T5bNN1r00ljHBPMX9');
    
    // Charger le script au démarrage du composant
    useEffect(() => {
        // Détection d'Apple Pay
        if (window.ApplePaySession && window.ApplePaySession.canMakePayments()) {
            setIsApplePayAvailable(true);
        }
    }, []);

    const handleApplePayClick = () => {
        alert("Logique Apple Pay à implémenter plus tard !");
    };

    // Configurer globalement PayPal
    const initialOptions = {
        "client-id": "Abn4I9lzVopG5mFZm2JBFz5qw8u1UIhtclMtFOacAi3sxu-yB_B4JRwNmJnH-NYD75p1vrZfrYOfUUYC", 
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
                        
                        {/* Colonne Récapitulatif du cours (Dynamique) */}
                        <div className="recap-panier">
                            <h2>Récapitulatif</h2>
                            <div className="panier-card">
                                <div className="panier-info">
                                    <h3>{detailsCours.titre}</h3>
                                    <p>{detailsCours.description}</p>
                                </div>
                                <div className="panier-prix">
                                    <span>{detailsCours.prixAffichage}</span>
                                </div>
                            </div>
                            <div className="panier-total">
                                <span>Total à régler</span>
                                <span className="total-montant">{detailsCours.prixAffichage}</span>
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

                            {/* LE BLOC STRIPE */}
                            <div className="encart-stripe" style={{ maxWidth: '400px', margin: '0 auto 2rem' }}>
                                <Elements stripe={stripePromise}>
                                    {/* Le prix est envoyé dynamiquement au bouton Stripe */}
                                    <BoutonApplePay montant={parseFloat(detailsCours.prix)} nomCours={detailsCours.titre} />
                                </Elements>
                            </div>

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
                                                amount: { value: detailsCours.prix } // Le prix est envoyé dynamiquement à PayPal
                                            }],
                                            application_context: {
                                                shipping_preference: "NO_SHIPPING" 
                                            }
                                        });
                                    }}
                                    onApprove={async (data, actions) => {
                                        try {
                                            const response = await fetch("http://localhost:8000/valider-paiement.php", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({ 
                                                    orderID: data.orderID,
                                                    id_cours: detailsCours.id_cours // L'ID du cours est envoyé au PHP
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
                                {/* Le bouton retour ramène dynamiquement vers la bonne page */}
                                <Link to={detailsCours.lienRetour}>&larr; Retour aux détails du cours</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </PayPalScriptProvider>
    );
}

export default Paiement;