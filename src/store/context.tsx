import {createContext,useState} from 'react';


 export const AppContext = createContext();

 export const AppContextProvider = ({children}) => {
  const [theme,setTheme] = useState('light');
  return (
      <AppContext.Provider value={{theme,setTheme}}>
          {children}
      </AppContext.Provider>
  )
}