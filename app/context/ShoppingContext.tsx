"use client";

import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';

import { useLocalStorage } from '@/lib/hooks';
import { ShoppingCartProduct } from '@/lib/types';

interface ShoppingState {
  cart: ShoppingCartProduct[];
  search: string;
}

type Action = { type: 'ADD_PRODUCT'; payload: ShoppingCartProduct } | { type: 'REMOVE_PRODUCT'; payload: { id: number } } | { type: 'SEARCH', payload: string };

const ShoppingContext = createContext<{
  state: ShoppingState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const reducer = (state: ShoppingState, action: Action) => {
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
    case 'SEARCH':
      return {...state, search: action.payload }
    default:
      return state;
  }
};

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [storedValue, setStoredValue] = useLocalStorage<ShoppingCartProduct[]>('cart', []);
  const [state, dispatch] = useReducer(reducer, { cart: storedValue, search: '' });

  useEffect(() => {
    setStoredValue(state.cart);
  }, [state.cart, setStoredValue]);

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingState = () => {
  const context = useContext(ShoppingContext);

  if (!context) {
    throw new Error();
  }

  return context;
};
