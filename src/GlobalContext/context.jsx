import { createContext, useContext, useState, useEffect } from "react";

// creating App Context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// Creating custom hook for context
export const useGlobalContext = () => useContext(AppContext);
