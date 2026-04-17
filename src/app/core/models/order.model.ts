import { CartItem } from './cart.model';

export type OrderStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Preparing'
  | 'OutForDelivery'
  | 'Delivered'
  | 'Cancelled';

export interface Order {
  orderId:         number;
  totalAmount:     number;
  status:          OrderStatus;
  shippingAddress: string;
  placedAt:        string;
  items:           CartItem[];
}

export interface PlaceOrderDto {
  shippingAddress: string;
  couponCode?:     string;
}

export interface CouponDto {
  code:            string;
  discountPercent: number;
  expiryDate:      string;
}

export interface LoyaltyDto {
  points:      number;
  lastUpdated: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data:    T | null;
}
