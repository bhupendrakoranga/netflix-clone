export type TrendingItem = {
  rank: number;
  title: string;
  category: string;
  background: string;
};

export type Reason = {
  title: string;
  description: string;
  icon: "tv" | "download" | "devices" | "kids";
  background: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const trendingItems: TrendingItem[] = [
  {
    rank: 1,
    title: "Dhamaal 4",
    category: "Comedy",
    background: "linear-gradient(145deg, #7f1d1d 0%, #f97316 48%, #111111 100%)",
  },
  {
    rank: 2,
    title: "Alpha",
    category: "Action",
    background: "linear-gradient(145deg, #0f172a 0%, #2563eb 48%, #111111 100%)",
  },
  {
    rank: 3,
    title: "Operation Safed Sagar",
    category: "Drama",
    background: "linear-gradient(145deg, #312e81 0%, #be123c 48%, #111111 100%)",
  },
  {
    rank: 4,
    title: "Gandhari",
    category: "Thriller",
    background: "linear-gradient(145deg, #064e3b 0%, #14b8a6 48%, #111111 100%)",
  },
  {
    rank: 5,
    title: "Fauda",
    category: "Series",
    background: "linear-gradient(145deg, #1c1917 0%, #a16207 48%, #111111 100%)",
  },
  {
    rank: 6,
    title: "Korean Kanakaraju",
    category: "Romance",
    background: "linear-gradient(145deg, #831843 0%, #db2777 48%, #111111 100%)",
  },
  {
    rank: 7,
    title: "Cocktail 2",
    category: "Rom-com",
    background: "linear-gradient(145deg, #164e63 0%, #f59e0b 48%, #111111 100%)",
  },
  {
    rank: 8,
    title: "Musafir Cafe",
    category: "Feel good",
    background: "linear-gradient(145deg, #14532d 0%, #84cc16 48%, #111111 100%)",
  },
  {
    rank: 9,
    title: "Gatta Kusthi 2",
    category: "Sports",
    background: "linear-gradient(145deg, #3b0764 0%, #9333ea 48%, #111111 100%)",
  },
  {
    rank: 10,
    title: "Peddi",
    category: "Blockbuster",
    background: "linear-gradient(145deg, #450a0a 0%, #dc2626 48%, #111111 100%)",
  },
];

export const reasons: Reason[] = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "tv",
    background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favourites easily and always have something to watch.",
    icon: "download",
    background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "devices",
    background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them - free with your membership.",
    icon: "kids",
    background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
  },
];

export const faqs: Faq[] = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service for films, series, documentaries, anime, and originals on internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Plans vary by screen quality and device support. The India landing page currently promotes plans from Rs. 149 per month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "You can watch on compatible phones, tablets, computers, smart TVs, streaming players, and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Memberships are managed online, and cancellation is designed to be available without cancellation fees.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "The catalogue includes films, shows, anime, documentaries, and Netflix originals, with new titles added regularly.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "Kids profiles can include parental controls, maturity settings, and title restrictions for a safer family experience.",
  },
];

export const footerLinks = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];
