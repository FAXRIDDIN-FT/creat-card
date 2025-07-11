export interface IPraducts {
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
export interface IRecipes {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  image: string;
}
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
  id: number
  title: string
  body: string
  userId: number
}
export interface WishlistItem {
  id: number
  title: string
  thumbnail?: string
  type: 'product' | 'post' | 'user' | 'todo' | 'comment' | 'album'
  [key: string]: any
}



