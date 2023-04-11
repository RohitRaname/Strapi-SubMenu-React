import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [pageId, setPageId] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = (pageId) => {
    setPageId(pageId);
    setMenuOpen(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <AppContext.Provider value={{ setPageId, pageId }}>
      {children}
    </AppContext.Provider>
  );
};
