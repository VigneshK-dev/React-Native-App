import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { SIZES } from "../../../constants";
import InputField from "../../../components/InputField";
import Password from "../../../components/Password";
import Button from "../../../components/Button";
import { Messages } from "../../../utils/text";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginType, setLogin } from "../../../store/slices/LoginSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../../firebase.config";
import { useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loginInputFieldContainer = ({ navigation }) => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  const loginType = useSelector((state) => state.login.loginType);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const auth = firebaseAuth;
  const toast = useToast();

  const handleChange = (value, type) => {
    if (type === "email") {
      handleValidEmail(value);
    } else if (type === "username") {
      handleValidUsername(value);
    } else {
      handleValidPassword(value);
    }
    setLoginPayload((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleValidEmail = (val) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    if (val?.length === 0) {
      handleSetErrorMessage("email", "Enter email address");
    } else if (reg.test(val) === false) {
      handleSetErrorMessage("email", "Enter valid email address");
    } else if (reg.test(val) === true) {
      handleSetErrorMessage("email", false);
    }
  };

  const handleValidUsername = (value) => {
    if (!value) {
      handleSetErrorMessage("username", "Enter username");
    } else if (value?.length <= 2) {
      handleSetErrorMessage(
        "username",
        "Username should be greater than 2 characters"
      );
    } else {
      handleSetErrorMessage("username", false);
    }
  };

  const handleValidPassword = (value) => {
    if (!value) {
      handleSetErrorMessage("password", "Enter password");
    } else if (value?.length <= 5) {
      handleSetErrorMessage(
        "password",
        "Password should be greater than 5 characters"
      );
    } else {
      handleSetErrorMessage("password", false);
    }
  };

  const handleSetErrorMessage = (type, msg) => {
    setErrorMessage((prev) => ({
      ...prev,
      [type]: msg,
    }));
  };

  const handleSubmit = () => {
    const isAllKeysFalse = Object.values(errorMessage).every(
      (value) => value === false
    );

    if (loginType === "signup" && isAllKeysFalse) {
      setLoading(true);
      handleCreateNewUser(loginPayload?.email, loginPayload?.password);
    } else if (loginType === "login" && !errorMessage.email && !errorMessage.password) {
      handleExistingUser(loginPayload?.email, loginPayload?.password);
      setLoading(true);
    } else {
      handleError(`${loginType.toUpperCase()} ERROR`);
    }
  };

  const handleError = (message) => {
    toast.show({
      title: message,
      placement: "top",
    });
  };

  const handleCreateNewUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setLogin(true));
        setLoading(false);
        navigate.navigate("home");
        AsyncStorage.setItem("accessToken", res?._tokenResponse?.idToken);
        AsyncStorage.setItem("user", res?._tokenResponse?.email);
        navigation.reset({
          index: 0,
          routes: [{ name: "home" }],
        });
      })
      .catch((error) => {
        setLoading(false);
        handleError(error.message);
        console.log(error);
      });
  };

  const handleExistingUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setLogin(true));
        setLoading(false);
        navigate.navigate("home");
        AsyncStorage.setItem("accessToken", res?._tokenResponse?.idToken);
        AsyncStorage.setItem("user", res?._tokenResponse?.email);
        navigation.reset({
          index: 0,
          routes: [{ name: "home" }],
        });
      })
      .catch((error) => {
        setLoading(false);
        handleError(error.message);
      });
  };

  return (
    <View style={styles.textFieldContainer}>
      <InputField
        errorMessage={errorMessage.email}
        type="email"
        handleChange={handleChange}
        value={loginPayload.email}
        style={{ marginBottom: SIZES.height * 0.001 }}
        label={"Email"}
      />
      {loginType === "signup" && (
        <InputField
          errorMessage={errorMessage.username}
          type="username"
          handleChange={handleChange}
          value={loginPayload.username}
          style={{ marginBottom: SIZES.height * 0.001 }}
          label={"Username"}
        />
      )}
      <Password
        errorMessage={errorMessage.password}
        type="password"
        handleChange={handleChange}
        value={loginPayload.password}
        style={{ marginBottom: SIZES.height * 0.001 }}
        label={"Password"}
      />
      <Text
        style={{
          opacity: 0.3,
          textAlign: "right",
          fontSize: SIZES.width * 0.034,
        }}
      >
        Forgot Password?
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          loading={loading}
          onClick={handleSubmit}
          text={loginType === "signup" ? "Sign Up" : "Sign In"}
          type="primary"
          newWidth={SIZES.width * 0.88}
        />
      </View>

      <Text style={styles.subTextStyle}>
        {loginType === "signup" ? (
          <React.Fragment>
            {Messages.signUpText}{" "}
            <Text
              onPress={() => dispatch(changeLoginType("login"))}
              style={styles.ctaText}
            >
              Sign In
            </Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {Messages.loginText}{" "}
            <Text
              onPress={() => dispatch(changeLoginType("signup"))}
              style={styles.ctaText}
            >
              Sign Up
            </Text>
          </React.Fragment>
        )}
      </Text>
    </View>
  );
};

export default loginInputFieldContainer;

const styles = StyleSheet.create({
  textFieldContainer: {
    marginHorizontal: SIZES.width * 0.06,
    marginVertical: SIZES.height * 0.03,
  },

  ctaText: {
    color: "rgb(237,117,80)",
    fontWeight: "800",
  },

  subTextStyle: {
    textAlign: "center",
    fontSize: SIZES.width * 0.04,
    color: "grey",
    marginVertical: SIZES.height * 0.01,
  },

  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: SIZES.height * 0.01,
  },
});
