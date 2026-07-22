<?php
// 1. Autoriser React (ou n'importe quel domaine local) à parler à cette API
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// 2. Gérer la requête de pré-vérification (Preflight) automatique du navigateur
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

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
if (isset($infosCommande['status']) && $infosCommande['status'] === 'COMPLETED') {
    
    // Le paiement est réel et l'argent est reçu !
    $montant = $infosCommande['purchase_units'][0]['amount']['value'];
    $emailClient = $infosCommande['payer']['email_address'];
    
    // ---> ICI : INTÉGRATION MYSQL (PDO) <---
    // C'est à ce moment précis que vous devez vous connecter à votre base de données MySQL
    // et faire un "INSERT INTO" ou "UPDATE" pour donner accès au TP à cet utilisateur.
    /*
    $pdo = new PDO('mysql:host=localhost;dbname=votre_bdd;charset=utf8', 'root', '');
    $stmt = $pdo->prepare("INSERT INTO acces_cours (email, id_cours, statut) VALUES (?, ?, 'ACTIF')");
    $stmt->execute([$emailClient, 'TP_VENTE_MANAGEMENT']);
    */
    
    echo json_encode([
        'success' => true, 
        'message' => 'Paiement de ' . $montant . '$ validé et accès accordé.',
        'email' => $emailClient
    ]);

} else {
    // La transaction est en attente, refusée, ou c'est une tentative de fraude
    echo json_encode([
        'success' => false, 
        'message' => 'La transaction PayPal n\'est pas validée (Statut : ' . ($infosCommande['status'] ?? 'Inconnu') . ')'
    ]);
}
?>