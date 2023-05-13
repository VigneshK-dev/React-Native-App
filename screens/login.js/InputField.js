import { View, StyleSheet, Image, Text, Pressable } from "react-native"
import { SIZES, COLORS } from '../../constants';
import { useState } from "react";
import { TextInput } from "react-native";
import { Input, Button } from "native-base";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import EvilIcons from "@expo/vector-icons/EvilIcons"



function InputField() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <View style={styles.inputFieldContainer}>
            <View style={styles.formBox}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.label}>Password</Text>
                <Input
                    type={show ? "text" : "password"}
                    InputRightElement={<FontAwesome
                        name={show ? 'eye' : 'eye-slash'}
                        style={{ fontSize: 20 }}
                        onPress={handleClick}
                    />}
                    style={styles.input}
                    placeholder="Password"
                />
            </View>
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    //   text: {
    //     fontSize: 18,
    //     marginHorizontal:SIZES.width*0.1,
    //     lineHeight: 30,
    //     textAlign: "center",
    //     color: COLORS.darkGray
    //   },
    formBox: {
        marginHorizontal: SIZES.width * 0.05,
        marginTop: SIZES.height * 0.05,
    },
    inputFieldContainer: {
        flex: 1,
    },
    label: {
        color: "grey",
        fontSize: 16,
        marginBottom: 8
    },
    input: {
        height: SIZES.height * 0.06,
        width: '100%',
        backgroundColor: "#e6e8e7",
        borderRadius: "10",
        // marginBottom: 15,
        paddingHorizontal: 15,
        borderColor:"white"
    },
});
