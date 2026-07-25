<?php
    $host = '127.0.0.1';
    $dbname = 'plateforme_commerce'; // Vérifiez que c'est l'orthographe exacte
    $username = 'root';
    $password = '';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // 🚨 MODIFICATION ICI : On renvoie un faux succès mais un vrai message JSON
        // Cela empêche React de planter avec l'erreur "Unexpected token E"
        echo json_encode([
            'success' => false, 
            'message' => 'Erreur de base de données : ' . $e->getMessage()
        ]);
        exit;
    }
?>