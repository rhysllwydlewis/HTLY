import type { IconName } from '@/components/Icon';

export type NavigationItem = {
  label: string;
  href: string;
};

export type SearchTab = {
  label: string;
  icon: IconName;
};

export type HolidayDeal = {
  saving: string;
  badge: string;
  destination: string;
  resort: string;
  nights: string;
  board: string;
  travel: string;
  price: string;
  total: string;
  image: string;
  tags: string[];
};

export type Destination = {
  name: string;
  price: string;
  image: string;
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
};

export const heroImage = 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2400&q=88';
export const promoImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86';

export const navigation: NavigationItem[] = [
  { label: 'Holidays', href: '/holidays' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Deals', href: '/deals' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'Support', href: '/help' }
];

export const searchTabs: SearchTab[] = [
  { label: 'Holidays', icon: 'beach' },
  { label: 'Hotels', icon: 'hotel' },
  { label: 'Flight + Hotel', icon: 'plane' },
  { label: 'Deals', icon: 'tag' }
];

export const deals: HolidayDeal[] = [
  {
    saving: 'SAVE £150',
    badge: 'All inclusive',
    destination: 'Maldives',
    resort: 'Sun Siyam Iru Veli',
    nights: '7 nights',
    board: 'All inclusive',
    travel: 'Flights included',
    price: '£1,299',
    total: 'Low deposit available',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=84',
    tags: ['Beach', 'Luxury', 'All-inclusive']
  },
  {
    saving: 'SAVE £120',
    badge: 'Family favourite',
    destination: 'Rhodes, Greece',
    resort: 'Lindos Grand Resort & Spa',
    nights: '7 nights',
    board: 'Breakfast',
    travel: 'Direct flights',
    price: '£599',
    total: 'Total price £1,198',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=84',
    tags: ['Family', 'Beach', 'Budget']
  },
  {
    saving: 'SAVE £200',
    badge: 'Luxury escape',
    destination: 'Santorini, Greece',
    resort: 'Canaves Oia Suites',
    nights: '5 nights',
    board: 'Breakfast',
    travel: 'Flights included',
    price: '£799',
    total: 'Limited-time offer',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=84',
    tags: ['Luxury', 'City break', 'Beach']
  }
];

export const destinations: Destination[] = [
  { name: 'Maldives', price: 'from £1,299 pp', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=82' },
  { name: 'Greece', price: 'from £599 pp', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=82' },
  { name: 'Canary Islands', price: 'from £349 pp', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=82' },
  { name: 'Dubai', price: 'from £499 pp', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=82' },
  { name: 'Thailand', price: 'from £549 pp', image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=900&q=82' },
  { name: 'Mexico', price: 'from £549 pp', image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=900&q=82' }
];

export const benefits: Benefit[] = [
  { icon: 'tag', title: 'Handpicked deals', copy: 'Curated hotel and package offers chosen for value, location and holiday feel.' },
  { icon: 'calendar', title: 'Flexible choices', copy: 'Search stays, packages and flexible date ideas from one polished booking flow.' },
  { icon: 'shield', title: 'Trust built in', copy: 'Clear protection messaging, secure journeys and honest deal information.' },
  { icon: 'headset', title: 'UK support', copy: 'Friendly help for questions, saved deals and future booking support.' }
];

export const reviews: Review[] = [
  { title: 'Brilliant holiday and great price!', quote: 'Easy to compare resorts, save favourites and spot the deal that fitted our dates.', person: 'Sarah J.' },
  { title: 'Everything felt simple', quote: 'The search panel made it quick to plan a beach escape without endless tabs open.', person: 'James T.' },
  { title: 'Proper holiday inspiration', quote: 'Loved the destination cards and clear prices. It felt premium but still affordable.', person: 'Laura M.' }
];
