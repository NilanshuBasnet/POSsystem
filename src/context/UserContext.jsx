import React, { createContext, useState } from 'react';
// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
      name: 'Guest',  // Default value
      gender: 'Not specified', // Default value
    });

    // State for storing the cart data
    const [cart, setCart] = useState([]);

    const [history, setHistory] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };
    // Function to clear the cart
    const clearCart = () => {
      setCart([]); // Clears the cart
    };

        // Function to add a purchase to the history
    const addToHistory = (purchase) => {
      setHistory((prevHistory) => [...prevHistory, purchase]);
      };
  
  
    return (
      <UserContext.Provider value={{ userData, setUserData, cart, addToCart, clearCart, history, addToHistory }}>
        {children}
      </UserContext.Provider>
    );
  };
  