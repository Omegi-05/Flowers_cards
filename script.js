// La liste de cartes sur les fleurs aqskip//
const fleurCards = [
  {
    name: "Gypsophile ✅",
    image: "https://www.dutchgrown.fr/cdn/shop/collections/Gypsophile.jpg?v=1698651968", //une URL comme https et en png //
    properties: {
      hp: 100,
      pétale: 600,
      attack: "Boule de fleurs",
    },
    description: {
      text: "Plusieurs petite boules blanches en guise de fleurs, très utilisé pour les bouquets.",
      habitat: "Montagne ⛰️",
      pique: false,
      couleur: 4
    }
  },
  {
    name: "Gerbera ✅",
    image: "https://i.ytimg.com/vi/tFHJoCcxobI/maxresdefault.jpg", //c les images//
    properties: {
      hp: 90,
      pétale: 50,
      attack: "Pétale tranchante",
    },
    description: {
      text: "A ne pas confondre avec les germinis qui sont plus petite avec leurs centre noir.  ",
      habitat: "Afrique du Sud, Asie 🌲",
      pique: false,
      couleur: 10 
    }
  },
  {
    name: "Rose ⚠️",
    image: "https://blog.roses-guillot.com/wp-content/uploads/Formes-des-Roses-Guillot-2000x1200.jpeg",
    properties: {
      hp: 30,
      pétale: 36,
      attack: "Racines qui piques",
    },
    description: {
      text: "Les roses sont les fleurs les plus courantes au monde pour leurs charmes et leurs épines.",
      habitat: "Plaine, forêt 🌲",
      pique: true,
      couleur: 8
    }
  },
  {
    name: "Santini ✅",
    image: "https://www.jardineriepasero.com/img/bitblog/b/1/231/lg-b-chrysanthemes.jpg",
    properties: {
      hp: 5000000,
      pétale: 87454112513351,
      attack: "Coup de fleurs",
    },
    description: {
      text: "Elle ressemble a des chrysanthemes en version mini et en très jolie.",
      habitat: "Japon,Chine 🌲",
      pique: false,
      couleur: 8
    }
  },
  {
    name: "Germini ✅",
    image: "https://www.carrementfleurs.com/modules/prestablog/views/img/grid-for-1-7/up-img/thumb_123.jpg?1d3e6e522b3569b6998fca58cd80dde9",
    properties: {
      hp: 70,
      pétale: 376,
      attack: "Fouet Lianes",
    },
    description: {
      text: "Des Gerberas versions mini et sans couleurs au centre.",
      habitat: "Soleil 🌲",
      pique: false,
      couleur: 8
    }
  },
  {
    name: "Lys ✅",
    image: "https://emova-monceaufleurs-fr-storage.omn.proximis.com/Imagestorage/images/740/740/6441fa8c75b7c_MF_FicheProduit_AvrilPEtitprix2023_910x10903.jpg",
    properties: {
      hp: 70000,
      pétale: 8,
      attack: "Spray pollen",
    },
    description: {
      text: "Une très grande fleurs inspirant a l'hibiscus, elle mets du pollen de partout. ",
      habitat: "Forestier, Montagne ⛰️🌲",
      pique: false,
      couleur: 8
    }
  },
  {
    name: "Lentisque ⚠️",
    image: "https://i0.wp.com/plante-essentielle.com/wp-content/uploads/2016/07/huile-essentielle-lentisque-pistachier.jpg?fit=4288%2C3216&ssl=1", //une URL comme https et en png //
    properties: {
      hp: 1,
      pétale: 10,
      attack: "mitraille de boules",
    },
    description: {
      text: "c'est un feuillage très utiliser dans les bouquets de fleurs, souvent accompagnée avec les roses rouges et le gypsophile. ",
      habitat: "Rocher, Soleil ⛰️",
      pique: true,
      couleur: 1
    }
  },
  {
    name: "Eucalyptus ✅",
    image: "https://s.alicdn.com/@sc04/kf/H932fe9d6ff534978b7aedc0895805a372.jpg_720x720q50.jpg", 
    properties: {
      hp: 250,
      pétale: 57,
      attack: "Odeur forte",
    },
    description: {
      text: "Ceuillis sur des arbres d'eucalyptus, ses écorces sont aussi utilisés.",
      habitat: "Tropique, Forestier 🌲",
      pique: false,
      couleur: 4
    }
  },
  {
    name: "Tulipe ✅",
    image: "https://flowersbulbs.pl/wp-content/uploads/Mystic-van-Eijk.jpg", 
    properties: {
      hp: 89,
      pétale: 8,
      attack: "Fleurs de Love",
    },
    description: {
      text: "Ce sont des fleurs très simple et assez harmonieux à voir dans leurs champs, la fleurs très réputé lors de la st valentin..",
      habitat: "Montagne ⛰️",
      pique: false,
      couleur: 12
    }
  },
  {
    name: "Bruyères ✅",
    image: "https://images.ctfassets.net/b85ozb2q358o/63d353ef4bfe4fd8ead564ac68fe6be4cf6c4eea52fa277523b74da718090866/c3b4a478d56eaa1d40d619d900799fe1/image.png",
    properties: {
      hp: 2500,
      pétale: 999,
      attack: "Lignes florales",
    },
    description: {
      text: "La bruyère est une plante des montagnes qui vie essentiellemnt dans les vosges et dans les falaises rocheux.",
      habitat: "Montagne, Falaise ⛰️",
      pique: false,
      couleur: 9
    }
  },
  {
    name: "Hortensia ✅",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7wjtd0-VqogmLRL41onZoK87fhAiI-oVAA&s",
    properties: {
      hp: 10000,
      pétale: 10000,
      attack: "Beauté suprême",
    },
    description: {
      text: "Les hortensia son très répandue pour leurs beauté souvent retrouvé chez les nobles, ce sont des sortes d'arbustes de fleurs..",
      habitat: "Terre fertile, ombragée 🏡",
      pique: false,
      couleur: 6

    }
  },
  {
    name: "Œillet ✅",
    image: "https://www.carrementfleurs.com/modules/prestablog/views/img/grid-for-1-7/up-img/thumb_45.jpg?1d3e6e522b3569b6998fca58cd80dde9", //une URL comme https et en png //
    properties: {
      hp: 10,
      pétale: 29,
      attack: "Perd la tête",
    },
    description: {
      text: "Une fleur qui ne sent pas très bon, mais très jolie malgrés sa fragilité à la main..",
      habitat: "Endroit sèche 🏜️",
      pique: false,
      couleur: 15
    }
  }
];

// la fonction pour créer les cartes en bas là//
function creerElement() {
  const container = document.querySelector("#card_container");

  // BOUCLE FOR POUR LES CARTES//
  fleurCards.forEach(card => {
    // l'élément principal de la carte c ici, touche pas stp//

    const cardElement = document.createElement("div");
    cardElement.className = "card closed";

    // Ajoute l'image bg//
    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.name;

    // pour ajouter les infos sur les fleurs hihhihii trop coquette//
    const info = document.createElement("div");
    info.className = "info";

    const name = document.createElement("h3");
    name.textContent = card.name;

    const hp = document.createElement("p");
    hp.className = "properties"
    hp.textContent = `HP: ${card.properties.hp}`;

    const pétale = document.createElement("p");
    pétale.className = "properties"
    pétale.textContent = `Pétale:\n${card.properties.pétale}`;
     
    //le booléen ou boolean 22h32//
    const pique = document.createElement("p");
    pique.className = "properties"

    if (Element.piquant == true) {
      pique.textContent = "Fleur piquante";
    } 
    
    else  {
      pique.textContent = "Fleur non piquante ";
    }



    const attack = document.createElement("p");
    attack.className = "properties"
    attack.textContent = `Attaque:\n${card.properties.attack}`;

    const description = document.createElement("p");
    description.className = "description"
    description.textContent = `Description:\n${card.description.text}`;

    const habitat = document.createElement("p");
    habitat.className = "description"
    habitat.textContent = `Habitat:\n${card.description.habitat}`;

    const couleur = document.createElement("p");
    couleur.textContent = `couleur: ${card.description.couleur}`;


    // tu assemble les éléments là ALORS TOUCHE PAS ICI//
    info.appendChild(name);
    info.appendChild(hp);
    info.appendChild(pétale);
    info.appendChild(attack);
    info.appendChild(description);
    info.appendChild(habitat);
    info.appendChild(pique);
    info.appendChild(couleur);
    cardElement.appendChild(img);
    cardElement.appendChild(info);
    container.appendChild(cardElement);
  });
}

// Ici sa génère les cartes pour l'ouverture de la page//
creerElement();

// on récupère l'élément de la fleur là//
const fleur = document.querySelectorAll(".card");

fleur.forEach((fleur) => {
  // si on clique sur une card ça l'ouvre et si elle est déja ouverte ça la ferme

  fleur.addEventListener("click", () => {
    fleur.classList.toggle("closed");
  });

  // si on clique sur une card ça l'ouvre et si elle est déja ouverte ça la ferme
  fleur.addEventListener("mouseover", () => {
    fleur.classList.add("open");
  });

  fleur.addEventListener("mouseout", () => {
    fleur.classList.remove("open");
  });

});

const card_container = document.querySelector("#card_container");
const btn_mosaique = document.querySelector("#btn_mosaique");
const btn_carrousel = document.querySelector("#btn_carrousel");

btn_mosaique.addEventListener('click', () => {
  card_container.classList.remove('carrousel');
  card_container.classList.add('mosaique');
});

btn_carrousel.addEventListener('click', () => {
  card_container.classList.remove('mosaique');
  card_container.classList.add('carrousel');
});
