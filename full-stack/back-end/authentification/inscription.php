<?php
// Fichier : inscription.php

// 1. Autoriser React à communiquer avec ce fichier (CORS)
header('Access-Control-Allow-Origin: *'); // En production, remplacez * par l'URL de votre site
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// 2. Inclure la connexion à la base de données
require_once 'config/connexion.php';

// 3. Récupérer les données envoyées par React
$donnees = json_decode(file_get_contents("php://input"));

// Vérifier que toutes les infos sont bien présentes
if(
    !isset($donnees->prenom) || empty(trim($donnees->prenom)) ||
    !isset($donnees->nom) || empty(trim($donnees->nom)) ||
    !isset($donnees->email) || empty(trim($donnees->email)) ||
    !isset($donnees->mot_de_passe) || empty(trim($donnees->mot_de_passe))
) {
    http_response_code(400);
    echo json_encode(['erreur' => 'Veuillez remplir tous les champs.']);
    exit();
}

// Nettoyage basique
$prenom = htmlspecialchars(trim($donnees->prenom));
$nom = htmlspecialchars(trim($donnees->nom));
$email = filter_var(trim($donnees->email), FILTER_SANITIZE_EMAIL);
$mot_de_passe = $donnees->mot_de_passe;

// Vérifier si l'email est au bon format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['erreur' => 'Format d\'email invalide.']);
    exit();
}

try {
    // 4. Vérifier si l'email existe déjà dans la base
    $stmt = $pdo->prepare("SELECT id FROM utilisateurs WHERE email = :email");
    $stmt->execute(['email' => $email]);
    
    if($stmt->rowCount() > 0) {
        http_response_code(409);
        echo json_encode(['erreur' => 'Cet email est déjà utilisé.']);
        exit();
    }

    // 5. LA SÉCURITÉ : Hachage du mot de passe
    $mot_de_passe_hache = password_hash($mot_de_passe, PASSWORD_DEFAULT);

    // 6. Insérer le nouveau client en base de données
    $query = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe, role) 
              VALUES (:prenom, :nom, :email, :mot_de_passe, 'client')";
    
    $stmtInsert = $pdo->prepare($query);
    $succes = $stmtInsert->execute([
        'prenom' => $prenom,
        'nom' => $nom,
        'email' => $email,
        'mot_de_passe' => $mot_de_passe_hache
    ]);

    if($succes) {
        http_response_code(201);
        echo json_encode(['message' => 'Compte créé avec succès !']);
    } else {
        http_response_code(500);
        echo json_encode(['erreur' => 'Erreur lors de la création du compte.']);
    }

} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['erreur' => 'Erreur serveur : ' . $e->getMessage()]);
}
?>