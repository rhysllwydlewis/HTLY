import type { IconName } from '@/components/Icon';

export type NavigationItem = {
  label: string;
  href: string;
};

export type SearchTab = {
  label: string;
  icon: IconName;
  style: string;
};

export type HolidayDeal = {
  slug: string;
  saving: string;
  savingAmount: number;
  badge: string;
  destination: string;
  resort: string;
  nights: string;
  board: string;
  travel: string;
  price: string;
  priceFrom: number;
  total: string;
  image: string;
  gallery: string[];
  tags: string[];
  overview: string;
  highlights: string[];
  hotelFeatures: string[];
  locationSummary: string;
  included: string[];
  termsNote: string;
  rating: number;
  reviewSummary: string;
  cancellation: string;
  deposit: string;
  familyScore: number;
};

export type Destination = {
  name: string;
  price: string;
  image: string;
  region: string;
  tagline: string;
};

export type Benefit = {
  icon: IconName;
  title: string;
  copy: string;
};

export type Review = {
  title: string;
  quote: string;
  person: string;
  location: string;
};

export type InspirationArticle = {
  slug: string;
  category: string;
  title: string;
  teaser: string;
  image: string;
  readTime: string;
};

export const heroImage =
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2400&q=92';
export const promoImage =
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=90';

export const navigation: NavigationItem[] = [
  { label: 'Holidays',     href: '/holidays'     },
  { label: 'Hotels',       href: '/hotels'       },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Deals',        href: '/deals'        },
  { label: 'Inspiration',  href: '/inspiration'  },
  { label: 'Support',      href: '/help'         },
];

export const searchTabs: SearchTab[] = [
  { label: 'Holidays',       icon: 'beach',       style: ''              },
  { label: 'Hotels',         icon: 'hotel',       style: 'Hotels'        },
  { label: 'Flight + Hotel', icon: 'flightHotel', style: 'City break'    },
  { label: 'Deals',          icon: 'tag',         style: 'Budget'        },
];

export const deals: HolidayDeal[] = [
  {
    slug: 'sun-siyam-iru-veli-maldives',
    saving: 'SAVE £150',
    savingAmount: 150,
    badge: 'All inclusive',
    destination: 'Maldives',
    resort: 'Sun Siyam Iru Veli',
    nights: '7 nights',
    board: 'All inclusive',
    travel: 'Flights included',
    price: '£1,299',
    priceFrom: 1299,
    total: 'Low deposit available',
    image:
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Beach', 'Luxury', 'All-inclusive'],
    overview:
      'A polished island escape with bright villas, turquoise lagoon views and a generous all-inclusive feel for travellers who want the Maldives without guesswork.',
    highlights: [
      'Lagoon-side villas with direct beach access',
      'Premium dine-around all-inclusive package',
      'Sunset experiences and spa rituals',
    ],
    hotelFeatures: [
      'Infinity pool',
      'Overwater spa',
      'Water sports centre',
      'Multiple restaurants',
      'House reef snorkelling',
    ],
    locationSummary:
      'Set on a postcard-perfect Maldivian island with seaplane-style arrival energy, soft white sand and calm reef waters made for slow beach days.',
    included: [
      'Return flights',
      '7 nights accommodation',
      'All inclusive board',
      'Checked luggage',
      'Representative support',
    ],
    termsNote:
      'Lead-in price is a static preview and varies by date, airport and live supplier availability when booking is connected.',
    rating: 4.8,
    reviewSummary:
      'Excellent for honeymoon-style luxury, lagoon views and seamless all-inclusive downtime.',
    cancellation:
      'Flexible cancellation options are highlighted before checkout when live suppliers are connected.',
    deposit: 'Secure your shortlist from a low deposit preview of £49pp.',
    familyScore: 3,
  },
  {
    slug: 'lindos-grand-rhodes-greece',
    saving: 'SAVE £120',
    savingAmount: 120,
    badge: 'Family favourite',
    destination: 'Rhodes, Greece',
    resort: 'Lindos Grand Resort & Spa',
    nights: '7 nights',
    board: 'Breakfast',
    travel: 'Direct flights',
    price: '£599',
    priceFrom: 599,
    total: 'Total price £1,198',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Family', 'Beach', 'Budget'],
    overview:
      'A reliable Greek island pick with easy direct flights, poolside days and a resort base that keeps beach time, tavernas and sightseeing simple.',
    highlights: [
      'Close to Lindos village and sandy bays',
      'Great-value breakfast base',
      'Family-friendly pools and terraces',
    ],
    hotelFeatures: [
      'Outdoor pools',
      'Spa',
      'Family rooms',
      'Sea-view dining',
      'Kids menu options',
    ],
    locationSummary:
      'Near the whitewashed lanes of Lindos and the east-coast beaches of Rhodes, ideal for mixing lazy pool days with relaxed island exploring.',
    included: [
      'Direct flights',
      '7 nights accommodation',
      'Breakfast',
      'Cabin bag allowance',
      'ATOL-style protection messaging',
    ],
    termsNote:
      'Example family value shown for preview purposes; live child pricing and room types will depend on supplier availability.',
    rating: 4.5,
    reviewSummary:
      'A strong all-rounder for families who want Greece, beaches and easy logistics.',
    cancellation: 'Free amendment windows are shown where supplier rules allow.',
    deposit: 'Low deposit available on selected departure dates.',
    familyScore: 5,
  },
  {
    slug: 'canaves-oia-suites-santorini',
    saving: 'SAVE £200',
    savingAmount: 200,
    badge: 'Luxury escape',
    destination: 'Santorini, Greece',
    resort: 'Canaves Oia Suites',
    nights: '5 nights',
    board: 'Breakfast',
    travel: 'Flights included',
    price: '£799',
    priceFrom: 799,
    total: 'Limited-time offer',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Luxury', 'Romantic', 'Beach'],
    overview:
      'A cinematic Santorini stay for travellers chasing caldera views, boutique service and breakfast terraces close to Oia\'s sunset scene.',
    highlights: [
      'Oia location with dramatic viewpoints',
      'Boutique suites and elevated service',
      'Perfect short luxury break length',
    ],
    hotelFeatures: [
      'Caldera-view pool',
      'Fine dining',
      'Spa treatments',
      'Concierge',
      'Boutique suites',
    ],
    locationSummary:
      'Positioned for Oia\'s lanes, sunset spots and cliffside restaurants, with beaches and wineries within easy day-trip reach.',
    included: [
      'Return flights',
      '5 nights accommodation',
      'Breakfast',
      'Hand luggage',
      'Digital travel documents',
    ],
    termsNote:
      'Santorini prices move quickly during peak sunset season; this preview demonstrates the future offer layout.',
    rating: 4.9,
    reviewSummary:
      'Best for couples and special occasions where atmosphere matters as much as price.',
    cancellation:
      'Cancellation terms vary by room supplier and will be clearly shown in live checkout.',
    deposit:
      'Reserve-interest messaging available now; live deposit options follow later.',
    familyScore: 2,
  },
  {
    slug: 'barcelo-tenerife-canary-islands',
    saving: 'SAVE £95',
    savingAmount: 95,
    badge: 'Winter sun',
    destination: 'Tenerife, Canary Islands',
    resort: 'Barcelo Tenerife',
    nights: '7 nights',
    board: 'Half board',
    travel: 'Regional flights',
    price: '£449',
    priceFrom: 449,
    total: 'Great value sunshine',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1581964606565-399d3c475f4a?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Beach', 'Family', 'Budget'],
    overview:
      'Year-round sunshine, easy flight times and a polished resort setup make this Canary Islands deal a dependable family or couples escape.',
    highlights: [
      'Reliable winter-sun climate',
      'Multiple pools and activity zones',
      'Short-haul flight convenience',
    ],
    hotelFeatures: [
      'Heated pools',
      'Kids club',
      'Buffet restaurant',
      'Wellness area',
      'Nature reserve nearby',
    ],
    locationSummary:
      'Set by Tenerife\'s southern coast with volcanic landscapes, beaches and resort facilities close enough for a fuss-free week away.',
    included: [
      'Return flights',
      '7 nights accommodation',
      'Half board',
      'Checked luggage option',
      'Resort support',
    ],
    termsNote:
      'Static preview pricing is based on example off-peak departures and may change with airport and board choices.',
    rating: 4.4,
    reviewSummary:
      'Excellent value for families looking for sun, pools and short-haul simplicity.',
    cancellation:
      'Supplier cancellation bands will be displayed once live availability is integrated.',
    deposit: 'Example low deposit from £39pp on selected previews.',
    familyScore: 5,
  },
  {
    slug: 'atlantis-the-palm-dubai',
    saving: 'SAVE £260',
    savingAmount: 260,
    badge: 'Iconic Dubai',
    destination: 'Dubai',
    resort: 'Atlantis, The Palm',
    nights: '5 nights',
    board: 'Breakfast',
    travel: 'Flights included',
    price: '£999',
    priceFrom: 999,
    total: 'Theme park access included',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Luxury', 'Family', 'City break'],
    overview:
      'A high-impact Dubai break with headline hotel facilities, beach-club energy and entertainment built into the stay.',
    highlights: [
      'Palm Jumeirah address',
      'Aquaventure-style family fun',
      'Big restaurant choice',
    ],
    hotelFeatures: [
      'Private beach',
      'Aquarium',
      'Waterpark access',
      'Celebrity restaurants',
      'Kids club',
    ],
    locationSummary:
      'On Palm Jumeirah with easy taxi links to Dubai Marina, Downtown Dubai, malls, beaches and desert experiences.',
    included: [
      'Return flights',
      '5 nights accommodation',
      'Breakfast',
      'Hotel entertainment access',
      'Airport transfer guidance',
    ],
    termsNote:
      'Dubai city taxes and resort fees can vary by supplier and will be called out clearly at booking stage.',
    rating: 4.7,
    reviewSummary:
      'A big-ticket family favourite with luxury polish and plenty to do without leaving the resort.',
    cancellation: 'Flexible room options are prioritised where supplier pricing allows.',
    deposit: 'Deposit preview from £75pp for selected Dubai packages.',
    familyScore: 5,
  },
  {
    slug: 'sala-phuket-mai-khao-thailand',
    saving: 'SAVE £180',
    savingAmount: 180,
    badge: 'Boutique Thailand',
    destination: 'Phuket, Thailand',
    resort: 'SALA Phuket Mai Khao Beach',
    nights: '10 nights',
    board: 'Breakfast',
    travel: 'Flights included',
    price: '£899',
    priceFrom: 899,
    total: 'Long-stay value',
    image:
      'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Beach', 'Luxury', 'All-inclusive'],
    overview:
      'A calm Thai beach stay with boutique styling, long-stay value and space to blend spa days, food markets and island-hopping.',
    highlights: [
      'Longer 10-night escape',
      'Quiet Mai Khao beachfront',
      'Boutique pool-villa atmosphere',
    ],
    hotelFeatures: [
      'Beachfront pool',
      'Spa',
      'Thai cooking experiences',
      'Pool villas',
      'Destination dining',
    ],
    locationSummary:
      'On Phuket\'s quieter north-west coast, close to wide sands and airport transfers while still within reach of island excursions.',
    included: [
      'Return flights',
      '10 nights accommodation',
      'Breakfast',
      'Checked luggage',
      'Destination support',
    ],
    termsNote:
      'Long-haul preview fares are indicative and depend on airline routing, seasonality and room availability.',
    rating: 4.6,
    reviewSummary:
      'Great for travellers who want Thailand\'s beach feel with a more grown-up, boutique pace.',
    cancellation:
      'Airline and hotel cancellation rules are summarised before payment in the future booking flow.',
    deposit: 'Staged payment messaging planned for long-haul packages.',
    familyScore: 3,
  },
  {
    slug: 'dreams-tulum-resort-mexico',
    saving: 'SAVE £240',
    savingAmount: 240,
    badge: 'All inclusive',
    destination: 'Tulum, Mexico',
    resort: 'Dreams Tulum Resort & Spa',
    nights: '10 nights',
    board: 'All inclusive',
    travel: 'Flights included',
    price: '£1,099',
    priceFrom: 1099,
    total: 'Family rooms available',
    image:
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['All-inclusive', 'Family', 'Beach'],
    overview:
      'A Caribbean coast favourite with all-inclusive ease, tropical gardens and enough family facilities to keep a longer Mexico escape simple.',
    highlights: [
      '10-night all-inclusive package',
      'Beachfront Riviera Maya setting',
      'Family activities and spa options',
    ],
    hotelFeatures: [
      'Kids club',
      'Explorer activities',
      'Spa',
      'Swim-up bar',
      'Multiple restaurants',
    ],
    locationSummary:
      'Near Tulum\'s beaches, ruins and cenotes, with Riviera Maya day trips available for travellers who want more than pool time.',
    included: [
      'Return flights',
      '10 nights accommodation',
      'All inclusive board',
      'Checked luggage',
      'Resort entertainment',
    ],
    termsNote:
      'Example Mexico savings are preview content and will refresh with live package contracts later.',
    rating: 4.5,
    reviewSummary:
      'A family-friendly all-inclusive option with beach, culture and long-haul value.',
    cancellation: 'Cancellation windows depend on combined flight and hotel rules.',
    deposit: 'Long-haul deposit preview from £99pp.',
    familyScore: 5,
  },
  {
    slug: 'liberty-lykia-oludeniz-turkey',
    saving: 'SAVE £175',
    savingAmount: 175,
    badge: 'Family favourite',
    destination: 'Oludeniz, Turkey',
    resort: 'Liberty Lykia',
    nights: '7 nights',
    board: 'All inclusive',
    travel: 'Direct flights',
    price: '£679',
    priceFrom: 679,
    total: 'Aqua fun included',
    image:
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Family', 'All-inclusive', 'Beach'],
    overview:
      'A lively Turkey favourite where all-inclusive value, splash facilities and dramatic coastline combine into a strong school-holiday shortlist.',
    highlights: [
      'Great family activity programme',
      'All-inclusive value',
      'Near Blue Lagoon scenery',
    ],
    hotelFeatures: [
      'Water slides',
      'Kids clubs',
      'Private beach',
      'Sports courts',
      'Buffet and a la carte dining',
    ],
    locationSummary:
      'Around Oludeniz and the Turquoise Coast, with boat trips, paragliding views and protected lagoon waters nearby.',
    included: [
      'Direct flights',
      '7 nights accommodation',
      'All inclusive board',
      'Luggage allowance',
      'Family activity programme',
    ],
    termsNote:
      'School-holiday availability is limited in live systems; this page previews the expected deal format.',
    rating: 4.6,
    reviewSummary:
      'A top family-value pick where facilities and location both do the hard work.',
    cancellation: 'Flexible package terms will be surfaced at supplier selection.',
    deposit: 'Family deposit options previewed from £49pp.',
    familyScore: 5,
  },
  {
    slug: 'zafiro-palace-alcudia-majorca',
    saving: 'SAVE £135',
    savingAmount: 135,
    badge: 'Balearic polish',
    destination: 'Majorca, Spain',
    resort: 'Zafiro Palace Alcudia',
    nights: '7 nights',
    board: 'Half board',
    travel: 'Direct flights',
    price: '£649',
    priceFrom: 649,
    total: 'Suites and swim-ups',
    image:
      'https://images.unsplash.com/photo-1586007687644-aac259a12f4f?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['Family', 'Luxury', 'Beach'],
    overview:
      'A polished Balearic base with suite-style comfort, family pools and easy access to Alcudia\'s beach and marina scene.',
    highlights: [
      'Short flight Balearic comfort',
      'Family suites and swim-up room options',
      'Close to Alcudia beach',
    ],
    hotelFeatures: [
      'Multiple pools',
      'Splash area',
      'Spa',
      'Suite accommodation',
      'Half-board dining',
    ],
    locationSummary:
      'In north Majorca near Alcudia\'s long sandy bay, marina restaurants and old-town evenings.',
    included: [
      'Direct flights',
      '7 nights accommodation',
      'Half board',
      'Hand luggage',
      'Resort guidance',
    ],
    termsNote:
      'Swim-up and suite upgrades are shown as preview content until room-level availability is connected.',
    rating: 4.7,
    reviewSummary:
      'A premium family choice for travellers who want Spain to feel easy but elevated.',
    cancellation: 'Room-specific cancellation terms will be displayed before checkout.',
    deposit: 'Low deposits expected on many Balearic departures.',
    familyScore: 5,
  },
  {
    slug: 'h10-costa-adeje-palace-tenerife',
    saving: 'SAVE £110',
    savingAmount: 110,
    badge: 'Easy all inclusive',
    destination: 'Costa Adeje, Canary Islands',
    resort: 'H10 Costa Adeje Palace',
    nights: '7 nights',
    board: 'All inclusive',
    travel: 'Flights included',
    price: '£559',
    priceFrom: 559,
    total: 'Great for couples',
    image:
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=84',
    gallery: [
      'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=900&q=82',
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=82',
    ],
    tags: ['All-inclusive', 'Beach', 'Budget'],
    overview:
      'A simple sunshine win with all-inclusive comfort, Costa Adeje convenience and a price point that works for couples or friends.',
    highlights: [
      'Costa Adeje resort setting',
      'All-inclusive without long-haul prices',
      'Good winter and shoulder-season value',
    ],
    hotelFeatures: [
      'Lagoon pools',
      'Buffet dining',
      'Wellness centre',
      'Sea-view terraces',
      'Entertainment',
    ],
    locationSummary:
      'Close to Costa Adeje beaches, promenades and day trips around Tenerife\'s south coast.',
    included: [
      'Return flights',
      '7 nights accommodation',
      'All inclusive board',
      'Cabin bag',
      'Digital documents',
    ],
    termsNote:
      'Prices are sample preview rates and will be refreshed by connected suppliers in a later PR.',
    rating: 4.3,
    reviewSummary: 'A dependable all-inclusive Canary Islands pick at a friendly price.',
    cancellation: 'Flexible alternatives can be compared once live availability is added.',
    deposit: 'Example deposit preview from £39pp.',
    familyScore: 4,
  },
];

export const destinations: Destination[] = [
  {
    name: 'Maldives',
    price: 'from £1,299 pp',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=82',
    region: 'Indian Ocean',
    tagline: 'Overwater villas & turquoise lagoons',
  },
  {
    name: 'Greece',
    price: 'from £599 pp',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=82',
    region: 'Europe',
    tagline: 'Whitewashed villages & Aegean sunsets',
  },
  {
    name: 'Canary Islands',
    price: 'from £449 pp',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=82',
    region: 'Europe',
    tagline: 'Year-round sunshine & volcanic scenery',
  },
  {
    name: 'Dubai',
    price: 'from £999 pp',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=82',
    region: 'Middle East',
    tagline: 'Skyline luxury & desert adventures',
  },
  {
    name: 'Thailand',
    price: 'from £899 pp',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=900&q=82',
    region: 'Asia',
    tagline: 'Golden temples & pristine beaches',
  },
  {
    name: 'Mexico',
    price: 'from £1,099 pp',
    image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=900&q=82',
    region: 'Caribbean & Americas',
    tagline: 'All-inclusive Riviera & ancient ruins',
  },
];

export const benefits: Benefit[] = [
  {
    icon: 'tag',
    title: 'Handpicked deals',
    copy: 'Curated hotel and package offers chosen for value, location and holiday feel.',
  },
  {
    icon: 'calendar',
    title: 'Flexible choices',
    copy: 'Search stays, packages and flexible date ideas from one polished booking flow.',
  },
  {
    icon: 'shield',
    title: 'Trust built in',
    copy: 'Clear protection messaging, secure journeys and honest deal information.',
  },
  {
    icon: 'headset',
    title: 'UK support',
    copy: 'Friendly help for questions, saved deals and future booking support.',
  },
];

export const reviews: Review[] = [
  {
    title: 'Brilliant holiday and great price!',
    quote: 'Easy to compare resorts, save favourites and spot the deal that fitted our dates. Would not hesitate to book again.',
    person: 'Sarah J.',
    location: 'Leeds',
  },
  {
    title: 'Everything was perfect',
    quote: 'Great communication and the hotel was stunning. We had the best time in the Maldives! Will definitely book again with HTLY.',
    person: 'James T.',
    location: 'London',
  },
  {
    title: 'Super easy to use',
    quote: 'Found the ideal holiday in minutes. Prices were better than anywhere else. The search made planning genuinely enjoyable.',
    person: 'Laura M.',
    location: 'Manchester',
  },
  {
    title: 'Highly recommend',
    quote: 'ATOL protection gave us complete peace of mind. Excellent service from start to finish and the hotel recommendations were spot on.',
    person: 'Mark R.',
    location: 'Bristol',
  },
];

export const inspirationArticles: InspirationArticle[] = [
  {
    slug: 'best-maldives-resorts-2026',
    category: 'Long haul',
    title: 'The best Maldives resorts for 2026',
    teaser: 'We picked through the top island properties so you can find the right lagoon without the legwork. From budget overwater bungalows to ultra-luxury villa stays.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=84',
    readTime: '6 min read',
  },
  {
    slug: 'greece-island-hopping-guide',
    category: 'Europe',
    title: 'The ultimate Greek island hopping guide: Santorini, Mykonos and beyond',
    teaser: 'Cyclades or Ionian? Blue domes or pine forests? How to plan the perfect Greek island trip for your budget and travel style.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=84',
    readTime: '8 min read',
  },
  {
    slug: 'all-inclusive-vs-self-catering',
    category: 'Travel tips',
    title: 'All-inclusive vs self-catering: which is actually cheaper?',
    teaser: 'The honest breakdown of what you actually spend on both types of holiday, with numbers that might surprise even seasoned travellers.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=84',
    readTime: '5 min read',
  },
  {
    slug: 'tenerife-canary-islands-guide',
    category: 'Europe',
    title: 'Why Tenerife is still the best-value winter sun destination',
    teaser: 'Year-round sunshine, a growing food scene and some of the Canary Islands best hotels. There is a reason millions of Brits keep going back every year.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=84',
    readTime: '7 min read',
  },
];

export function getDealHref(deal: HolidayDeal) {
  return `/deals/${deal.slug}`;
}

export function getDealBySlug(slug: string) {
  return deals.find((deal) => deal.slug === slug);
}

export function getRelatedDeals(deal: HolidayDeal, limit = 3) {
  const related = deals
    .filter((candidate) => candidate.slug !== deal.slug)
    .map((candidate) => ({
      deal: candidate,
      score:
        candidate.tags.filter((tag) => deal.tags.includes(tag)).length +
        (candidate.destination.includes(deal.destination.split(',')[0]) ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.deal.priceFrom - b.deal.priceFrom)
    .map(({ deal: candidate }) => candidate);

  return related.slice(0, limit);
}
