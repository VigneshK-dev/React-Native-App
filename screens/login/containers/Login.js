import React from "react";
import LoginContainer from "../presentational/loginContainer";
import LoginInputFieldContainer from "../presentational/loginInputFieldContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, ScrollView , StyleSheet} from "react-native";

const Login = ({navigation}) => {

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={0}
        >
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
          >
            <LoginContainer />
            <LoginInputFieldContainer  navigation={navigation}/>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 0.8,
    justifyContent: "center",
  },
});


export default Login;
