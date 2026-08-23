<?php
    // 1. Autoriser React à communiquer avec ce fichier (CORS)
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    // Gestion de la requête de pré-vérification (Preflight) de React
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }

    // 2. Inclure la librairie Stripe
    // Si vous ne l'avez pas encore fait, il faudra lancer la commande : composer require stripe/stripe-php
    require_once 'vendor/autoload.php';

    
    \Stripe\Stripe::setApiKey('sk_test_51TyWALRp8adLoeJMCltYmGuBXPSuPIHT1ubGtgtkl407DtU3IBP94XWH60ynKdUajhyCwopU3S6uhI22YDVZ78fq00ZcxCpgDQ');

    try {
        // 4. On récupère les informations envoyées par React (le "colis")
        $jsonStr = file_get_contents('php://input');
        $jsonObj = json_decode($jsonStr);

        // Dans la réalité, on vérifierait en base de données le prix correspondant à $jsonObj->id_cours.
        // Pour l'instant, on simule un paiement de 150€.
        // ATTENTION : Stripe fonctionne en centimes ! 150€ = 15000 centimes.
        $montantEnCentimes = 15000; 

        // 5. On demande un ticket d'autorisation à Stripe (PaymentIntent)
        $paymentIntent = \Stripe\PaymentIntent::create([
            'amount' => $montantEnCentimes,
            'currency' => 'eur',
            // Cette ligne magique active automatiquement CB, Apple Pay, Google Pay, PayPal...
            'automatic_payment_methods' => [
                'enabled' => true,
            ],
        ]);

        // 6. On renvoie le ticket (clientSecret) à React
        $output = [
            'clientSecret' => $paymentIntent->client_secret,
        ];

        echo json_encode($output);

    } catch (Error $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
?>