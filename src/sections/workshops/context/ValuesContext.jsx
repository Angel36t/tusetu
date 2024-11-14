import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ValuesContext = createContext();

// Crear un proveedor del contexto
export const ValuesProvider = ({ children }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleValueSelection = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else if (selectedValues.length < 10) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <ValuesContext.Provider value={{ selectedValues, setSelectedValues, toggleValueSelection }}>
      {children}
    </ValuesContext.Provider>
  );
};

// Crear un hook para utilizar el contexto
export const useValuesContext = () => useContext(ValuesContext);
