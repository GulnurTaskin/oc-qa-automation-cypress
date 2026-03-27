# EcoBlissBath - Test Automation

## Contexte du projet

Ce projet a pour objectif d'automatiser les tests d'une application e-commerce (Eco Bliss Bath) en utilisant Cypress.

Dans le cadre de ce projet, j'interviens en tant que QA Engineer afin de :

* analyser les tests manuels existants
* sélectionner des scénarios critiques
* automatiser des scénarios critiques
* vérifier le bon fonctionnement des API

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
* Ajout au panier

### Tests smoke

* Parcours principal de l’application

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
## Livrables

- Rapport de campagne de test manuel (réalisé par une testeuse manuelle)
- Tests automatisés avec Cypress (basés sur ce rapport)

Les scénarios automatisés ont été sélectionnés à partir du rapport de test manuel afin de couvrir les parcours critiques de l’application.

## Auteur

Gulnur Taskin
Testeuse Logiciel (formation OpenClassrooms)
