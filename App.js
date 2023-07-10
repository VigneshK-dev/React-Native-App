import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NativeBaseProvider } from "native-base";
import MainApp from "./Main";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
      <NavigationContainer>
          <MainApp/>
         </NavigationContainer> 
      </NativeBaseProvider>
    </Provider>
  );
}
