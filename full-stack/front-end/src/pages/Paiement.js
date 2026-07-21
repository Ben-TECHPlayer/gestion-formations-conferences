// Importer React ainsi que ses hooks, ses routeurs
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importer les dépendances PayPal pour permettre la mise en place du paiement par PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Importer la customisation de cette page
import '../styles/pages/Paiement.css';

function Paiement() {

    // Ce state permet de savoir si Mastercard est prêt
    const [isMasterpassLoaded, setIsMasterpassLoaded] = useState(false);
    const [isApplePayAvailable, setIsApplePayAvailable] = useState(true); // Apple Pay

    // Charger le script au démarrage du composant
    useEffect(() => {
        // 1. Chargement de Masterpass
        if (window.masterpass) {
            setIsMasterpassLoaded(true);
        } else {
            const script = document.createElement('script');
            script.src = "https://sandbox.masterpass.com/integration/merchant.js";
            script.async = true;
            script.onload = () => setIsMasterpassLoaded(true);
            document.body.appendChild(script);
        }

        // 2. Détection d'Apple Pay
        // On vérifie si l'API est présente dans la fenêtre du navigateur
        if (window.ApplePaySession && window.ApplePaySession.canMakePayments()) {
            setIsApplePayAvailable(true);
        }
    }, []);

    const handleMasterpassCheckout = () => {
        console.log("1. Bouton cliqué !");
        
        if (window.masterpass) {
            console.log("2. L'objet Masterpass est bien détecté dans la page.");
            try {
                window.masterpass.checkout({
                    "checkoutId": "c26966b0eae94a3fbe47f994b94394b2", 
                    "allowedCardTypes": ["master,amex,diners,discover,jcb,maestro,visa"], 
                    "amount": "789.53", 
                    "currency": "USD", 
                    "shippingLocationProfile": "US,AU,BE", 
                    "suppress3Ds": false, 
                    "suppressShippingAddress": false, 
                    "cartId": "1efed583-1824-436a-869f-286ebdb22ae2", 
                    "callbackUrl": "http://localhost:3000/retour-mastercard" 
                });
                console.log("3. La requête de checkout a été envoyée.");
            } catch (error) {
                console.error("ERREUR lors de l'appel à masterpass.checkout :", error);
            }
        } else {
            // Cela ne devrait plus arriver avec la sécurité du bouton désactivé
            console.error("ERREUR CRITIQUE : masterpass n'est toujours pas là.");
        }
    };

    const handleApplePayClick = () => {
        alert("Logique Apple Pay à implémenter plus tard !");
        // Quand vous serez prêt, c'est ici qu'on créera l'objet new ApplePaySession(...)
    };

    // Configurer globalement PayPal
    const initialOptions = {
        "client-id": "test", // À remplacer par votre vrai Client ID depuis le dashboard développeur PayPal
        currency: "USD",
        intent: "capture",
    };

    

    return (
        // Le Provider englobe la vue pour fournir l'accès à l'API PayPal
        <PayPalScriptProvider options={initialOptions}>
            <main>
                <h1>Paiement</h1>
                <h2>Cours</h2>
                {/* Intégrer cartes(MasterCard, VISA, CB, American Express) */}
                <div style={{ marginBottom: '20px' }}>
                    <button 
                        onClick={handleMasterpassCheckout} 
                        /* Le bouton est grisé et incliquable tant que le script n'est pas là */
                        disabled={!isMasterpassLoaded}
                        style={{ 
                            border: 'none', 
                            background: 'none', 
                            padding: 0, 
                            cursor: isMasterpassLoaded ? 'pointer' : 'not-allowed',
                            opacity: isMasterpassLoaded ? 1 : 0.5
                        }}
                    >
                        <img 
                            src="https://sandbox.src.mastercard.com/assets/img/btn/src_chk_btn_178x032px.svg?locale=fr_FR&paymentmethod=master,visa,amex&checkoutid=c26966b0eae94a3fbe47f994b94394b2" 
                            alt="Payer avec Click to Pay" 
                        />
                    </button>
                    {/* Petit message d'attente pour comprendre ce qui se passe */}
                    {!isMasterpassLoaded && <p style={{ fontSize: '12px', color: 'gray' }}>Chargement du paiement sécurisé...</p>}
                </div>

                {/* Intégrer Apple Pay */}
                {isApplePayAvailable && (
                    <div style={{ marginBottom: '30px' }}>
                        <button 
                            onClick={handleApplePayClick}
                            style={{
                                display: 'inline-block',
                                width: '250px',
                                height: '40px',
                                backgroundColor: 'black',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer',
                                // Ceci utilise l'image officielle hébergée par Apple pour le web
                                backgroundImage: 'url(https://applepay.cdn-apple.com/assets/initial-apple-pay-logo.svg)',
                                backgroundSize: '60%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            aria-label="Payer avec Apple Pay"
                        />
                    </div>
                )}

                {/* Intégrer PayPal */}
                <div style={{ maxWidth: "250px" }}> {/* Limite la largeur car les boutons prennent 100% de l'espace parent par défaut */}
                    <PayPalButtons 
                        // 1. Création de la transaction avec les détails du cours
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: "Module de formation pratique : Vente et Management",
                                        amount: {
                                            currency_code: "USD",
                                            value: "789.53",
                                        },
                                    },
                                ],
                            });
                        }}
                        // 2. Ce qui se passe quand le client valide l'achat sur la popup PayPal
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const nomClient = details.payer.name.given_name;
                            alert(`Paiement réussi, merci ${nomClient} ! L'accès au cours est débloqué.`);
                            
                            // C'est ici que vous ferez un appel fetch/axios vers votre backend 
                            // pour enregistrer l'achat dans la base de données.
                        }}
                        // 3. Gestion des erreurs (fondamental pour l'expérience utilisateur)
                        onError={(err) => {
                            console.error("Erreur de paiement PayPal:", err);
                            alert("Une erreur est survenue lors du paiement avec PayPal.");
                        }}
                    />
                </div>
                
                
            </main>
        </PayPalScriptProvider>
    );
}

export default Paiement;
