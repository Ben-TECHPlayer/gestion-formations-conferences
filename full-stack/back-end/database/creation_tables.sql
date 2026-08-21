-- Créer la table COURS
CREATE TABLE COURS(
    idCours INT AUTO_INCREMENT PRIMARY KEY,
    nomCours VARCHAR(255)
);

INSERT INTO COURS VALUES (1,'Gestion');
INSERT INTO UTILISATEUR VALUES (1,'Ricardo','Tony','ricardo@ronaldo.com','','client','ecole-de-commerce','',0,CURRENT_TIMESTAMP);
INSERT INTO COMMANDE VALUES (1,1,'43RF34',CURRENT_TIMESTAMP,'');

-- Créer la table UTILISATEUR
CREATE TABLE UTILISATEUR(
    idUtilisateur INT AUTO_INCREMENT PRIMARY KEY,
    nomUtilisateur VARCHAR(255),
    prenomUtilisateur VARCHAR(255),
    emailUtilisateur VARCHAR(255) UNIQUE,
    mdpUtilisateur VARCHAR(255),  -- mot de passe de l'utilisateur illisible avec hesh
    roleUtilsateur VARCHAR(255) DEFAULT 'client',
    profilUtilisateur VARCHAR(255),
    -- attributs pour l'auth à 2 facteurs
    secret_2fa VARCHAR(255),
    is_2fa_enabled BOOLEAN DEFAULT 0,
    dateInscription DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Créer la table COMMANDE
CREATE TABLE COMMANDE(
    idCommande INT AUTO_INCREMENT PRIMARY KEY,
    idCours INT,
    idStripeCommande VARCHAR(255),
    dateCommande DATETIME DEFAULT CURRENT_TIMESTAMP,
    statutCommande VARCHAR(100) DEFAULT 'en attente',
    FOREIGN KEY idCours REFERENCES COURS(idCours)
);