export type TrendingItem = {
  rank: number;
  title: string;
  category: string;
  background: string;
  posterAlt?: string;
  posterSrc?: string;
};

export type Reason = {
  title: string;
  description: string;
  icon: "tv" | "download" | "devices" | "kids";
  background: string;
};

export type Faq = {
  question: string;
  answer: string[];
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
    answer: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more \u2013 on thousands of internet-connected devices.",
      "You can watch as much as you want, whenever you want, without a single ad \u2013 all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    ],
  },
  {
    question: "How much does Netflix cost?",
    answer: [
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs. 149 to Rs. 649 a month. No extra costs, no contracts.",
    ],
  },
  {
    question: "Where can I watch?",
    answer: [
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    question: "How do I cancel?",
    answer: [
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account anytime.",
    ],
  },
  {
    question: "What can I watch on Netflix?",
    answer: [
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    ],
  },
  {
    question: "Is Netflix good for kids?",
    answer: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you do not want kids to see.",
    ],
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
