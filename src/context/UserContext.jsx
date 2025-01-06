import React, { createContext, useState } from 'react';
// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
      name: 'Guest',  // Default value
      gender: 'Not specified', // Default value
    });
  
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  };
  