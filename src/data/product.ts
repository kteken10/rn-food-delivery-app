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
}

export interface RecommandedProduct extends Product {
  adress: string;
}

export const categories: string[] = ['Burger', 'Pizza', 'Thai', 'Sushi'];

export const products: Product[] = [
  {
    id: '1',
    name: 'Cheeseburger',
    time: '20 min',
    rating: 4.8,
    price: '$6.00',
    image: require('../../assets/burger.png'),
    orderf: 500,
    description: 'Delicious beef patty with melted cheese and fresh veggies'
  },
  {
    id: '2',
    name: 'Latte',
    time: '15 min',
    rating: 4.5,
    price: '$4.00',
    image: require('../../assets/coffee.png'),
    orderf: 500,
    description: 'Smooth espresso with steamed milk'
  },
];

export const recommandedProducts: RecommandedProduct[] = [
  {
    id: '3',
    name: 'Pizza Margherita',
    time: '25 min',
    rating: 4.9,
    price: '$8.00',
    image: require('../../assets/burger.png'),
    adress: "Cokie Heaven, 53 US city street",
    description: 'Classic pizza with tomato sauce and mozzarella'
  },
  {
    id: '4',
    name: 'Sushi Deluxe',
    time: '30 min',
    rating: 4.7,
    price: '$12.00',
    image: require('../../assets/burger.png'),
    adress: "Cokie Heaven, 53 US city street",
    description: 'Assortment of fresh sushi and sashimi'
  },
];