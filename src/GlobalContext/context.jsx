import { createContext, useContext, useState, useEffect } from "react";

// creating App Context
const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("mustang");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    // const body = document.querySelector("body");
    // The toggle() method adds a class to the element if it does not have it, or removes it if it does.
    // In this case, it adds the dark-them  e class if isDarkTheme is true, and removes it if isDarkTheme is false.
    // body.classList.toggle("dark-theme", newDarkTheme);
    // console.log(body);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }),
    [isDarkTheme];

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Creating custom hook for context
export const useGlobalContext = () => useContext(AppContext);
