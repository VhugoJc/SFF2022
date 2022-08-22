import "./src/utils/IgnoreWarning";
import { StyleSheet } from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/theme/Dripsy";
import { DripsyProvider } from "dripsy";
import Fonts from './src/utils/Fonts';
import StatusBar from './src/utils/StatusBar';
import {useState} from 'react';
import AdminNavigation from "./src/Navigation/admin/AdminNavigation";

export default function App() {
  const [nav, setNav] = useState<string>("admin");
  return (
    <DripsyProvider theme={theme}>
      <StatusBar/>
      <Fonts>
        <NavigationContainer>
          
          {
            nav==="user"
            ? <AppNavigation />
            : nav==="admin"
              ? <AdminNavigation/>
              : null
          }
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
