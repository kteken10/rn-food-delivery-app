// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  time: string;
  rating: number;
  price: string;
  image: any;
  orderf?: number;
  description: string;
  category: string; // Nouveau champ pour la catégorie
}

export interface RecommandedProduct extends Product {
  address: string;
  discount?: string; // Nouveau champ optionnel pour les promotions
}

export const categories: string[] = ['Burger', 'Coffee', 'Pizza', 'Sushi', 'Dessert'];

export const products: Product[] = [
  {
    id: '1',
    name: 'Cheeseburger Deluxe',
    time: '15-20 min',
    rating: 4.8,
    price: '$8.99',
    image: require('../../assets/burger.png'),
    orderf: 1243,
    description: 'Juicy beef patty with cheddar, lettuce, tomato and special sauce',
    category: 'Burger'
  },
  {
    id: '2',
    name: 'Artisan Latte',
    time: '5-10 min',
    rating: 4.6,
    price: '$4.50',
    image: require('../../assets/burger.png'),
    orderf: 892,
    description: 'Premium espresso with steamed organic milk and latte art',
    category: 'Coffee'
  },
  {
    id: '3',
    name: 'Margherita Pizza',
    time: '20-25 min',
    rating: 4.7,
    price: '$12.99',
    image: require('../../assets/burger.png'),
    orderf: 756,
    description: 'Classic pizza with San Marzano tomatoes, fresh mozzarella and basil',
    category: 'Pizza'
  },
  {
    id: '4',
    name: 'Sushi Combo',
    time: '25-30 min',
    rating: 4.9,
    price: '$18.50',
    image: require('../../assets/burger.png'),
    description: 'Chef selection of 12 pieces nigiri and maki rolls',
    category: 'Sushi'
  }
];

export const recommandedProducts: RecommandedProduct[] = [
  {
    id: 'rec1',
    name: 'Gourmet Burger Meal',
    time: '15-20 min',
    rating: 4.9,
    price: '$14.99',
    image: require('../../assets/burger.png'),
    address: "Burger Haven, 123 Food Street",
    description: 'Signature burger with fries and drink - our best seller!',
    category: 'Burger',
    discount: '15% OFF'
  },
  {
    id: 'rec2',
    name: 'Caramel Frappuccino',
    time: '5-7 min',
    rating: 4.8,
    price: '$6.25',
    image: require('../../assets/burger.png'),
    address: "Coffee Corner, 456 Brew Avenue",
    description: 'Iced blended coffee with caramel syrup and whipped cream',
    category: 'Coffee',
    orderf: 1024
  },
  {
    id: 'rec3',
    name: 'Sushi Platter',
    time: '20-25 min',
    rating: 4.9,
    price: '$24.99',
    image: require('../../assets/burger.png'),
    address: "Tokyo Sushi, 789 Ocean Road",
    description: 'Premium 18-piece assortment with miso soup',
    category: 'Sushi',
    discount: 'Free delivery'
  },
  {
    id: 'rec4',
    name: 'Chocolate Lava Cake',
    time: '10-12 min',
    rating: 4.7,
    price: '$7.50',
    image: require('../../assets/burger.png'),
    address: "Sweet Spot, 321 Sugar Lane",
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    category: 'Dessert'
  }
];