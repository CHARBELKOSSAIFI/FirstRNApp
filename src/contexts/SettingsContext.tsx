// import React, { createContext, useContext, useState } from 'react';

// // Define the shape of your theme
// interface Theme {
//   backgroundColor: string;
//   textColor: string;
// }

// // Define the context data
// interface SettingsContextData {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// // Create the context
// const SettingsContext = createContext<SettingsContextData | undefined>(undefined);

// // Create the provider component
// export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>({ backgroundColor: 'white', textColor: 'black' });
// //
//   const toggleTheme = () => {
//     setTheme(prevTheme => ({
//       backgroundColor: prevTheme.backgroundColor === 'white' ? 'black' : 'white',
//       textColor: prevTheme.textColor === 'black' ? 'white' : 'black',
//     }));
//   };

//   return (
//     <SettingsContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </SettingsContext.Provider>
//   );
// };

// // Custom hook to consume the context
// export const useSettings = () => {
//   const context = useContext(SettingsContext);
//   if (!context) {
//     throw new Error('useSettings must be used within a SettingsProvider');
//   }
//   return context;
// };