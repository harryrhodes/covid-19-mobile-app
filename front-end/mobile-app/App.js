import React from "react";
import { AppRegistry } from "react-native";
import {
  DefaultTheme,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/Home";
import LoginScreen from "./Screens/Login";
import RegisterScreen1 from "./Screens/Register-1";
import RegisterScreen2 from "./Screens/Register-2";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => (
                <Button icon="account-circle-outline"></Button>
              ),
            }}
          />
          <Drawer.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Register-1"
            component={RegisterScreen1}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Register-2"
            component={RegisterScreen2}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1976d2",
    accent: "#4791db",
    background: "#ffffff",
    surface: "#ffffff",
    text: "#1976d2",
    disabled: "#4791db",
    placeholder: "#4791db",
    backdrop: "#ffffff",
  },
};

AppRegistry.registerComponent("Mobile-App", () => App);