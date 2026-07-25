<?php
    // 1. Autoriser React (ou n'importe quel domaine local) à parler à cette API
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header('Content-Type: application/json');

    // 2. Gérer la requête de pré-vérification (Preflight) automatique du navigateur
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
    
    require_once("../config/connexion.php");

    // 3. Récupérer les données envoyées par React
    $jsonDonnees = file_get_contents('php://input');
    $data = json_decode($jsonDonnees, true);
    $orderID = $data['orderID'] ?? null;

    if (!$orderID) {
        echo json_encode(['success' => false, 'message' => 'Aucun ID de commande fourni.']);
        exit;
    }

    // Vos identifiants PayPal Sandbox (À récupérer sur le Developer Dashboard de PayPal)
    $clientId = "Abn4I9lzVopG5mFZm2JBFz5qw8u1UIhtclMtFOacAi3sxu-yB_B4JRwNmJnH-NYD75p1vrZfrYOfUUYC";
    $secret = "EIVoV_8n9YW3MhP157EULCWz4z7-4GQWvsx9YqSGITOTGRT9xbBLdnbgqqt_aOkOPWSctoESiGVBjabq";

    // 3. Demander un jeton d'accès (Access Token) à PayPal via cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api-m.sandbox.paypal.com/v1/oauth2/token");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=client_credentials");
    curl_setopt($ch, CURLOPT_USERPWD, $clientId . ":" . $secret);
    $headers = [
        "Accept: application/json",
        "Accept-Language: fr_FR"
    ];
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $resultatToken = curl_exec($ch);
    $tokenInfo = json_decode($resultatToken, true);

    if (!isset($tokenInfo['access_token'])) {
        echo json_encode(['success' => false, 'message' => 'Impossible de s\'authentifier auprès de PayPal.']);
        exit;
    }

    $accessToken = $tokenInfo['access_token'];

    // 4. Vérifier la transaction avec l'API Orders de PayPal en utilisant le jeton
    curl_setopt($ch, CURLOPT_URL, "https://api-m.sandbox.paypal.com/v2/checkout/orders/" . $orderID);
    curl_setopt($ch, CURLOPT_HTTPGET, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_USERPWD, ""); // On efface les credentials précédents
    $headersAuth = [
        "Content-Type: application/json",
        "Authorization: Bearer " . $accessToken
    ];
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersAuth);

    $resultatCommande = curl_exec($ch);
    curl_close($ch);

    $infosCommande = json_decode($resultatCommande, true);

    // 5. Validation finale
    // 5. Validation finale (On accepte COMPLETED ou APPROVED)
    if (isset($infosCommande['status']) && in_array($infosCommande['status'], ['COMPLETED', 'APPROVED'])) {
        
        // 1. On extrait les infos de l'API PayPal
        $montant = $infosCommande['purchase_units'][0]['amount']['value'];
        $emailClient = $infosCommande['payer']['email_address'];
        $statutPaypal = $infosCommande['status']; // On récupère le vrai statut
        
        // 2. On s'assure de récupérer l'ID du cours (envoyé par React dans $data)
        $idCours = $data['id_cours'] ?? 'COURS_INCONNU';
        
        // 3. Assainissement (Sanitization)
        $idCoursClean = preg_replace('/[^a-zA-Z0-9_]/', '', $idCours);
        
        // 4. Préparation de la requête : On rend le statut dynamique
        $sql = "INSERT INTO acces_cours (email_client, id_cours, montant, statut) 
                VALUES (:email, :cours, :montant, :statut)";
        
        $stmt = $pdo->prepare($sql);
        
        // 5. Liaison stricte des paramètres (Binding)
        $stmt->bindParam(':email', $emailClient, PDO::PARAM_STR);
        $stmt->bindParam(':cours', $idCoursClean, PDO::PARAM_STR);
        $stmt->bindParam(':montant', $montant, PDO::PARAM_STR); 
        $stmt->bindParam(':statut', $statutPaypal, PDO::PARAM_STR); 
        
        // 6. Exécution dans la base de données locale
        $stmt->execute();
        
        // 7. On renvoie le succès à React
        echo json_encode([
            'success' => true, 
            'message' => 'Paiement de ' . $montant . '$ validé de manière sécurisée.',
            'email' => $emailClient
        ]);

    } else {
        echo json_encode([
            'success' => false, 
            'message' => 'La transaction PayPal n\'est pas validée (Statut : ' . ($infosCommande['status'] ?? 'Inconnu') . ')'
        ]);
    }
?>