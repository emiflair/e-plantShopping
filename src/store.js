import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Load saved cart from localStorage (if any)
const loadFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : { items: [] };
  } catch (e) {
    console.warn('Error loading cart from localStorage:', e);
    return { items: [] };
  }
};

// Save updated cart to localStorage
const saveToLocalStorage = (cartState) => {
  try {
    const serialized = JSON.stringify(cartState);
    localStorage.setItem('cart', serialized);
  } catch (e) {
    console.warn('Error saving cart to localStorage:', e);
  }
};

// Preload state on app launch
const preloadedState = {
  cart: loadFromLocalStorage(),
};

// Create the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// Sync state changes to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});

export default store;
