import { StyleSheet } from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/theme/Dripsy";
import { DripsyProvider } from "dripsy";
import Fonts from './src/utils/Fonts';
import StatusBar from './src/utils/StatusBar';
import { StackNavigator } from './src/Navigation/StackNavigation';

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <StatusBar/>
      <Fonts>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Fonts>
    </DripsyProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
