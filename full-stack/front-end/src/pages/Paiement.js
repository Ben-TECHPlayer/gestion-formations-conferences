// Importer React ainsi que ses hooks, ses routeurs
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Importer Stripe ainsi que ses dépendances pour permettre la mise en place du paiement par Apple Pay, PayPal et carte bleue
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Importer la customisation de cette page
import '../styles/pages/Paiement.css';


// Remplacez par votre VRAIE clé publique "Test" récupérée sur le dashboard Stripe (pk_test_...)
const stripePromise = loadStripe('pk_test_51TyWALRp8adLoeJMLPhOfGcShzgQ3QXCCgOJVdVfJefqdFtlagKliVvbPvG6vy7xy1aoYdrtnOaA3OvA5T5bNN1r00ljHBPMX9');

// 1. Le composant interne qui contient le vrai bouton "Payer"
const FormulaireStripe = ({ montant }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Sécurité : on attend que Stripe soit bien chargé
        if (!stripe || !elements) return;
        
        setIsProcessing(true);

        // LA VRAIE MAGIE STRIPE : On confirme le paiement
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // L'URL où le client sera renvoyé une fois le paiement validé par sa banque.
                // Adaptez le "3000" si votre React tourne sur un autre port (ex: 5173 avec Vite)
                return_url: "http://localhost:3000/succes",
                // alerte with const alerte = alert("Paiement validé !"),
            },
        });

        // Si on arrive ici, c'est qu'il y a eu une erreur de carte (fonds insuffisants, CVC faux...)
        if (error) {
            // On affiche l'erreur à l'utilisateur (en français, Stripe s'occupe de la traduction)
            alert(error.message); 
        }

        // Note : S'il n'y a pas d'erreur, Stripe quitte cette page 
        // et redirige automatiquement vers le return_url.
        
        
        
        setIsProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="formulaire-paiement">
            {/* C'est CE composant magique qui affichera CB, PayPal, Apple Pay... */}
            <PaymentElement />
            
            <button disabled={isProcessing || !stripe} className="btn-payer">
                {isProcessing ? "Traitement..." : `Payer ${montant}`}
            </button>
        </form>
    );
};

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

    // La fameuse clé secrète (client_secret) qui viendra du PHP
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // React demande le ticket au serveur PHP
        fetch("http://localhost:8000/creer-paiement.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // On envoie l'ID du cours pour que le PHP sache quoi facturer
            body: JSON.stringify({ id_cours: detailsCours.id_cours }),
        })
            .then((res) => res.json())
            .then((data) => {
                // Dès qu'on reçoit le ticket, on le stocke et le formulaire s'affiche !
                setClientSecret(data.clientSecret);
            })
            .catch((erreur) => {
                console.error("Erreur de connexion au serveur PHP :", erreur);
            });
    }, [detailsCours.id_cours]);

    const options = {
        clientSecret: clientSecret,
        appearance: { theme: 'stripe' },
    };

    return (
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

                        {clientSecret ? (
                            <Elements stripe={stripePromise} options={options}>
                                <FormulaireStripe montant={detailsCours.prixAffichage} />
                            </Elements>
                        ) : (
                            <div className="chargement-paiement">
                                <p>Connexion sécurisée au serveur de paiement en cours...</p>
                            </div>
                        )}

                        <div className="retour-lien">
                            {/* Le bouton retour ramène dynamiquement vers la bonne page */}
                            <Link to={detailsCours.lienRetour}>&larr; Retour aux détails du cours</Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        
    );
}

export default Paiement;