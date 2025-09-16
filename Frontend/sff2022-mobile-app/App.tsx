import "./src/utils/IgnoreWarning";
import React from 'react';
import { DripsyProvider } from 'dripsy';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/theme/Dripsy';
import Fonts from './src/utils/Fonts';
import StatusBar from './src/utils/StatusBar';
import { AuthProvider } from './src/context/authContext/AuthContext';
import FavProvider from './src/context/FavsContext/FavsContext';
import Navigation from './src/Navigation/Index';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider>
      <DripsyProvider theme={theme}>
        <StatusBar />
        <Fonts>
          <NavigationContainer>
            <AuthProvider>
              <FavProvider>
                <Navigation />
              </FavProvider>
            </AuthProvider>
          </NavigationContainer>
        </Fonts>
      </DripsyProvider>
    </SafeAreaProvider>
  );
}