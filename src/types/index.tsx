export interface Praduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface Praducts {
  limit: 30;
  recipes: Praduct[];
  skip: 0;
  total: 50;
}
export interface Recipes {
  limit: 30;
  recipes: Recipe[];
  skip: 0;
  total: 50;
}

export interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  servings: number;
  rating: number;
  reviewCount: number;
  mealType: string[];
  ingredients: string[];
  instructions: string[];
  tags: string[];
  image: string;
  userId: number;
};

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  last_name: string;
  avatar: string;
}
export interface ICard {
  id: number;
  title: number | string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  image: string;
  quantity: number;
}
export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
