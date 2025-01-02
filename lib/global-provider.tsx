import React, { createContext, useContext, ReactNode } from "react";

import { getCurrentUser } from "./appwirte";
import { useAppwrite } from "./useAppwrite";

interface GlobalContextType {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  const isLogged = !!user;

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        loading,
        refetch: async (newParams) => {
          await refetch(newParams!);
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext deeve ser usado dentro de um provedor global");

  return context;
};

export default GlobalProvider;
