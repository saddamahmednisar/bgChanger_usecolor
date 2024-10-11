// import React from 'react';
// import { ThemeProvider, createTheme,useTheme } from '@rneui/themed';
// import { useColorScheme, View, Text } from 'react-native';

// const AppPro = () => {
//   // Get the current system color scheme (either 'light' or 'dark')
//   const colorScheme = useColorScheme();
//   const {theme} = useTheme()

//   // Create a theme with dynamic mode based on the system color scheme
//   const customtheme = createTheme({
//     lightColors: {
//       primary: '#e7e7e8',
//     },
//     darkColors: {
//       primary: 'white',
//     },
//     mode: "light", // Automatically switches between 'light' and 'dark'
//   });

//   return (
//     <ThemeProvider theme={customtheme}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ color: theme?.colors.primary}}>Hello, Themed World!</Text>
//       </View>
//     </ThemeProvider>                                                                                                                                                       
//   );
// };

// export default AppPro;










// without theme provider

import React from 'react';
import { useColorScheme, View, Text } from 'react-native';

const AppPro = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark'; 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <Text style={{ color: isDarkMode ? 'white' : 'black' }}>Hello, Themed World!</Text>
    </View>
  );
};

export default AppPro;













// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     useColorScheme,
// } from 'react-native';

// function AppPro(): JSX.Element {
//     const isDarkMode = useColorScheme() === 'dark';
//      console.log(isDarkMode);
     

//     return (

//             <View style={styles.container}>
//                 <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
//                     HELLO WORLD
//                 </Text>
//             </View>

//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
        
//     },
    
//     whiteText: {
//         color: 'white',
//     },
//     darkText: {
//         color: 'black',
//     },
// });

// export default AppPro;
