import { createContext, useContext, useState } from "react";

// Creamos el contexto
export const CompositionContext = createContext();

// Creamos un hook para acceder al contexto de forma fácil
export const useCompositionContext = () => {
  return useContext(CompositionContext);
};
