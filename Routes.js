import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./screens/on-boarding/containers/OnBoarding";
import Login from "./screens/login/containers/Login";
import Home from "./screens/home";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName="onBoarding">
        <Stack.Screen
          name="onBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
  );
};

export default Routes;
