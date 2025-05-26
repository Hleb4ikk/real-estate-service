'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children, user }) => {
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
