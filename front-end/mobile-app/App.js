import React, { useState, useMemo, createRef } from "react";
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
import SettingsScreen from "./Screens/Settings";
import EditProfileScreen from "./Screens/EditProfile";
import AccountSettingsScreen from "./Screens/AccountSettings";
import LoginScreen from "./Screens/Login";
import RegisterScreen1 from "./Screens/Register-1";
import RegisterScreen2 from "./Screens/Register-2";
import RegisterScreen3 from "./Screens/Register-3";
import { UserContext as UserContext } from "./Hooks/UserContext";

const Stack = createStackNavigator();

export default function App({navigation}) {
  const navigationRef = createRef()
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={value}>
      <PaperProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          {user == null ? (
            <Stack.Navigator initialRouteName="SymptomLog">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Register-1"
                component={RegisterScreen1}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Register-2"
                component={RegisterScreen2}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Register-3"
                component={RegisterScreen3}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerRight: () => (
                    <Button icon="account-circle-outline" onPress={() => navigationRef.current?.navigate("Settings")}></Button>
                  ),
                }}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="EditProfile" component={EditProfileScreen} />
              <Stack.Screen
                name="AccountSettings"
                component={AccountSettingsScreen}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </UserContext.Provider>
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
