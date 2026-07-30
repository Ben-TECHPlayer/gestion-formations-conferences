import React, { useState, useEffect } from 'react';
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';

const BoutonApplePay = ({ montant, nomCours }) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'FR',
                currency: 'eur',
                total: {
                    label: nomCours,
                    // Stripe fonctionne en centimes d'euros. Donc 50€ = 5000 centimes.
                    amount: Math.round(montant * 100), 
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            // On vérifie si l'appareil du client supporte Apple Pay / Google Pay
            pr.canMakePayment().then((result) => {
                if (result) {
                    setPaymentRequest(pr);
                }
            });

            // Ce qui se passe quand le client valide avec FaceID / TouchID
            pr.on('paymentmethod', async (ev) => {
                // Ici on appellera notre API PHP plus tard !
                console.log("Méthode de paiement générée avec succès :", ev.paymentMethod);
                
                // On signale à Apple Pay que tout est bon pour l'instant
                ev.complete('success'); 
                alert("Paiement validé par Apple Pay ! (Simulation)");
            });
        }
    }, [stripe, montant, nomCours]);

    if (paymentRequest) {
        return (
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <PaymentRequestButtonElement options={{ paymentRequest }} />
            </div>
        );
    }

    // Ce qui s'affiche si le client est sur un PC Windows classique sans portefeuille numérique
    return (
        <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', color: '#6c757d' }}>
            <em>Apple Pay n'est pas disponible sur cet appareil.</em>
        </div>
    );
};

export default BoutonApplePay;