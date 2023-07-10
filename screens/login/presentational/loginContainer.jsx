import { View, StyleSheet, Image, Text } from "react-native";
import Logo from "../../../assets/images/logo_02.png";
import { SIZES, COLORS } from "../../../constants";
import { useSelector } from "react-redux";
import { Messages } from "../../../utils/text";
import React from "react";

function LoginContainer() {
  const loginType = useSelector((state) => state.login.loginType);

  return (
    <View style={styles.logoContainer}>
      <Image
        source={Logo}
        style={{
          resizeMode: "contain",
          width: SIZES.width * 0.5,
          marginTop: 20,
          height: 100,
        }}
      />
      <Text style={styles.title}>
        {loginType === "signup" ? Messages.signUpTitle : Messages.loginTitle}
      </Text>
      <Text style={styles.text}>
        {loginType === "signup"
          ? Messages.signUpSubTitle
          : Messages.loginSubTitle}
      </Text>
    </View>
  );
}

export default LoginContainer;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "700",
    marginVertical: SIZES.height * 0.008,
  },
  text: {
    fontSize: 18,
    marginHorizontal: SIZES.width * 0.1,
    lineHeight: 30,
    textAlign: "center",
    color: COLORS.darkGray,
  },
  inputFieldContainer: {
    marginHorizontal: SIZES.width * 0.05,
    marginVertical: SIZES.height * 0.02,
  },
});
