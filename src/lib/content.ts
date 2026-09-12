export type TrendingItem = {
  rank: number;
  title: string;
  category?: string;
  background?: string;
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
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQXbgFgkrNy8pw_gF7fJSMb8nKhmX2MvnpAr7LDhGlTxmjUXFcZg3fVv0jQ8K5nda5of0tkl7hkGWfKha8JxIagiI8UgPJoBug4.webp?r=3d7",
  },
  {
    rank: 2,
    title: "Alpha",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaZEyL4lBxMbJc6Mov0W6-fxDiCNnI0STN_Vx6ViMePxAAQGf5R3gQLUCEkz2YMSctqnX0q92jBVrJeK0uY79Ub862UN4hl1wNE.webp?r=dd2",
  },
  {
    rank: 3,
    title: "Operation Safed Sagar",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSwMP_RP4yykJh43expsqt9f9o1tQuoaPVgB_6t5wLQmTIFH0C7ou759TjdtLFRaD8a7ugZ-YjogjGN6baRmKUGfKSySB8Akfs8.webp?r=019",
  },
  {
    rank: 4,
    title: "Gandhari",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABejSYC_DP_davWAspoYDdc5UiyuElbnN8BAPXUPNnMlaQv94EpDM7sz7W03xEvL_Zfik6GbYfm3jFSRgC_ziprEUyQPfKouLzbG9vFNtQ08fbKzKkM2vt8m6TJs_qbjpzYUz.webp?r=639",
  },
  {
    rank: 5,
    title: "Fauda",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfft58CudDGJ727KyF7dpwuPAUAX2piYLews-kNwjaZPvuzNceVJ0aF9NOgT9zso4snoelXa7Yz343bHuLEr61nQVEHIILp-vjIfx8JJ1WYtHUMh-ws4k7lRjoqDO3365_Z0.webp?r=254",
  },
  {
    rank: 6,
    title: "Korean Kanakaraju",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdASUN6RmS_9Cz6RcM4PKxYy7dodzanPKLVynf3XovDr3AcakvtDLt5PVphbOEWfopc547BO194AXv3WsY4MT8efTOi8sjiEvY8.webp?r=873",
  },
  {
    rank: 7,
    title: "Cocktail 2",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVWi2wy6mosin5U_mItEw8Fd4Y7nnnIQSyKjapXqmpsP1C0fW8Ap9e23kNJ8DH2Gzm_XZmOO3wtbHO2uh9H1cr7V26BlVbiUq1WhNf3sYcrGAQ_9ApdAJ87kn8RPQnqnvkTp.webp?r=687",
  },
  {
    rank: 8,
    title: "Musafir Cafe",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZ_L6Hq4yCOUjtYQlH9jT6IG9nwLDgUAm05Yy8_7LJ93TJ_yg4Llc5pduntop2Y72vATfRR5v6a72JTT_TMahhmPpr9TdIehNu4.webp?r=227",
  },
  {
    rank: 9,
    title: "Gatta Kusthi 2",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf05Qw56C9HlqGzXEu7kjj8-mlqXFqR5iNQvWr3SXUy8cMe5d-bIVbJhPqiuDXQir8CmDeFBaeth9dlV0ZE6BwzpkzmRYiFjwrM.webp?r=374",
  },
  {
    rank: 10,
    title: "Peddi",
    posterSrc:
      "https://occ-0-6245-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRHEcpZrJWcGzHq1AkgW7B8aDNiXEqlU9JBHEwHiXFTEQ8fXNl14SJJMQJYMweSLASaAFxBjCZUrsnZ2DCoViO0dcfgJvky0pYY.webp?r=d8e",
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
