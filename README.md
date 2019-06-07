# bordeaux-0219-vinoveritas
Lien vers le projet :http://campus-bordeaux.ovh/vinoveritas/
## API

* **GET** /wines
  * http://51.68.18.101:3002/vinoveritas/api/wines
  > Permet de récupérer tous les vins

* **GET** /wines/:id
  * http://51.68.18.101:3002/vinoveritas/api/wines/:id
  > Permet de récupérer un vin en fonction de l'ID passé en paramètre

* **GET** /wines/find
  * http://51.68.18.101:3002/vinoveritas/api/wines/find
  > Permet de récupérer un vin en fonction de certains critères
  > Ex : http://51.68.18.101:3002/vinoveritas/api/wines/find?budget=less30&dish=seafood&characteristics=mellow
  > Ex : http://51.68.18.101:3002/vinoveritas/api/wines/find?budget=more30&dish=seafood&characteristics=wooded

* **GET** /wines/random
  * http://51.68.18.101:3002/vinoveritas/api/wines/random
  > Permet de récupérer un vin aléatoire

* **POST** /wines/
  * http://51.68.18.101:3002/vinoveritas/api/wines/
  > Permet de sauvegarder un vin.
  ```js
    {
      "bio": 0,
      "budget": 12,
      "characteristics": "moelleux",
      "description": "Un petit vin blanc pas piqué des hannetons",
      "dish": "poissons",
      "image": "https://www.vinatis.com/33684-detail_default/sauvignon-blanc-2017-la-petite-perriere-domaine-la-perriere.png",
      "link": "https://www.domainelaperriere.com/",
      "nameLink": "Domaine de La Perrière",
      "title": "La petite Perrière",
      "wineDress": "blanc"
    }
  ```

* **PUT** /wines/:id
  * http://51.68.18.101:3002/vinoveritas/api/wines/:id
  > Permet de modifier un vin en fonction de l'ID passé en paramètre
  ```js
    {
      "dish": "viande rouge",
      "wineDress": "rouge"
    }
  ```

* **DELETE** /wines/:id
  * http://51.68.18.101:3002/vinoveritas/api/wines/:id
  > Permet de supprimer un vin en fonction de l'ID passé en paramètre
