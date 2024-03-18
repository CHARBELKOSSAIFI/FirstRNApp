// import React, { createContext, useState, useContext } from 'react';

// interface ThemeContextType {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode); // Update state based on current value of isDarkMode
//   };

//   const theme: ThemeContextType = {
//     isDarkMode,
//     toggleTheme,
//   };

//   console.log('Current theme:', theme);

//   return (
//     <ThemeContext.Provider value={theme}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


// export default ThemeContext;
