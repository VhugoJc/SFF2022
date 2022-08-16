import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { Image } from "dripsy";
import CarouselSnap, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from 'react-native';

interface Props{
    arrayImages: string[],
    height: number,
    hideDots?:boolean
}

interface itemProps{
    item:string
}

export default function ImagesCarousel({arrayImages, height, hideDots}:Props) {
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const windowWidth = Dimensions.get('window').width;
  
    const renderItem = ({ item }:itemProps) => (
      <Image source={require('../../../assets/img/team1.jpg')} style={{ height,width:'100%'}} />
    );
  
    const pagination = () => {
      return (
        <Pagination
          dotsLength={arrayImages.length}
          activeDotIndex={activeDotIndex}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          containerStyle={styles.dotsContainer}
          dotStyle={styles.dot}
        />
      );
    };
  
    return (
      <View style={styles.content}>
        <CarouselSnap
          layout="default"
          data={arrayImages}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveDotIndex(index)}
        />
  
        {!hideDots && pagination()}
      </View>
    );
}


const styles = StyleSheet.create({
    content: {
      position: "relative",
    },
    dotsContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 70,
      paddingBottom: 0,
    },
    dot: {
      backgroundColor: "#ffffff",
    },
  });