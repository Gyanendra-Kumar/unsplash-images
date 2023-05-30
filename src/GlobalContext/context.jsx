import { createContext, useContext, useState, useEffect } from "react";

// creating App Context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    const body = document.querySelector("body");
    // The toggle() method adds a class to the element if it does not have it, or removes it if it does.
    // In this case, it adds the dark-theme class if isDarkTheme is true, and removes it if isDarkTheme is false.
    body.classList.toggle("dark-theme", newDarkTheme);
    // console.log(body);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Creating custom hook for context
export const useGlobalContext = () => useContext(AppContext);
