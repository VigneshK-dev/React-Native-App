import React from "react";
import { Input, View, FormControl, Text } from "native-base";
import { StyleSheet } from "react-native";
import { SIZES } from "../constants";

const InputField = ({
  style,
  label,
  value,
  handleChange,
  type,
  errorMessage,
}) => {


  return (
    <View style={style}>
      <FormControl>
        <FormControl.Label style={styles.textLabel}>{label}</FormControl.Label>
        <Input
          onChangeText={(newText) => handleChange(newText, type)}
          borderWidth={0.6}
          value={value}
          height={SIZES.height * 0.055}
          borderRadius={10}
          fontSize={18}
          style={styles.inputFieldStyle}
          autoCapitalize="none"
          returnKeyType="next"
          autoCorrect={false}
        />
          <Text style={styles.formItemError}>{errorMessage ? errorMessage : ''}</Text>
      </FormControl>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldStyle: {
    backgroundColor: "rgb(211, 211, 211)",
    opacity: 0.4,
    color:'black'
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

export default InputField;
