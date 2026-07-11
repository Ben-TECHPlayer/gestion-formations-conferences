<?php
header("Content-Type: application/json");

$pdo = new PDO("mysql:host=localhost;dbname=gestion_formations;charset=utf8", "root", "");

$id = intval($_GET["id"]);

$stmt = $pdo->prepare("SELECT * FROM candidatures_lycee WHERE id = ?");
$stmt->execute([$id]);

echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));