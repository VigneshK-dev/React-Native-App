import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { SIZES } from "../constants";
import { FormControl, Icon, Input } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Password = ({
  style,
  label,
  value,
  handleChange,
  type,
  errorMessage,
}) => {
  const [show, setShow] = useState(false);

  return (
    <View style={style}>
      <FormControl>
        <FormControl.Label style={styles.textLabel}>{label}</FormControl.Label>
        <Input
          onChangeText={(newText) => handleChange(newText, type)}
          value={value}
          fontSize={18}
          borderWidth={0.6}
          height={SIZES.height * 0.055}
          borderRadius={10}
          autoCapitalize="none"
          returnKeyType="next"
          autoCompleteType="password"
          autoCorrect={false}
          textContentType="password"
          style={styles.inputFieldStyle}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr={2}
                ml={2}
                color="muted.400"
              />
            </Pressable>
          }
        />
          <Text style={styles.formItemError}>{errorMessage ? errorMessage : '' }</Text>
      </FormControl>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldStyle: {
    backgroundColor: "rgb(211, 211, 211)",
    opacity: 0.4,
  },

  textLabel: {
    marginVertical: SIZES.height * 0.01,
    opacity: 0.6,
    fontSize: 16,
  },


  formItemError: { 
    color: 'red', 
    fontSize: 14,  
    marginTop:SIZES.height * 0.001,
  },
});

export default Password;
