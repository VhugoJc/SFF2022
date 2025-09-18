import React, { useState, useRef } from "react";
import { View, StyleSheet, ImageSourcePropType, Dimensions, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

interface Props{
    arrayImages: ImageSourcePropType[],
    height: number,
    hideDots?:boolean
}

export default function ImagesCarousel({arrayImages, height, hideDots}:Props) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const windowWidth = Dimensions.get('window').width;
    const pagerRef = useRef<PagerView>(null);
  
    const renderDots = () => {
      if (hideDots) return null;
      
      return (
        <View style={styles.dotsContainer}>
          {arrayImages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  opacity: index === activeDotIndex ? 1 : 0.4,
                  transform: [{ scale: index === activeDotIndex ? 1 : 0.6 }]
                }
              ]}
            />
          ))}
        </View>
      );
    };
  
    return (
      <View style={styles.content}>
        <PagerView
          ref={pagerRef}
          style={[styles.pagerView, { height }]}
          initialPage={0}
          onPageSelected={(e) => setActiveDotIndex(e.nativeEvent.position)}
        >
          {arrayImages.map((image, index) => (
            <View key={index} style={styles.page}>
              <Image source={image} style={[styles.image, { height }]} />
            </View>
          ))}
        </PagerView>
        
        {renderDots()}
      </View>
    );
}


const styles = StyleSheet.create({
    content: {
      position: "relative",
    },
    pagerView: {
      flex: 1,
      width: '100%',
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      resizeMode: 'cover',
    },
    dotsContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 70,
      paddingBottom: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      backgroundColor: "#ffffff",
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
    },
  });