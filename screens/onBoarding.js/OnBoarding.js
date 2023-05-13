import React, { useEffect, useRef, useState } from 'react'
import { View, Image, Animated, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import Logo from "../../assets/images/logo_02.png"
import Background1 from "../../assets/images/background_01.png"
import Background2 from "../../assets/images/background_02.png"
import Image1 from "../../assets/images/favourite_food.png"
import Image2 from "../../assets/images/hot_delivery.png"
import Image3 from "../../assets/images/great_food.png"
import OnBoardingCard from './OnBoardingCard';
import Button from '../../components/Button';
import { SIZES, COLORS } from '../../constants';
import { useNavigation } from "@react-navigation/native"

let data = [
  {
    id: 1,
    image: Image1,
    background: Background1,
    title: "Choose a Favourite Food",
    text: "When you oder Eat Steet, we'll hook you up with exclusive coupon, specials and rewards"
  },
  {
    id: 2,
    image: Image2,
    background: Background2,
    title: "Hot Delivery to Home",
    text: "We make food ordering fasr, simple and free-no matter if you order online or cash"
  },
  {
    id: 3,
    image: Image3,
    background: Background1,
    title: "Receive the Great Food",
    text: "You'll receive the great food within a hour. And get free delivery credits for every order"
  }
]


function OnBoarding() {
  const [tab, setTab] = useState(0)

  const scrollX = useRef(new Animated.Value(0)).current
  const flatListRef = useRef(FlatList);
  const navigate = useNavigation()

  const onScrollChange = useRef(({ viewableItems, changed }) => {
    setTab(viewableItems[0]?.index)
  })

  const handleNextTab = () => {
    if (tab < data.length-1) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: tab + 1
      });
    }else{
      handleSkip()
    }
  }


  const handleSkip = () => {
    navigate.navigate("login")
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: 0
    });
  }



  const renderDot = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width)
    return (
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}>
        {data.map((ele, index) => {

          let dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
            extrapolate: "clamp"
          })

          let dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp"
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
                borderRadius: 50,
                margin: 10
              }}
            />
          )
        })}
      </View>
    )
  }

  return (
    <View style={{
      flex: 1
    }}>
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
      </View>
      <Animated.FlatList
        horizontal
        ref={flatListRef}
        pagingEnabled
        bounces={false}
        data={data}
        initialScrollIndex={tab}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onViewableItemsChanged={onScrollChange.current}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ], { useNativeDriver: false })}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <OnBoardingCard
              index={index}
              key={index}
              image={item.image}
              background={item.background}
              title={item.title}
              text={item.text}
            />
          )
        }}
      />
      {renderDot()}
      <SafeAreaView>
        <View style={styles.footerButton}>
          {tab === data.length - 1 && (
            <Button
              text={"Let's Get Started"}
              type={"primary"}
              newWidth={SIZES.width * 0.8}
              onClick={handleNextTab}
            />
          )}
          {tab < data.length - 1 && (
            <>
              <Button
                text={"Skip"}
                type={"secondary"}
                onClick={handleSkip}
                newWidth={SIZES.width * 0.2}
              />
              <Button
                text={"Next"}
                type={"primary"}
                newWidth={200}
                onClick={handleNextTab}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: SIZES.height > 800 ? 50 : 25,
  },
  footerButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
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
    marginBottom: -SIZES.padding
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
    marginVertical: 15
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: "center",
    color: COLORS.darkGray
  }
});


export default OnBoarding
