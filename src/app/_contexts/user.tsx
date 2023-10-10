'use client';

import type { User } from '@/types/user';

import { createContext, useContext, useMemo } from 'react';

interface UserContextValue {
  user: User | null;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextValue | null>(null);

export function useUser() {
  return useContext(UserContext) as UserContextValue;
}

interface UserProviderProps {
  children: React.ReactNode;
  user: User | null;
}

export function UserProvider({ children, user }: UserProviderProps) {
  const value = useMemo(() => {
    return {
      user,
      isLoggedIn: !!user,
    };
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
