'use client'

import React, { createContext, useState } from 'react'

interface ThemeContextType {
  toggle: () => void;
  mode: string;
}

interface Props {
  children: React.ReactNode;
}

const defaultContextValue: ThemeContextType = {
  toggle: () => {},
  mode: 'dark',
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState('dark')

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
