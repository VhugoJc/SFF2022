import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl, Alert, } from 'react-native';


import HomeBanner from '../../components/Banner/HomeBanner';
import Article from '../../components/Notes/Article';
import EventsBanner from '../../components/Banner/EventsBanner';
import SpoonsorBanner from '../../components/Banner/SpoonsorBanner';
import CalendarBanner from '../../components/Banner/CalendarBanner';
import { View } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import { Settings } from '../../interfaces/SettingsInterface';
import { LocalDataService } from '../../utils/LocalDataService';


export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [settings, setsettings] = useState<Settings>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }

  useEffect(() => {

    const getSettings = async () => {
      try {
        // Load data from local JSON files
        const localSettings = await LocalDataService.getSettings();
        setsettings(localSettings);
        
      } catch (error) {
        console.log('Error loading local data:', error);
        // Fallback to mock data if local files fail
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
      }
    }
    getSettings();

  }, [refreshing])


  return (
    <View sx={Object.assign({}, styles.container, { backgroundColor: '$primary' })}>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <HomeBanner />
        <Article homeData={settings?.homeData} />
        <EventsBanner />
        <SpoonsorBanner sponsors={settings?.sponsors} />
        <CalendarBanner date={settings?.date} />
      </ScrollView>
    </View>
  )
}

