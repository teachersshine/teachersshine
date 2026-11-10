
import products from "./products";

const findProduct = (id) => {
  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    throw new Error(`Produit introuvable dans le catalogue : ${id}`);
  }

  return product;
};

const collectionPacks = [
  {
    id: "pack-starbox",
    name: "Pack Starbox",
    subtitle: "La récompense parfaite !",
    description:
      "Une Star Box pour valoriser les efforts des élèves, accompagnée d'un pointeur offert.",

    price: 45,
    originalPrice: 54,

    image: findProduct(23).image,

    items: [
      {
        product: findProduct(23),
        quantity: 1,
        isGift: false,
      },
      {
        product: findProduct(1),
        quantity: 1,
        isGift: true,
      },
    ],

    badge: "POINTEUR OFFERT",
    active: true,
    startDate: "2026-11-10",
    endDate: "2027-01-10",
  },

  {
    id: "pack-fishing",
    name: "Pack Fishing Game",
    subtitle: "Apprendre en s'amusant !",
    description:
      "Un jeu de pêche éducatif pour animer la classe, accompagné d'une sonnette offerte.",

    price: 38,
    originalPrice: 51,

    image: findProduct(13).image,

    items: [
      {
        product: findProduct(13),
        quantity: 1,
        isGift: false,
      },
      {
        product: findProduct(2),
        quantity: 1,
        isGift: true,
      },
    ],

    badge: "SONNETTE OFFERTE",
    active: true,
    startDate: "2026-11-10",
    endDate: "2027-01-10",
  },
  {
  id: "pack-math-game",
  name: "Pack Math Game",
  subtitle: "Apprendre les mathématiques en s'amusant !",
  description:
    "Un Math Game éducatif accompagné gratuitement de la stratégie ساعي البريد pour enrichir les activités en classe.",

  price: 40,
  originalPrice: 48,

  image: findProduct(29).image,

  items: [
    {
      product: findProduct(29),
      quantity: 1,
      isGift: false,
    },
    {
      product: findProduct(39),
      quantity: 1,
      isGift: true,
    },
  ],

  badge: "ساعي البريد OFFERT",
  active: true,
  startDate: "2026-11-10",
  endDate: "2027-01-10",
},
{
  id: "pack-cartable",
  name: "Pack Cartable",
  subtitle: "Un cartable accompagné de 10 médailles offertes !",
  description:
    "Un cartable pratique pour accompagner les élèves, avec 10 médailles offertes pour récompenser leurs efforts.",

  price: 89,
  originalPrice: 101.5,

  image: findProduct(5).image,

  items: [
    {
      product: findProduct(5),
      quantity: 1,
      isGift: false,
    },
    {
      product: findProduct(21),
      quantity: 5,
      isGift: true,
    },
  ],

  badge: "10 MÉDAILLES OFFERTES",
  active: true,
  startDate: "2026-11-10",
  endDate: "2027-01-10",
},
];

export default collectionPacks;
