-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  jeu. 22 juil. 2021 à 10:39
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `deviantart`
--
CREATE DATABASE IF NOT EXISTS `deviantart` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `deviantart`;

-- --------------------------------------------------------

--
-- Structure de la table `collections`
--

DROP TABLE IF EXISTS `collections`;
CREATE TABLE IF NOT EXISTS `collections` (
  `idCollection` int(11) NOT NULL AUTO_INCREMENT,
  `titreCollection` varchar(255) NOT NULL,
  `descriptionCollection` int(11) NOT NULL,
  `idMembre` int(11) NOT NULL,
  PRIMARY KEY (`idCollection`),
  KEY `idMembre` (`idMembre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
CREATE TABLE IF NOT EXISTS `commentaires` (
  `idCommentaire` int(11) NOT NULL AUTO_INCREMENT,
  `contenu` text NOT NULL,
  `dateCommentaire` int(11) NOT NULL,
  `idMembre` int(11) NOT NULL,
  `idPublication` int(11) NOT NULL,
  `idComParent` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCommentaire`),
  KEY `idMembre` (`idMembre`) USING BTREE,
  KEY `idPublication` (`idPublication`) USING BTREE,
  KEY `idComParent` (`idComParent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contenuscollection`
--

DROP TABLE IF EXISTS `contenuscollection`;
CREATE TABLE IF NOT EXISTS `contenuscollection` (
  `idPublication` int(11) NOT NULL,
  `idCollection` int(11) NOT NULL,
  PRIMARY KEY (`idPublication`,`idCollection`),
  KEY `idPublication` (`idPublication`),
  KEY `idCollection` (`idCollection`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

DROP TABLE IF EXISTS `membres`;
CREATE TABLE IF NOT EXISTS `membres` (
  `idMembre` int(11) NOT NULL AUTO_INCREMENT,
  `nomUtilisateur` varchar(100) NOT NULL,
  `dateDeNaissance` date NOT NULL,
  `pays` varchar(255) NOT NULL,
  `sexe` enum('Homme','Femme') NOT NULL,
  `email` varchar(255) NOT NULL,
  `motDePasse` varchar(255) NOT NULL,
  `dateCreation` date NOT NULL,
  PRIMARY KEY (`idMembre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `publications`
--

DROP TABLE IF EXISTS `publications`;
CREATE TABLE IF NOT EXISTS `publications` (
  `idPublication` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `lienImage` varchar(255) NOT NULL,
  `datePublication` datetime NOT NULL,
  `nombreVues` int(11) NOT NULL DEFAULT '0',
  `type` enum('Art','Post') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Art',
  `idMembre` int(11) NOT NULL,
  `idTopic` int(11) NOT NULL,
  PRIMARY KEY (`idPublication`),
  KEY `idMembre` (`idMembre`),
  KEY `idTopic` (`idTopic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

DROP TABLE IF EXISTS `tags`;
CREATE TABLE IF NOT EXISTS `tags` (
  `libelleTag` varchar(255) NOT NULL,
  PRIMARY KEY (`libelleTag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tagspublication`
--

DROP TABLE IF EXISTS `tagspublication`;
CREATE TABLE IF NOT EXISTS `tagspublication` (
  `libelleTag` varchar(255) NOT NULL,
  `idPublication` int(11) NOT NULL,
  PRIMARY KEY (`libelleTag`,`idPublication`),
  KEY `fk_tagspub_idPublication` (`idPublication`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `topics`
--

DROP TABLE IF EXISTS `topics`;
CREATE TABLE IF NOT EXISTS `topics` (
  `idTopic` int(11) NOT NULL AUTO_INCREMENT,
  `nomTopic` varchar(255) NOT NULL,
  PRIMARY KEY (`idTopic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `collections`
--
ALTER TABLE `collections`
  ADD CONSTRAINT `fk_collection_idMembre` FOREIGN KEY (`idMembre`) REFERENCES `membres` (`idMembre`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `fk_com_idMembre` FOREIGN KEY (`idMembre`) REFERENCES `membres` (`idMembre`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_com_idPublication` FOREIGN KEY (`idPublication`) REFERENCES `publications` (`idPublication`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_com_parent` FOREIGN KEY (`idComParent`) REFERENCES `commentaires` (`idCommentaire`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `contenuscollection`
--
ALTER TABLE `contenuscollection`
  ADD CONSTRAINT `fk_cc_idCollection` FOREIGN KEY (`idCollection`) REFERENCES `collections` (`idCollection`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_cc_idPublication` FOREIGN KEY (`idPublication`) REFERENCES `publications` (`idPublication`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `publications`
--
ALTER TABLE `publications`
  ADD CONSTRAINT `fk_pub_idMembre` FOREIGN KEY (`idMembre`) REFERENCES `membres` (`idMembre`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_pub_idTopic` FOREIGN KEY (`idTopic`) REFERENCES `topics` (`idTopic`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `tagspublication`
--
ALTER TABLE `tagspublication`
  ADD CONSTRAINT `fk_tagspub_idPublication` FOREIGN KEY (`idPublication`) REFERENCES `publications` (`idPublication`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_tagspub_tags` FOREIGN KEY (`libelleTag`) REFERENCES `tags` (`libelleTag`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
