import { BadgeCheck, Headset, ShieldCheck, Truck } from 'lucide-react';
import type { Category, Feature, PromoBanner, Product, Review } from '@/types/catalog';

export const CATEGORIES: Category[] = [
  { id: 'women', name: "Women's Collection", image: 'https://images.pexels.com/photos/8743972/pexels-photo-8743972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'men', name: "Men's Collection", image: 'https://images.pexels.com/photos/6062228/pexels-photo-6062228.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'shoes', name: 'Shoes & Footwear', image: 'https://images.pexels.com/photos/27008321/pexels-photo-27008321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'beauty', name: 'Beauty & Personal Care', image: 'https://images.pexels.com/photos/39690459/pexels-photo-39690459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'accessories', name: 'Fashion Accessories', image: 'https://images.pexels.com/photos/6157408/pexels-photo-6157408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id: 'lifestyle', name: 'Lifestyle Products', image: 'https://images.pexels.com/photos/39239289/pexels-photo-39239289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const CATEGORY_NAME: Record<Category['id'], string> = Object.fromEntries(
  CATEGORIES.map((category) => [category.id, category.name]),
) as Record<Category['id'], string>;

const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const FOOTWEAR_SIZES = ['39', '40', '41', '42', '43', '44'];
const ONE_SIZE = ['Standard'];

export const PRODUCTS: Product[] = [
  {
    id: 'w1',
    name: 'Tailored Linen Blazer',
    category: 'women',
    image: 'https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 3490,
    originalPrice: 4990,
    sizes: CLOTHING_SIZES,
    colors: [
      { name: 'Ivory', hex: '#F3EBDD' },
      { name: 'Black', hex: '#0A0A0A' },
    ],
    badges: ['offer', 'bestseller'],
  },
  {
    id: 'w2',
    name: 'Flowing Midi Dress',
    category: 'women',
    image: 'https://images.pexels.com/photos/27969474/pexels-photo-27969474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 2790,
    sizes: CLOTHING_SIZES,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Terracotta', hex: '#B5573A' },
    ],
    badges: ['new'],
  },
  {
    id: 'w3',
    name: 'Wide-Leg Pleated Trousers',
    category: 'women',
    image: 'https://images.pexels.com/photos/31305112/pexels-photo-31305112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 2190,
    originalPrice: 2690,
    sizes: CLOTHING_SIZES,
    colors: [
      { name: 'Sand', hex: '#D9C7A7' },
      { name: 'Charcoal', hex: '#3A3A3A' },
    ],
    badges: ['offer'],
  },
  {
    id: 'm1',
    name: 'Relaxed Denim Trucker Jacket',
    category: 'men',
    image: 'https://images.pexels.com/photos/2460488/pexels-photo-2460488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 2990,
    originalPrice: 3990,
    sizes: CLOTHING_SIZES,
    colors: [
      { name: 'Washed Blue', hex: '#3B5B7A' },
      { name: 'Black', hex: '#0A0A0A' },
    ],
    badges: ['offer', 'bestseller'],
  },
  {
    id: 'm2',
    name: 'Camel Wool Overcoat',
    category: 'men',
    image: 'https://images.pexels.com/photos/4398944/pexels-photo-4398944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 6490,
    sizes: CLOTHING_SIZES,
    colors: [
      { name: 'Camel', hex: '#B98B5E' },
      { name: 'Graphite', hex: '#4A4A4A' },
    ],
    badges: ['new', 'bestseller'],
  },
  {
    id: 'm3',
    name: 'Everyday Street Tee Set',
    category: 'men',
    image: 'https://images.pexels.com/photos/3977441/pexels-photo-3977441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 1290,
    originalPrice: 1590,
    sizes: CLOTHING_SIZES,
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#0A0A0A' },
    ],
    badges: ['offer'],
  },
  {
    id: 's1',
    name: 'Vanta Leather Sneaker',
    category: 'shoes',
    image: 'https://images.pexels.com/photos/27503497/pexels-photo-27503497.png?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 3290,
    originalPrice: 4290,
    sizes: FOOTWEAR_SIZES,
    colors: [{ name: 'Black', hex: '#0A0A0A' }],
    badges: ['offer', 'bestseller'],
  },
  {
    id: 's2',
    name: 'Cloud White Court Sneaker',
    category: 'shoes',
    image: 'https://images.pexels.com/photos/11292946/pexels-photo-11292946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 2690,
    sizes: FOOTWEAR_SIZES,
    colors: [{ name: 'White', hex: '#FFFFFF' }],
    badges: ['new', 'bestseller'],
  },
  {
    id: 's3',
    name: 'Pulse Yellow Runner',
    category: 'shoes',
    image: 'https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 2490,
    sizes: FOOTWEAR_SIZES,
    colors: [{ name: 'Yellow', hex: '#F5C518' }],
    badges: ['new'],
  },
  {
    id: 'b1',
    name: 'Niacinamide Glow Serum',
    category: 'beauty',
    image: 'https://images.pexels.com/photos/38822007/pexels-photo-38822007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 890,
    originalPrice: 1190,
    sizes: ['30 ml', '50 ml'],
    colors: [],
    badges: ['offer', 'bestseller'],
  },
  {
    id: 'b2',
    name: 'Rosehip Repair Oil',
    category: 'beauty',
    image: 'https://images.pexels.com/photos/39392892/pexels-photo-39392892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 1150,
    sizes: ['30 ml', '50 ml'],
    colors: [],
    badges: ['new'],
  },
  {
    id: 'a1',
    name: 'Crocodile-Texture Tote',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/27046143/pexels-photo-27046143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 4590,
    originalPrice: 5490,
    sizes: ONE_SIZE,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Brown', hex: '#6B4226' },
    ],
    badges: ['offer', 'bestseller'],
  },
  {
    id: 'a2',
    name: 'Chestnut Leather Crossbody',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/27174573/pexels-photo-27174573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 3790,
    sizes: ONE_SIZE,
    colors: [{ name: 'Chestnut', hex: '#5C3A21' }],
    badges: ['new'],
  },
  {
    id: 'a3',
    name: 'Chronograph Leather Watch',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/28977357/pexels-photo-28977357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 5990,
    sizes: ONE_SIZE,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Tan', hex: '#B08A5B' },
    ],
    badges: ['bestseller'],
  },
  {
    id: 'l1',
    name: 'Oak Wall Shelf Set',
    category: 'lifestyle',
    image: 'https://images.pexels.com/photos/39239291/pexels-photo-39239291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 2190,
    sizes: ONE_SIZE,
    colors: [{ name: 'Natural Oak', hex: '#C9A779' }],
    badges: ['new'],
  },
  {
    id: 'l2',
    name: 'Matte Desk Organizer',
    category: 'lifestyle',
    image: 'https://images.pexels.com/photos/39774571/pexels-photo-39774571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 1490,
    originalPrice: 1790,
    sizes: ONE_SIZE,
    colors: [
      { name: 'Black', hex: '#0A0A0A' },
      { name: 'Sand', hex: '#D9C7A7' },
    ],
    badges: ['offer'],
  },
];

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: 'footwear-sale',
    eyebrow: 'Footwear Sale',
    title: 'Sneaker sale is live',
    subtitle: 'Premium leather and everyday runners, priced to move.',
    cta: 'Shop footwear',
    image: 'https://images.pexels.com/photos/20238933/pexels-photo-20238933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tone: 'dark',
    category: 'shoes',
  },
  {
    id: 'accessory-edit',
    eyebrow: 'Accessory Edit',
    title: 'Buy 2, save 15% on beauty',
    subtitle: 'Mix serums and oils from our skincare edit.',
    cta: 'Shop beauty',
    image: 'https://images.pexels.com/photos/37233411/pexels-photo-37233411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tone: 'orange',
    category: 'beauty',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Nusrat J.',
    city: 'Dhaka',
    rating: 5,
    text: 'Sample review: The blazer fits beautifully and the fabric feels far more premium than the price suggests.',
  },
  {
    id: 'r2',
    name: 'Rafi A.',
    city: 'Chattogram',
    rating: 5,
    text: 'Sample review: Ordered the sneakers for daily wear. Comfortable from the first day and the leather looks sharp.',
  },
  {
    id: 'r3',
    name: 'Tasnim H.',
    city: 'Sylhet',
    rating: 4,
    text: 'Sample review: The serum is lightweight and absorbs quickly. Packaging was clean and minimal, just as shown.',
  },
];

export const FEATURES: Feature[] = [
  {
    icon: BadgeCheck,
    title: 'Quality Products',
    description: 'Every piece is checked for stitching, finish and material before it reaches you.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick dispatch from Dhaka with reliable delivery across all 64 districts.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Shopping',
    description: 'Your details stay protected, with trusted payment options when checkout opens.',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    description: 'Talk to a real person on WhatsApp or Messenger for sizing, orders and returns.',
  },
];
