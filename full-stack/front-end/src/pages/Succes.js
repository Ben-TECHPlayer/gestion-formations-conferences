import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Succes() {
    // Ce hook permet de lire les paramètres cachés dans l'URL par Stripe
    const [searchParams] = useSearchParams();
    const status = searchParams.get('redirect_status');

    return (
        <main className="succes-page" style={{ textAlign: 'center', padding: '5rem 2rem', minHeight: '60vh' }}>
            <div className="succes-container" style={{ maxWidth: '600px', margin: '0 auto', background: '#f8f9fa', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                
                {status === 'succeeded' ? (
                    <>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                        <h1 style={{ color: '#28a745', marginBottom: '1rem' }}>Paiement validé avec succès !</h1>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                            Merci pour votre confiance. Votre place pour l'atelier est bien réservée. Vous allez recevoir un email de confirmation d'ici quelques minutes.
                        </p>
                    </>
                ) : (
                    <>
                        {/* Si l'utilisateur accède à la page sans avoir payé, ou si le paiement est en attente */}
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏳</div>
                        <h1 style={{ color: '#f39c12', marginBottom: '1rem' }}>Statut de la commande</h1>
                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                            Nous vérifions l'état de votre paiement. Si vous venez de le finaliser, votre accès sera débloqué très prochainement.
                        </p>
                    </>
                )}

                <Link 
                    to="/" 
                    style={{ 
                        display: 'inline-block', 
                        padding: '12px 24px', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        textDecoration: 'none', 
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        transition: 'background 0.3s'
                    }}
                >
                    Retour à l'accueil
                </Link>
            </div>
        </main>
    );
}

export default Succes;