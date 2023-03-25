import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl, Alert,  } from 'react-native';


import HomeBanner from '../../components/Banner/HomeBanner';
import Article from '../../components/Notes/Article';
import EventsBanner from '../../components/Banner/EventsBanner';
import SpoonsorBanner from '../../components/Banner/SpoonsorBanner';
import CalendarBanner from '../../components/Banner/CalendarBanner';
import { View } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { userAPI } from '../../api/UserApi';
import { Settings } from '../../interfaces/SettingsInterface';


export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const  [settings, setsettings] = useState<Settings>();
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }
  
  useEffect(()=>{
    
    const getSettigs = async()=>{
      try {
        const response = await userAPI.get('/settings');
        if(response.data.settings){
          console.log(response.data);
          
          setsettings(response.data.settings);
        }
      } catch (error) {
        Alert.alert('Error de conexión')
      }
    }
    getSettigs();

  },[refreshing])

  
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
        <SpoonsorBanner sponsors={settings?.sponsors} />
        <CalendarBanner />
      </ScrollView>
    </View>
  )
}

