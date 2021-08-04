import { useState, createContext } from "react";
import { config } from "../config/config";

const initialFilters = config.filters;

const FiltersContext = createContext([initialFilters]);

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
