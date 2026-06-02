export type Property = {
  id: string;
  name: string;
  location: string;
  price: string;
  priceValue: number;
  status: "FOR SALE" | "FOR RENT";
  tag?: "NEW" | "FEATURED" | "OFF-PLAN";
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  image: string;
  gallery: string[];
  year: number;
  parking: number;
  description: string;
};

const img = (id: string) => `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;

export const properties: Property[] = [
  {
    id: "azure-villa-marbella",
    name: "Villa Azure",
    location: "Marbella, Spain",
    price: "€8,950,000",
    priceValue: 8950000,
    status: "FOR SALE",
    tag: "FEATURED",
    beds: 6, baths: 7, sqft: 9800, type: "Villa", year: 2023, parking: 4,
    image: img("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    description:
      "An architectural statement perched above the Mediterranean — Villa Azure pairs minimalist concrete forms with warm travertine floors and floor-to-ceiling glass that frames an infinity pool and uninterrupted sea views.",
  },
  {
    id: "skyline-penthouse-dubai",
    name: "Skyline Penthouse",
    location: "Downtown Dubai, UAE",
    price: "€12,400,000",
    priceValue: 12400000,
    status: "FOR SALE",
    tag: "NEW",
    beds: 5, baths: 6, sqft: 8200, type: "Penthouse", year: 2024, parking: 3,
    image: img("photo-1512917774080-9991f1c4c750"),
    gallery: [
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
    ],
    description:
      "Two-storey duplex penthouse with a private rooftop terrace, plunge pool, and panoramic views of the Burj Khalifa. Bespoke Italian millwork throughout, with a private elevator from the residence lobby.",
  },
  {
    id: "atelier-loft-paris",
    name: "Atelier Loft",
    location: "Le Marais, Paris",
    price: "€4,250,000",
    priceValue: 4250000,
    status: "FOR SALE",
    beds: 3, baths: 3, sqft: 3100, type: "Apartment", year: 1890, parking: 1,
    image: img("photo-1560448204-e02f11c3d0e2"),
    gallery: [
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    description:
      "A 19th-century Marais atelier reimagined with full-height steel windows, white-oak floors, and a sculptural staircase. Mezzanine library and a private courtyard garden.",
  },
  {
    id: "ocean-residence-monaco",
    name: "Ocean Residence",
    location: "Monte Carlo, Monaco",
    price: "€18,750,000",
    priceValue: 18750000,
    status: "FOR SALE",
    tag: "FEATURED",
    beds: 4, baths: 5, sqft: 4600, type: "Apartment", year: 2022, parking: 2,
    image: img("photo-1582268611958-ebfd161ef9cf"),
    gallery: [
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    description:
      "Direct seafront residence on Avenue Princesse Grace with a 220 sqm wraparound terrace, private spa, and concierge service from one of Monaco's most discreet addresses.",
  },
  {
    id: "garden-mansion-london",
    name: "Garden Mansion",
    location: "Notting Hill, London",
    price: "€22,300,000",
    priceValue: 22300000,
    status: "FOR SALE",
    beds: 7, baths: 8, sqft: 11200, type: "Mansion", year: 1865, parking: 3,
    image: img("photo-1600573472550-8090b5e0745e"),
    gallery: [
      img("photo-1600573472550-8090b5e0745e"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1497366216548-37526070297c"),
    ],
    description:
      "A stucco-fronted Victorian villa overlooking a private garden square, restored over three years with subterranean wellness suite, wine cellar, and staff quarters.",
  },
  {
    id: "harbor-suite-newyork",
    name: "Harbor Suite",
    location: "Tribeca, New York",
    price: "€34,500/mo",
    priceValue: 34500,
    status: "FOR RENT",
    tag: "NEW",
    beds: 4, baths: 4, sqft: 5200, type: "Loft", year: 2021, parking: 2,
    image: img("photo-1486325212027-8081e485255e"),
    gallery: [
      img("photo-1486325212027-8081e485255e"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
    ],
    description:
      "Cast-iron landmark conversion with sweeping Hudson River views, double-height ceilings, and an entertainer's kitchen by Boffi.",
  },
  {
    id: "villa-celeste-mykonos",
    name: "Villa Celeste",
    location: "Mykonos, Greece",
    price: "€48,000/wk",
    priceValue: 48000,
    status: "FOR RENT",
    beds: 6, baths: 6, sqft: 7400, type: "Villa", year: 2020, parking: 4,
    image: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c"),
    ],
    description:
      "Cliffside Cycladic estate with three infinity pools cascading toward the Aegean. Full staff, chef, and private RIB transfer included.",
  },
  {
    id: "alpine-chalet-gstaad",
    name: "Alpine Chalet",
    location: "Gstaad, Switzerland",
    price: "€14,900,000",
    priceValue: 14900000,
    status: "FOR SALE",
    tag: "OFF-PLAN",
    beds: 5, baths: 6, sqft: 6800, type: "Chalet", year: 2025, parking: 4,
    image: img("photo-1449844908441-8829872d2607"),
    gallery: [
      img("photo-1449844908441-8829872d2607"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1582268611958-ebfd161ef9cf"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c"),
    ],
    description:
      "Hand-hewn larch and local stone chalet with ski-in/ski-out access, Nordic spa, cinema, and south-facing terraces.",
  },
  {
    id: "pied-a-terre-milan",
    name: "Pied-à-Terre Brera",
    location: "Brera, Milan",
    price: "€18,500/mo",
    priceValue: 18500,
    status: "FOR RENT",
    beds: 2, baths: 2, sqft: 1900, type: "Apartment", year: 2019, parking: 1,
    image: img("photo-1505691938895-1758d7feb511"),
    gallery: [
      img("photo-1505691938895-1758d7feb511"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1556909114-f6e7ad7d3136"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    description:
      "Top-floor residence on a quiet Brera courtyard with restored frescoes, Carrara marble baths, and a private rooftop terrace.",
  },
];

export const agents = [
  { id: "isabella-moreau", name: "Isabella Moreau", title: "Director, Private Office", specialty: "Ultra-Prime Residential", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80", sold: 184, years: 14, rating: 4.9, phone: "+377 99 00 12 14", email: "isabella@elaraestates.com" },
  { id: "alexander-keane", name: "Alexander Keane", title: "Senior Partner, London", specialty: "Prime Central London", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80", sold: 211, years: 17, rating: 4.9, phone: "+44 20 7946 0118", email: "alex@elaraestates.com" },
  { id: "noor-rahimi", name: "Noor Rahimi", title: "Head of MENA", specialty: "Dubai & Riviera", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80", sold: 142, years: 11, rating: 5.0, phone: "+971 4 555 0199", email: "noor@elaraestates.com" },
  { id: "tomas-lindqvist", name: "Tomas Lindqvist", title: "Investment Advisor", specialty: "Income & Off-Plan", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&q=80", sold: 96, years: 9, rating: 4.8, phone: "+41 22 555 0142", email: "tomas@elaraestates.com" },
  { id: "amara-okafor", name: "Amara Okafor", title: "Lettings Director", specialty: "Short & Long Lets", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80", sold: 312, years: 12, rating: 4.9, phone: "+44 20 7946 0181", email: "amara@elaraestates.com" },
  { id: "ren-takeda", name: "Ren Takeda", title: "Architecture & Design", specialty: "New Developments", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80", sold: 87, years: 8, rating: 4.9, phone: "+81 3 5555 0123", email: "ren@elaraestates.com" },
];

export const posts = [
  { id: "monaco-market-2026", title: "Monaco's Prime Market: A 2026 Outlook", category: "Market News", excerpt: "Why limited supply continues to drive double-digit growth in the principality.", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80", date: "May 12, 2026", readTime: "6 min" },
  { id: "buying-off-plan", title: "The Quiet Advantage of Buying Off-Plan", category: "Investment", excerpt: "How early-stage acquisition can unlock pricing tiers reserved for insiders.", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1400&q=80", date: "Apr 28, 2026", readTime: "8 min" },
  { id: "interior-trends", title: "Interior Trends Shaping 2026 Residences", category: "Lifestyle", excerpt: "Warm minimalism, tactile stone, and the return of the library.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80", date: "Apr 14, 2026", readTime: "5 min" },
  { id: "renting-luxury", title: "Renting a Private Villa: What to Expect", category: "Renting", excerpt: "Concierge, staff, and the discreet logistics of seasonal living.", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80", date: "Mar 30, 2026", readTime: "7 min" },
  { id: "buyer-guide", title: "A First-Time Luxury Buyer's Playbook", category: "Buying Tips", excerpt: "From letter of intent to keys — the elegant choreography of a private sale.", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80", date: "Mar 18, 2026", readTime: "9 min" },
];

export const testimonials = [
  { name: "Charlotte & James Whitfield", role: "Bought in Notting Hill", quote: "Elara navigated a complex off-market acquisition with the kind of quiet discretion you can rarely find. Exceptional from first call to completion.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Hassan Al-Mansouri", role: "Investor, Dubai", quote: "Their off-plan portfolio access is unmatched. Three acquisitions in two years, each one ahead of market.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Sofia Romano", role: "Rented in Milan", quote: "I asked for a private terrace in Brera within a week. They delivered two perfect options the next morning.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];
