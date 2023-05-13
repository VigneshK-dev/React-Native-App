import { View, StyleSheet, Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Logo from "../../assets/images/logo_02.png"
import { SIZES, COLORS } from '../../constants';
import InputField from "./InputField";




function Login() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.logoContainer}>
                <Image
                    source={Logo}
                    style={{
                        resizeMode: "contain",
                        width: SIZES.width * 0.5,
                        marginTop: 20,
                        height: 100
                    }}
                />
                <Text style={styles.title}>
                    Let's Sign You In
                </Text>
                <Text style={styles.text}>
                    Welcome back, you've been missed
                </Text>
            </View>

            <InputField/>
            
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "700",
        marginVertical:SIZES.height*0.02
      },
      text: {
        fontSize: 18,
        marginHorizontal:SIZES.width*0.1,
        lineHeight: 30,
        textAlign: "center",
        color: COLORS.darkGray
      },
      inputFieldContainer:{
          marginHorizontal:SIZES.width*0.05,
          marginVertical:SIZES.height*0.02
      } 
});
