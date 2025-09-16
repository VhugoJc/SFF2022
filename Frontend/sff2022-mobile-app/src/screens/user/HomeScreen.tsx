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
        // Comentamos temporalmente la llamada a la API
        // const response = await userAPI.get('/settings');
        // if(response.data.settings){
        //   setsettings(response.data.settings);
        // }
        
        // Datos mock para desarrollo sin backend
        const mockSettings: Settings = {
          name: "SFF 2022",
          website: "https://sff2022.com",
          logo: "",
          homeData: {
            title: "¡Bienvenido al SFF 2022!",
            description: "Festival de comida y entretenimiento. ¡La mejor experiencia gastronómica te espera!",
            url: "",
            img: null
          },
          sponsors: [],
          events: [],
          date: new Date()
        };
        setsettings(mockSettings);
        
      } catch (error) {
        console.log('API no disponible, usando datos mock');
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
        <Article homeData={settings?.homeData}/>
        <EventsBanner />
        <SpoonsorBanner sponsors={settings?.sponsors} />
        <CalendarBanner date={settings?.date} />
      </ScrollView>
    </View>
  )
}

