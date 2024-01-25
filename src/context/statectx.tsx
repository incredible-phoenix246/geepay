"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

interface StateContextProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const StateCtxProvider = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const value = useMemo(() => ({ openSidebar, setOpenSidebar }), [openSidebar]);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateCtxProvider;

// Custom hook to access the ThemeProps context
export function useStateCtx() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useStateContext must be used within an CtxProvider");
  }

  return context;
}
