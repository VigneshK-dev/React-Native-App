import React from 'react'
import { View, Image, Text } from 'react-native'
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS,SIZES } from '../../../constants';

function OnBoardingCard({ background,image,title,text,index}) {


  return (
    <View style={styles.scrollContainer} >
    <View style={{ flex: 3 }}>
      <ImageBackground
        source={background}
        style={[styles.background,{height:index === 1 ? "94.5%" :  "100%"}]}
      >
        <Image
          source={image}
          style={styles.image}
          resizeMode={"contain"}
        />
      </ImageBackground>
    </View>

    <View style={styles.textBox}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.text}>
        {text}
      </Text>
    </View> 

  </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: SIZES.width,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%"
  },
  image: {
    width: SIZES.width * 0.75,
    height: SIZES.width * 0.75,
    marginBottom:-SIZES.padding
  },
  textBox: {    
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.radius,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
    marginVertical:15
  },
  text: {
    fontSize: 15,
    marginHorizontal:20,
    lineHeight: 30,
    textAlign: "center",
    color: COLORS.darkGray
  }
});

export default OnBoardingCard