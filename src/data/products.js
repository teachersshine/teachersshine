const images = require.context(
  "../assets/Products",
  true,
  /\.(png|jpe?g|webp|gif)$/i
);

const imagePath = (filename) => images(`./${filename}`);

const products = [
  // =========================================================
  // ⭐ PRODUITS MIS EN AVANT
  // =========================================================

  {
    id: 1,
    name: "Pointeur",
    slug: "pointeur",
    price: 10.0,
    category: "Outils enseignants",
    categorySlug: "outils-enseignants",
    image: imagePath("Pointeur.png"),
    images: [
      imagePath("Pointeur.png"),
      imagePath("Pointeur2.png"),
    ],
    badge: "Populaire",
    description:
      "Un pointeur pratique et léger pour accompagner vos présentations en classe.",
    available: true,
  },

  {
    id: 2,
    name: "Sonnette",
    slug: "sonnette",
    price: 13.0,
    category: "Outils enseignants",
    categorySlug: "outils-enseignants",
    image: imagePath("Sonnette.png"),
    badge: "Nouveau",
    description:
      "Une sonnette pratique pour attirer facilement l'attention des élèves.",
    available: true,
  },

  {
    id: 13,
    name: "Jeu de pêche",
    slug: "jeu-de-peche",
    price: 38.0,
    category: "Jeux éducatifs",
    categorySlug: "jeux-educatifs",
    image: imagePath("fishing game.png"),
    badge: "Top vente",
    description:
      "Un jeu amusant pour développer différentes compétences tout en jouant.",
    available: true,
  },

  {
    id: 8,
    name: "Porte-stylo magnétique",
    slug: "porte-stylo-magnetique",
    price: 35.0,
    category: "Accessoires magnétiques",
    categorySlug: "accessoires-magnetiques",
    image: imagePath("PorteAStyloMag.png"),
    badge: "Nouveau",
    description:
      "Un porte-stylo magnétique pratique pour garder vos stylos à portée de main.",
    available: true,
  },

  {
    id: 45,
    name: "Spin & Speak Game",
    slug: "spin-Speak-Game",
    price: 55.0,
    category: "Jeux éducatifs",
    categorySlug: "jeux-educatifs",
    image: imagePath("SpinSpeakGame.png"),
    badge: "",
    description:
      "Faites tourner la roue des prix pour désigner un gagnant chanceux et rendez l'événement encore plus spécial et mémorable.",
    available: true,
  },

  // =========================================================
  // 🎮 JEUX ÉDUCATIFS
  // =========================================================

  {
    id: 14,
    name: "Words Game",
    slug: "words-game",
    price: 38.0,
    category: "Jeux éducatifs",
    categorySlug: "jeux-educatifs",
    image: imagePath("WordGame.jpeg"),
    badge: "",
    description:
      "Un jeu autour des mots pour rendre les activités plus interactives.",
    available: true,
  },

  {
    id: 15,
    name: "Sound Game",
    slug: "sound-game",
    price: 40.0,
    category: "Jeux éducatifs",
    categorySlug: "jeux-educatifs",
    image: imagePath("SoundGame.jpeg"),
    badge: "",
    description:
      "Une activité ludique basée sur les sons.",
    available: true,
  },

  {
    id: 16,
    name: "Like / Dislike Game",
    slug: "like-dislike-game",
    price: 20.0,
    category: "Jeux éducatifs",
    categorySlug: "jeux-educatifs",
    image: imagePath("LikeDislikeGame.png"),
    badge: "",
    description:
      "Une activité interactive pour faire participer les élèves.",
    available: true,
  },

  {
    id: 29,
    name: "Math Game",
    slug: "math-game",
    price: 40.0,
    category: "Jeux éducatifs",
    categorySlug: "jeux-educatifs",
    image: imagePath("math game.png"),
    badge: "",
    description:
      "Un jeu éducatif pour rendre les activités mathématiques plus amusantes.",
    available: true,
  },

  // =========================================================
  // 📚 JOURNAUX & CAHIERS
  // =========================================================

  {
    id: 31,
    name: "Journal Français",
    slug: "journal-français",
    price: 35.0,
    category: "Journal & Cahier",
    categorySlug: "journal-cahier",
    image: imagePath("J1.png"),
    images: [
      imagePath("J1.png"),
      imagePath("J2.png"),
    ],
    badge: "",
    description:
      "Un journal d'année pratique et présentable, disponible en plusieurs formats selon le nombre de pages.",
    available: true,
    variants: [
      {
        id: "100-pages",
        name: "100 pages",
        pages: 100,
        price: 35.0,
      },
      {
        id: "150-pages",
        name: "150 pages",
        pages: 150,
        price: 40.0,
      },
      {
        id: "200-pages",
        name: "200 pages",
        pages: 200,
        price: 55.0,
      },
      {
        id: "250-pages",
        name: "250 pages",
        pages: 250,
        price: 67.0,
      },
    ],
  },

  {
    id: 32,
    name: "Journal Arabe",
    slug: "journal-arabe",
    price: 35.0,
    category: "Journal & Cahier",
    categorySlug: "journal-cahier",
    image: imagePath("J3.png"),
    images: [
      imagePath("J3.png"),
      imagePath("J4.png"),
    ],
    badge: "",
    description:
      "Un journal d'année pratique et présentable, disponible en plusieurs formats selon le nombre de pages.",
    available: true,
    variants: [
      {
        id: "100-pages",
        name: "100 pages",
        pages: 100,
        price: 35.0,
      },
      {
        id: "150-pages",
        name: "150 pages",
        pages: 150,
        price: 40.0,
      },
      {
        id: "200-pages",
        name: "200 pages",
        pages: 200,
        price: 55.0,
      },
      {
        id: "250-pages",
        name: "250 pages",
        pages: 250,
        price: 67.0,
      },
    ],
  },

  {
    id: 33,
    name: "Journal Anglais",
    slug: "journal-anglais",
    price: 35.0,
    category: "Journal & Cahier",
    categorySlug: "journal-cahier",
    image: imagePath("J6.png"),
    images: [
      imagePath("J6.png"),
      imagePath("J5.png"),
    ],
    badge: "",
    description:
      "Un journal d'année pratique et présentable, disponible en plusieurs formats selon le nombre de pages.",
    available: true,
    variants: [
      {
        id: "100-pages",
        name: "100 pages",
        pages: 100,
        price: 35.0,
      },
      {
        id: "150-pages",
        name: "150 pages",
        pages: 150,
        price: 40.0,
      },
      {
        id: "200-pages",
        name: "200 pages",
        pages: 200,
        price: 55.0,
      },
      {
        id: "250-pages",
        name: "250 pages",
        pages: 250,
        price: 67.0,
      },
    ],
  },

  {
    id: 34,
    name: "Journal Français 2",
    slug: "journal-français2",
    price: 35.0,
    category: "Journal & Cahier",
    categorySlug: "journal-cahier",
    image: imagePath("J7.png"),
    images: [
      imagePath("J7.png"),
      imagePath("J8.png"),
    ],
    badge: "",
    description:
      "Un journal d'année pratique et présentable, disponible en plusieurs formats selon le nombre de pages.",
    available: true,
    variants: [
      {
        id: "100-pages",
        name: "100 pages",
        pages: 100,
        price: 35.0,
      },
      {
        id: "150-pages",
        name: "150 pages",
        pages: 150,
        price: 40.0,
      },
      {
        id: "200-pages",
        name: "200 pages",
        pages: 200,
        price: 55.0,
      },
      {
        id: "250-pages",
        name: "250 pages",
        pages: 250,
        price: 67.0,
      },
    ],
  },

  // =========================================================
  // 🎯 STRATÉGIES PÉDAGOGIQUES
  // =========================================================

  {
    id: 35,
    name: "استراتجية الفشار",
    slug: "stratégie popcorn",
    price: 15.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("popcorn.png"),
    badge: "",
    description:
      "1 boîte + 6P Popcorn ludique et coloré, idéal pour l'organisation de la classe (Plastifée)",
    available: true,
  },

  {
    id: 36,
    name: "استراتجية كورة المرمى",
    slug: "stratégie Football",
    price: 20.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("strategie football.png"),
    badge: "",
    description:
      "4 Ballons & 2 Goals : une stratégie ludique qui transforme les objectifs d’apprentissage en un véritable défi à relever (Plastifée)",
    available: true,
  },

  {
    id: 37,
    name: "استراتجية جيري",
    slug: "stratégie Jerry",
    price: 15.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("jerry strategy.png"),
    badge: "",
    description:
      "1 Jerry + 6P Fromage idéal pour l'organisation de la classe (Plastifée)",
    available: true,
  },

  {
    id: 38,
    name: "استراتجية الفوانيس",
    slug: "stratégie des lampes",
    price: 15.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("lampe.png"),
    badge: "",
    description:
      "6 lampes pédagogiques : un support ludique pour mettre en lumière les informations pertinentes, enrichir la production écrite et rappeler les notions essentielles de façon simple et visuelle (Plastifée)",
    available: true,
  },

  {
    id: 39,
    name: "استراتجية ساعي البريد",
    slug: "stratégie Poste Man",
    price: 8.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("posteman.png"),
    badge: "",
    description:
      "Stratégie « Le facteur » : une activité ludique basée sur des messages ou des cartes distribués par un élève désigné comme facteur par l’enseignant. Elle favorise la participation, les échanges et la communication entre les élèves (Plastifée)",
    available: true,
  },

  {
    id: 40,
    name: "استراتجية المفتاح و القفل",
    slug: "stratégie key",
    price: 15.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("key.png"),
    badge: "",
    description:
      "3 serrures + clés : un support ludique pour travailler les synonymes et les antonymes en associant chaque mot à la clé correspondante, tout en rendant l’apprentissage du vocabulaire interactif et amusant (Plastifée)",
    available: true,
  },

  {
    id: 42,
    name: "Cube Inserable",
    slug: "stratégie Cube Inserable",
    price: 35.0,
    category: "Activités",
    categorySlug: "activités",
    image: imagePath("Cube Inserable.png"),
    badge: "",
    description:
      "Cube insérable à 6 faces : un outil pédagogique modulable avec 6 pochettes transparentes permettant d’insérer des cartes personnalisables selon le contenu de chaque leçon, pour varier les activités et rendre l’apprentissage plus interactif.",
    available: true,
  },

  {
    id: 43,
    name: "Cube Effaçable",
    slug: "stratégie Cube Effaçable",
    price: 35.0,
    category: "Activités",
    categorySlug: "activités",
    image: imagePath("Cube Effaçable.png"),
    badge: "",
    description:
      "Cube effaçable – 1 pièce + stylo spécial + effaceur : un outil pratique et réutilisable pour proposer des activités variées, écrire directement sur le cube, effacer et recommencer à volonté.",
    available: true,
  },

  {
    id: 44,
    name: "Tableau de Résponsabilité",
    slug: "Tableau de Résponsabilité",
    price: 35.0,
    category: "Stratégie",
    categorySlug: "stratégie",
    image: imagePath("Tableau de Résponsabilité.png"),
    badge: "",
    description:
      "Un support pratique et réutilisable pour organiser les responsabilités de la classe, responsabiliser les élèves et favoriser une gestion de classe efficace.",
    available: true,
  },

  // =========================================================
  // 🧑‍🏫 OUTILS POUR ENSEIGNANTS
  // =========================================================

  {
    id: 17,
    name: "Flèche",
    slug: "fleche",
    price: 10.0,
    category: "Outils enseignants",
    categorySlug: "outils-enseignants",
    image: imagePath("fleche.png"),
    badge: "",
    description:
      "Une flèche pratique pour vos activités et présentations.",
    available: true,
  },

  {
    id: 18,
    name: "Timer Stand 1",
    slug: "timer-stand-1",
    price: 25.0,
    category: "Outils enseignants",
    categorySlug: "outils-enseignants",
    image: imagePath("TimerStand1.png"),
    badge: "",
    description:
      "Un support pratique pour gérer le temps pendant vos activités.",
    available: true,
  },

  {
    id: 19,
    name: "Timer Stand 2",
    slug: "timer-stand-2",
    price: 40.0,
    category: "Outils enseignants",
    categorySlug: "outils-enseignants",
    image: imagePath("TimerStand2.png"),
    badge: "",
    description:
      "Un support timer pratique pour organiser vos activités.",
    available: true,
  },

  // =========================================================
  // 🧲 ACCESSOIRES
  // =========================================================

  {
    id: 6,
    name: "Ruban Stickers",
    slug: "ruban-stickers",
    price: 40.0,
    category: "Stickers & tampons",
    categorySlug: "stickers-tampons",
    image: imagePath("RubanStickers.png"),
    badge: "",
    description:
      "Des stickers pratiques pour décorer, organiser et encourager.",
    available: true,
  },

  {
    id: 10,
    name: "Button magnétique",
    slug: "button-magnetique",
    price: 10.0,
    category: "Accessoires magnétiques",
    categorySlug: "accessoires-magnetiques",
    image: imagePath("BtnMang.png"),
    badge: "",
    description:
      "Un accessoire magnétique pratique pour votre organisation.",
    available: true,
    variants: [
      {
        id: "10 Pièce",
        name: "10 Pièce",
        pages: 10,
        price: 10.0,
      },
      {
        id: "20 Pièce",
        name: "20 Pièce",
        pages: 20,
        price: 20.0,
      },
    ],
  },

  // =========================================================
  // 🎒 SACS & TROUSSES
  // =========================================================

  {
    id: 3,
    name: "Trousse Noire",
    slug: "trousse-noire",
    price: 22.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("TrousseNoir.png"),
    badge: "",
    description:
      "Une trousse pratique pour organiser vos accessoires du quotidien.",
    available: true,
  },

  {
    id: 4,
    name: "Trousse Rose",
    slug: "trousse-rose",
    price: 25.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("TrousseRose.png"),
    badge: "",
    description:
      "Une trousse élégante et pratique pour vos accessoires.",
    available: true,
  },

  {
    id: 5,
    name: "Cartable",
    slug: "cartable",
    price: 89.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("Cartable.png"),
    badge: "",
    description:
      "Un cartable pratique pour transporter facilement vos affaires.",
    available: true,
  },

  {
    id: 11,
    name: "Sac 1",
    slug: "sac-1",
    price: 58.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("Sac1.png"),
    badge: "",
    description:
      "Un sac pratique adapté au quotidien des enseignants.",
    available: true,
  },

  {
    id: 12,
    name: "Sac 2",
    slug: "sac-2",
    price: 58.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("Sac2.png"),
    badge: "",
    description:
      "Un sac pratique avec un design adapté au quotidien.",
    available: true,
  },

  {
    id: 27,
    name: "Sac 3",
    slug: "sac-3",
    price: 58.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("Sac3.jpeg"),
    badge: "",
    description:
      "Un sac pratique et adapté aux besoins des enseignants.",
    available: true,
  },

  {
    id: 28,
    name: "Sac 4",
    slug: "sac-4",
    price: 69.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("Sac4.png"),
    badge: "",
    description:
      "Un sac pratique pour transporter vos accessoires.",
    available: true,
  },

  {
    id: 30,
    name: "Trousse Kaki",
    slug: "trousse-kaki",
    price: 20.0,
    category: "Sacs & trousses",
    categorySlug: "sacs-trousses",
    image: imagePath("Trousse Kaki.png"),
    badge: "",
    description:
      "Une trousse pratique avec un style kaki.",
    available: true,
  },

  // =========================================================
  // 🏆 RÉCOMPENSES
  // =========================================================

  {
    id: 20,
    name: "Couronne",
    slug: "couronne",
    price: 5.0,
    category: "Récompenses",
    categorySlug: "recompenses",
    image: imagePath("Couronne.png"),
    badge: "",
    description:
      "Une petite récompense pour valoriser les efforts des élèves.",
    available: true,
  },

  {
    id: 21,
    name: "Médailles",
    slug: "medailles",
    price: 2.5,
    category: "Récompenses",
    categorySlug: "recompenses",
    image: imagePath("Medaille.png"),
    badge: "",
    description:
      "Des médailles pour féliciter et encourager les élèves.",
    available: true,
  },

  {
    id: 22,
    name: "Trophées",
    slug: "trophees",
    price: 7.5,
    category: "Récompenses",
    categorySlug: "recompenses",
    image: imagePath("Trophés.png"),
    badge: "",
    description:
      "Des trophées pour célébrer les réussites.",
    available: true,
  },

  {
    id: 23,
    name: "Star Box",
    slug: "star-box",
    price: 45.0,
    category: "Récompenses",
    categorySlug: "recompenses",
    image: imagePath("star_box.png"),
    badge: "",
    description:
      "Une boîte de récompenses pour motiver les élèves.",
    available: true,
  },

  {
    id: 41,
    name: "Serre Tête",
    slug: "stratégie Serre Tête",
    price: 35.0,
    category: "Récompenses",
    categorySlug: "recompenses",
    image: imagePath("Serre tete.png"),
    badge: "",
    description:
      "5P Serre-têtes à étiquettes : un support ludique permettant d’insérer des étiquettes sur la tête des élèves pour organiser des devinettes et des jeux de vocabulaire, tout en facilitant la communication et les interactions en classe.",
    available: true,
  },

  // =========================================================
  // 🏷️ STAMPS
  // =========================================================

  {
    id: 24,
    name: "Stamps Arabe",
    slug: "stamps-arabe",
    price: 38.0,
    category: "Stickers & tampons",
    categorySlug: "stickers-tampons",
    image: imagePath("stamps arb 5p.png"),
    badge: "",
    description:
      "Des tampons en arabe pour accompagner vos corrections.",
    available: true,
  },

  {
    id: 25,
    name: "Stamps Français",
    slug: "stamps-francais",
    price: 38.0,
    category: "Stickers & tampons",
    categorySlug: "stickers-tampons",
    image: imagePath("Stamps FR.png"),
    badge: "",
    description:
      "Des tampons en français pour vos corrections.",
    available: true,
  },

  {
    id: 26,
    name: "Stamps Anglais",
    slug: "stamps-anglais",
    price: 45.0,
    category: "Stickers & tampons",
    categorySlug: "stickers-tampons",
    image: imagePath("Stamps Eng.png"),
    badge: "",
    description:
      "Des tampons en anglais pour vos corrections.",
    available: true,
  },

  // =========================================================
  // 🎒 AUTRES ACCESSOIRES & ACTIVITÉS
  // =========================================================

  {
    id: 7,
    name: "Portefeuille",
    slug: "portefeuille",
    price: 27.0,
    category: "Accessoires",
    categorySlug: "accessoires",
    image: imagePath("Portfeuille.png"),
    badge: "",
    description:
      "Un portefeuille compact et pratique.",
    available: true,
  },

  {
    id: 9,
    name: "Balles",
    slug: "balles",
    price: 36.0,
    category: "Activités",
    categorySlug: "activites",
    image: imagePath("Balle.png"),
    badge: "",
    description:
      "Des accessoires amusants pour vos activités en classe.",
    available: true,
    variants: [
      {
        id: "22 Pièce",
        name: "22 Pièce",
        pages: 22,
        price: 36.0,
      },
      {
        id: "40 Pièce",
        name: "40 Pièce",
        pages: 40,
        price: 56.0,
      },
    ],
  },
];

export default products;