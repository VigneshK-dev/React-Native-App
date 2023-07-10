import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { SIZES } from "../constants";
import { HStack, Spinner } from "native-base";

function Button({ text, type, newWidth, onClick, loading }) {
  const renderButton = () => {
    if (type === "primary") {
      return (
        <TouchableOpacity onPress={onClick}>
          <View
            style={{
              width: newWidth,
              backgroundColor: "rgb(237,117,80)",
              padding: SIZES.height * 0.02,
              borderRadius: 10,
            }}
          >
            {loading ? (
              <HStack space={2} justifyContent="center">
                <Spinner color="indigo.500" />
                <Text style={styles.primaryButtonText}>{text}</Text>
              </HStack>
            ) : (
              <Text style={styles.primaryButtonText}>{text}</Text>
            )}
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={onClick}>
          <View style={{ ...styles.secondaryButton, width: newWidth }}>
            <Text style={styles.secondaryButtonText}>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return <View>{renderButton()}</View>;
}

const styles = StyleSheet.create({
  secondaryButton: {
    borderRadius: 10,
    padding: 20,
  },
  primaryButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: Dimensions.get("window").width * 0.04,
    textAlign: "center",
  },
  secondaryButtonText: {
    color: "rgb(159,164,169)",
    fontWeight: "700",
    fontSize: Dimensions.get("window").width * 0.04,
    textAlign: "center",
  },
});

export default Button;
