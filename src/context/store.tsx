import React, { createContext, useState } from "react";

export const StoreContext = createContext<any | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <StoreContext.Provider value={{ count, setCount }}>
      {children}
    </StoreContext.Provider>
  );
};
