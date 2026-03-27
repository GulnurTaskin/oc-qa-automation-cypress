# EcoBlissBath - Test Automation

## Contexte du projet

Ce projet a pour objectif d'automatiser les tests d'une application e-commerce (Eco Bliss Bath) en utilisant Cypress.

Dans le cadre de ce projet, j'interviens en tant que QA Engineer afin de :

* analyser les tests manuels existants
* automatiser des scénarios critiques
* vérifier le bon fonctionnement des API

Les scénarios automatisés ont été définis à partir du bilan de tests manuels.

---

## Prérequis

* Node.js
* Docker

---

## Installation

Cloner le projet :

```bash
git clone https://github.com/OpenClassrooms-Student-Center/Eco-Bliss-Bath-V2.git
cd Eco-Bliss-Bath-V2
```

---

## Lancer le projet

### Backend (Docker)

```bash
docker compose up -d
```

### Frontend

```bash
cd frontend
npm install
npm start
```
Application accessible sur :  
http://localhost:4200

---

## Lancer les tests Cypress

Depuis le dossier `frontend` :

### Mode interface

```bash
npx cypress open
```

### Mode headless

```bash
npx cypress run
```

---

## Tests automatisés

Les tests couvrent :

### Tests API

* Login avec un utilisateur
* Récupération de la liste des produits
* Récupération du détail d’un produit
* Récupération du panier utilisateur
* Ajout d’un produit au panier
* Ajout d’un avis

### Tests fonctionnels

* Connexion utilisateur
* Ajout d’un produit au panier

### Tests smoke

* Vérification des éléments essentiels (login, affichage, navigation)

### Test de sécurité

* Vérification d’une faille XSS sur les commentaires

---

## Structure du projet

```
cypress/
  e2e/
    api.cy.js
    connexion.cy.js
    panier.cy.js
    smoke.cy.js
    xss.cy.js
```

---

## Outils utilisés

* Cypress
* Docker
* JavaScript

---

## Auteur

Gulnur Taskin  
QA Engineer - Formation OpenClassrooms


## Projet original - OpenClassrooms

<div align="center">

# OpenClassrooms - Eco-Bliss-Bath
</div>

<p align="center">
    <img src="https://img.shields.io/badge/MariaDB-v11.7.2-blue">
    <img src="https://img.shields.io/badge/Symfony-v6.2-blue">
    <img src="https://img.shields.io/badge/Angular-v13.3.0-blue">
    <img src="https://img.shields.io/badge/docker--build-passing-brightgreen">
  <br><br><br>
</p>

# Prérequis
Pour démarrer cet applicatif web vous devez avoir les outils suivants:
- Docker
- NodeJs

# Installation et démarrage
Clonez le projet pour le récupérer
``` 
git clone https://github.com/OpenClassrooms-Student-Center/Eco-Bliss-Bath-V2.git
cd Eco-Bliss-Bath-V2
```
Pour démarrer l'API avec ça base de données.
```
docker compose up -d
```
# Pour démarrer le frontend de l'applicatif
Rendez-vous dans le dossier frontend
```
cd ./frontend
```
Installez les dépendances du projet
```
npm i
ou
npm install (si vous préférez)
```