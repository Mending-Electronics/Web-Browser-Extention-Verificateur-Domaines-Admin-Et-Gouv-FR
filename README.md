# Vérificateur de nom de domaines Administratifs et Gouvernementaux Français

## Aperçu

Le **Vérificateur de nom de domaines Administratifs et Gouvernementaux Français** est une extension Chrome et Microsoft Edge conçue pour renforcer la sécurité en ligne en identifiant les liens URL malveillants et homographiques. Son usage est accès sur la vérification des liens URL administratifs et gouvernementaux français.


## Lexique
- **Nom de Domaine** : C’est l’adresse unique qui permet d'identifier un site web sur Internet.
- **Attaque Homographique** : C’est un lien qui utilise des caractères similaires d’autres alphabets (comme le cyrillique) pour tromper les utilisateurs. Par exemple, le caractère “о” en cyrillique ressemble à “o” en latin, mais ils sont différents. Il peuvent sembler authentiques visuellement, mais ils peuvent rediriger l'utilisateur vers une page de phishing.

*Voici deux liens visuellement identiques (Homographiques) :*

1. https://www.example.com
2. https://www.exаmple.com *(contient un caractère "а" en cyrillique)*




## Fonctionnalités

### Vérification de l'url de l'onglet actif
- **Vérification des URL** : Vérifie si l'URL de l'onglet actif correspond à une liste de sites web de confiance.
- **Notification par Icône** : Change l'icône de l'extension en fonction de l'authenticité de l'URL.
- **Notification Popup** : Affiche un message indiquant si le site web est authentique ou non.

### Vérification manuelle d'un lien URL
- **Soumettre un lien URL à vérifier** : Permet de soumettre un lien à vérification avant d'y accéder. (cliquer dessus)

## Installation

### Chrome
1. Clonez ou téléchargez le dépôt.
2. Ouvrez Chrome et naviguez vers `chrome://extensions/`.
3. Activez le "Mode développeur" en haut à droite.
4. Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le répertoire "Extention (Google - MS Edge)" contenant les fichiers de l'extension.

### Edge
1. Clonez ou téléchargez le dépôt.
2. Ouvrez Edge et naviguez vers `edge://extensions/`.
3. Activez le "Mode développeur" dans le volet de gauche.
4. Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le répertoire "Extention (Google - MS Edge)" contenant les fichiers de l'extension.



## URL de Confiance

L'extension vérifie actuellement plusieurs sites web gouvernementaux et administratifs français.
- Liste des liens accessibles depuis l'extension.

# Capture

## Icône *notification*

![icon](https://github.com/Mending-Electronics/Web-Browser-Extention-Verificateur-URL-Gouv-FR/blob/main/Capture/Capture0.png?raw=true "icon")

## Lien de confiance

### notification sur l'icône

![icon](https://github.com/Mending-Electronics/Web-Browser-Extention-Verificateur-URL-Gouv-FR/blob/main/Capture/Capture1.png?raw=true "icon")

### mention : "Ce site est sûr ! Le nom de domaine est authentique."

![icon](https://github.com/Mending-Electronics/Web-Browser-Extention-Verificateur-URL-Gouv-FR/blob/main/Capture/Capture2.png?raw=true "icon")


## Lien malvaillant ou non connu de l'extention
### mention : "Information : Le nom de domaine n'a pas été reconnu."

![icon](https://github.com/Mending-Electronics/Web-Browser-Extention-Verificateur-URL-Gouv-FR/blob/main/Capture/Capture5.png?raw=true "icon")


## Vérifier manuellement un lien avant de cliquer dessus

### Le nom de domaine est authentique
 
![icon](https://github.com/Mending-Electronics/Web-Browser-Extention-Verificateur-URL-Gouv-FR/blob/main/Capture/Capture3.png?raw=true "icon")

### lien contenant le caractère "о" du clavier cyrilique
*Le nom de domaine n'a pas été reconnu.*

![icon](https://github.com/Mending-Electronics/Web-Browser-Extention-Verificateur-URL-Gouv-FR/blob/main/Capture/Capture4.png?raw=true "icon")

## Licence

Ce projet est à des fins éducatives et n'est pas destiné à un usage commercial.
