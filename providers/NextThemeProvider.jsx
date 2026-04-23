import React from 'react';
import { ThemeProvider } from 'next-themes'
const NextThemeProvider = ({children}) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;