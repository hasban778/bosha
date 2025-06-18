export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  discount: number;
  image: string;
  category: 'iphone' | 'playstation' | 'macbook';
  stock: number;
  features: string[];
}

export interface CartItem {
  id: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
  totalItems: number;
}

export interface Payment {
  id: string;
  user_id?: string;
  customer_details_id: string;
  amount: number;
  sats_amount: number;
  invoice: string;
  payment_type: 'lightning' | 'onchain';
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  updated_at: string;
}

export interface CustomerDetails {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  created_at: string;
  updated_at: string;
  payments: Payment[];
}