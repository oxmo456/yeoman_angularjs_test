## J'ai testé Yeoman & AngularJS.

### Installation.

Pour installer YEOMAN rien de plus simple :

``` console
npm install -g yo grunt-cli bower
```

Pour pouvoir générer un projet **AngularJS**, il faut installer un **générateur** :

``` console
npm install generator-angular generator-karma
```

### Initialisation d'un projet.

Pour initilaiser un projet, il suffit d'executer cette commande :

``` console
yo angular --minsafe
```

*L'option* ```--minsafe``` *est importante pour pouvoir minifier le code AngularJS*

Une fois la génération terminée, il ne faut pas oublier de lancer ces commandes :

``` console
npm install
bower install --dev
```

Il est maintenant possible de lancer l'application avec cette commande :

``` console
grunt server
bower install --dev
```

Et pour lancer la suite de test :

``` console
grunt test
```

A ce stade, Yeoman nous a permis en quelques commandes d'avoir un projet AngularJS fonctionnel et testable.

De nombreux fichiers on été générés, comme par exemple :
Un fichier **robots.txt**, **une page 404**, un fichier **.htaccess**, etc.
Il y a meme dans le fichier **index.html** : un emplacement de prévu pour **GoogleAnalytics**, un commentaire pour ne pas oublier les icônes pour mobile, et une line pour que les utilisateur de IE7 installent **ChromeFrame** !
Il y a également un fichier de configuration pour les éditeurs et autres IDEs (mais il ne semble pas avoir de plugin pour IntelliJ). Ce fichier permet de définir les nombre d'espaces pour l'indentation les types de retour chariot, etc.

ATTENTION : Après l'installation du projet avec Twitter-Bootstrap, il y a une erreur au niveaux des images contenant les packs d'icônes. Pour régler ce problème il suffit de coller les images sous project_name/app/images/.

## Le projet.

Afin de pleinement tester Yeoman avec AngularJS, je vais créer une petite application, une calculatrice :)

Je commence par initialiser un dépôt GIT.

``` console
git init
```

Bonne nouvelle, un fichier .gitignore a été ajouté au projet lors de la génération du projet avec tous les éléments a exclure de notre projet. Je n'ai plus qu'a ajouter les fichier relatifs a IntelliJ (je pourrais aussi ajouter ces exclusion dans la configuration globale de Git).
Je termine par le premier commit :

``` console
git add .
git commit -m"initial commit"
```

Dans la foulée je crée une branche de travail :

``` console
git checkout -b dev
```

La première chose que je vais faire c'est de changer la configuration de la suite de test pour utiliser PhantomJS (headless browser). Je fais ce choix car comme je travail sur un petit écran, l'espace de travail et limité, je préfère donc ouvrir le moins de centre possible pendant le développement. Dans l'absolu il faudrait quand même lancer les tests sur le plus de navigateurs possible.
Dans le fichier karma.conf.js, je modifie la valeur browsers :

``` js
browsers = ['PhantomJS'];
```

Et j'ajoute ces modification dans le dépôt GIT :

``` console
git add .
git commit -m"updated test config"
```