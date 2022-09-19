import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';


import HomeBanner from '../../components/Banner/HomeBanner';
import Article from '../../components/Notes/Article';
import EventsBanner from '../../components/Banner/EventsBanner';
import SpoonsorBanner from '../../components/Banner/SpoonsorBanner';
import CalendarBanner from '../../components/Banner/CalendarBanner';
import { View } from 'dripsy';
import { styles } from '../../theme/stylesheet';


export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }
  return (
    <View sx={Object.assign({},styles.container,{backgroundColor:'$primary'})}>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <HomeBanner />
        <Article />
        <EventsBanner />
        <SpoonsorBanner />
        <CalendarBanner />
      </ScrollView>
    </View>
  )
}

