// import React from 'react';
// import { View, Button } from 'react-native';
// import { useTheme } from './ThemeContext';

// const ThemeSwitcher: React.FC = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   console.log('isDarkMode:', isDarkMode); // Log current theme mode
//   console.log('toggleTheme:', toggleTheme); // Log toggleTheme function

//   const handleThemeToggle = () => {
//     console.log('Button clicked');
//     toggleTheme(); // Ensure toggleTheme function is called
//   };

//   return (
//     <View>
//       <Button
//         title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         onPress={handleThemeToggle} // Use handleThemeToggle instead of toggleTheme directly
//       />
//     </View>
//   );
// };

// export default ThemeSwitcher;
