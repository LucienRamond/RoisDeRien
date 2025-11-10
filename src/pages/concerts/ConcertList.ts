import { ConcertType } from "./Concerts";

const upcoming_concert: ConcertType[] = [];

const past_concerts: ConcertType[] = [
  {
    date: "06/21/2025",
    event: "Fête de la musique",
    location: "Bouloc 31",
    url: "http://www.mairie-bouloc.fr/",
    id: 1,
  },
  {
    date: "06/21/2024",
    event: "Fête de la musique",
    location: "Villaudric",
    url: "",
    id: 2,
  },
  {
    date: "06/21/2023",
    event: "Fête de la musique",
    location: "Villeneuve-Lès-Bouloc",
    url: "https://www.facebook.com/profile.php?id=100009531731456&locale=fr_FR",
    id: 3,
  },
  {
    date: "04/15/2023",
    event: "Carnaval",
    location: "Bouloc 31",
    url: "https://www.facebook.com/profile.php?id=100087083387046&sk=about&locale=fr_FR",
    id: 4,
  },
  {
    date: "11/18/2022",
    event: "Afterwork concert",
    location: "Bouloc 31",
    url: "https://www.facebook.com/profile.php?id=100087083387046&sk=about&locale=fr_FR",
    id: 5,
  },
];

export { upcoming_concert, past_concerts };
