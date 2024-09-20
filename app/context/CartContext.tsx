"use client";

import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';

import { useLocalStorage } from '@/lib/hooks';
import { ShoppingCartProduct } from '@/lib/types';

interface CartState {
  cart: ShoppingCartProduct[];
}

type CartAction = { type: 'ADD_PRODUCT'; payload: ShoppingCartProduct } | { type: 'REMOVE_PRODUCT'; payload: { id: number } };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        return {
          ...state,
          cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, count: item.count + 1 } : item)
        }
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_PRODUCT':
      return { ...state, cart: state.cart.filter(product => product.id !== action.payload.id) };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [item, setItem] = useLocalStorage('cart', []);
  const [state, dispatch] = useReducer(cartReducer, { cart: item });

  useEffect(() => {
    setItem(state.cart);
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error();
  }

  return context;
};
