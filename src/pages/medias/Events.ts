const events = [
  {
    name: "Fête de l'automne",
    location: "Bessieres (31)",
    photos: import.meta.glob([`./assets/bessieres2019/*.jpg`]),
    card: `./assets/bessieres2019/card.jpg`,
    id: 1,
  },
  {
    name: "Les Maboul'Rock",
    location: "Bouloc (31)",
    photos: import.meta.glob([`./assets/maboulrock/*.jpg`]),
    card: `./assets/maboulrock/card.jpg`,

    id: 2,
  },
  {
    name: "V and B Rouffiac",
    location: "Rouffiac (31)",
    photos: import.meta.glob([`./assets/rouffiac/*.jpg`]),
    card: `./assets/rouffiac/card.jpg`,

    id: 3,
  },
  {
    name: "Fête de la musique",
    location: "Villenveu lès Bouloc (31)",
    photos: import.meta.glob([`./assets/villeneuve2019/*.jpg`]),
    card: `./assets/villeneuve2019/card.jpg`,

    id: 4,
  },
  {
    name: "Fête de la musique",
    location: "Bessières (31)",
    photos: import.meta.glob([`./assets/bessieres2020/*.jpg`]),
    card: `./assets/bessieres2020/card.jpg`,

    id: 5,
  },
  {
    name: "V and B Labège",
    location: "Labège (31)",
    photos: import.meta.glob([`./assets/labege/*.jpg`]),
    card: `./assets/labege/card.jpg`,

    id: 6,
  },
];

export default events;
