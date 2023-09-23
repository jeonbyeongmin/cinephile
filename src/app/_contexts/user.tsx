'use client';

import { createContext, useContext } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  image: string;
};

const UserContext = createContext<User | null>(null);

export function useUser() {
  return useContext(UserContext);
}

interface UserProviderProps {
  children: React.ReactNode;
  user: User | null;
}

export function UserProvider({ children, user }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
