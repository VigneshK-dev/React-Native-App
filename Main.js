import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setLogin } from "./store/slices/LoginSlice";
import Routes from "./Routes";

const MainApp = ({navigation}) => {
  // const isUserloggedIn = useSelector((state) => state.login?.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    handleIsLogged();
  }, []);

  const handleIsLogged = async () => {
    try {
      let authUser = await AsyncStorage.getItem("accessToken");
      if (authUser) {
        dispatch(setLogin(true));
        navigation.reset({
          index: 0,
          routes: [{ name: "home" }],
        });
      } else {
        dispatch(setLogin(false));
      }
    } catch {
      dispatch(setLogin(false));
    }
  };

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default MainApp;
