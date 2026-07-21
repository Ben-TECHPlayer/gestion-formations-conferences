// Importer React ainsi que ses hooks, routeurs et paramètres de recherches
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function RetourMastercard() {
    // Permet de lire les paramètres dans l'URL (ex: ?oauth_token=12345)
    const [searchParams] = useSearchParams();
    const [statut, setStatut] = useState('Vérification en cours...');

    useEffect(() => {
        // Mastercard renvoie généralement un oauth_token et un oauth_verifier
        const token = searchParams.get('oauth_token');
        const verifier = searchParams.get('oauth_verifier');
        // Parfois c'est un transactionId selon la version de l'API
        const transactionId = searchParams.get('transactionId'); 

        if (token || transactionId) {
            // Confirmer que le client est bien revenu de Mastercard avec un jeton
            setStatut('Paiement autorisé ! Votre accès aux cours de management est débloqué.');
            console.log("Données de transaction reçues :", { token, verifier, transactionId });
            
            // Plus tard : C'est ce jeton que vous enverrez au backend PHP
        } else {
            setStatut("Erreur : Aucune donnée de paiement n'a été reçue.");
        }
    }, [searchParams]);

    return (
        <main style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Statut du paiement Mastercard</h1>
            <p>{statut}</p>
            <Link to="/cours" style={{ padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                Aller à mes cours
            </Link>
        </main>
    );
}

export default RetourMastercard;