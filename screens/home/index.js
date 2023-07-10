import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { setLogin } from "../../store/slices/LoginSlice";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    AsyncStorage.clear();
    dispatch(setLogin(false));
    navigate.navigate("login");
    navigation.reset({
      index: 0,
      routes: [{ name: "login" }],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text>Home Page</Text>
      <Button
        text="Logout"
        newWidth={200}
        type="primary"
        onClick={handleLogout}
      ></Button>
    </SafeAreaView>
  );
};

export default Home;
