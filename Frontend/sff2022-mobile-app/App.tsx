import "./src/utils/IgnoreWarning";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/theme/Dripsy";
import { DripsyProvider } from "dripsy";
import Fonts from './src/utils/Fonts'; // fonts component
import StatusBar from './src/utils/StatusBar'; // statusbar color config
import { AuthProvider } from './src/context/authContext/AuthContext';// Authentication State Provider
import Navigation from "./src/Navigation/Index";// component which checks if the user is logged and renders the assigned navigation.
import 'react-native-gesture-handler';

export default function App() {
  return (
    <DripsyProvider theme={theme}> 
      <StatusBar />
      <Fonts> 
        <NavigationContainer>
          <AppState>
            <Navigation/>
          </AppState>
        </NavigationContainer>
      </Fonts>
    </DripsyProvider>

  );
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}