<?php
// Autoriser React à communiquer avec ce fichier (CORS)
header('Access-Control-Allow-Origin: *'); // En production, remplacez * par votre domaine
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Inclure la connexion à la base de données
require_once 'config/connexion.php';

// Récupérer les données envoyées par le formulaire React
$donnees = json_decode(file_get_contents("php://input"));

// Vérifier que l'email et le mot de passe ont bien été envoyés
if(
    !isset($donnees->email) || empty(trim($donnees->email)) ||
    !isset($donnees->mot_de_passe) || empty(trim($donnees->mot_de_passe))
) {
    http_response_code(400);
    echo json_encode(['erreur' => 'Veuillez renseigner votre email et votre mot de passe.']);
    exit();
}

$email = filter_var(trim($donnees->email), FILTER_SANITIZE_EMAIL);
$mot_de_passe = $donnees->mot_de_passe;

try {
    // Chercher l'utilisateur dans la base de données via son email
    $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $utilisateur = $stmt->fetch();

    // LA SÉCURITÉ : Vérifier si l'utilisateur existe ET si le mot de passe est bon
    // password_verify() compare le texte tapé avec la version hachée stockée en BDD
    if ($utilisateur && password_verify($mot_de_passe, $utilisateur['mot_de_passe'])) {
        
        // Succès ! On renvoie les infos utiles à React (MAIS JAMAIS LE MOT DE PASSE)
        http_response_code(200);
        echo json_encode([
            'succes' => true,
            'message' => 'Connexion réussie !',
            'utilisateur' => [
                'id' => $utilisateur['id'],
                'prenom' => $utilisateur['prenom'],
                'nom' => $utilisateur['nom'],
                'email' => $utilisateur['email'],
                'role' => $utilisateur['role'] // C'est cette donnée qui permettra de cacher ou afficher vos boutons administrateur !
            ]
        ]);

    } else {
        // Échec : On ne dit jamais si c'est l'email ou le mot de passe qui est faux.
        // Cela empêche un pirate de deviner quels emails existent dans votre BDD.
        http_response_code(401); // 401 Unauthorized
        echo json_encode(['succes' => false, 'erreur' => 'Identifiants incorrects.']);
    }

} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['succes' => false, 'erreur' => 'Erreur serveur.']);
}
?>