import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl, Alert, } from 'react-native';


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
  const [settings, setsettings] = useState<Settings>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }

  useEffect(() => {

    const getSettigs = async () => {
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
          logo: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/536283485_1299369135311145_4771061172300677103_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ve1sHHfq4WQQ7kNvwH8v3d_&_nc_oc=AdliJFINB9SjN9S2V51Y714OwIgaRUdUozgli78-pYdVTEXCkv-bG6wM0b_NnDmEhZpzi8fm6wdHhj7GzuzqnXy8&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=yPHkgCDBMkALM-qPliulKQ&oh=00_AfbWEtrNAspRhQ46ndlgV16fm4YIENmouUcT-1kAxOwkWw&oe=68D12C4D",
          homeData: {
            title: "¡Bienvenido al Sales Force Fest 2025!",
            description: "Festival de comida y entretenimiento. ¡La mejor experiencia gastronómica te espera!",
            url: "",
            img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/532161831_1293546049226787_6335895516557152430_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=_KeyxbHDGKoQ7kNvwHpuAyH&_nc_oc=Adlzvpeg_HKUWZ88dPR2uKuT5GfaaFBfxziwuBEMfmTjkAwutzio72N9WUm5--shbWPzmkyO1qPmYqMZsB8gmR1n&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=c7wgceZvq1E6_qvdUTfhsg&oh=00_AfZTAC1d55vnXKQ36Ahmq7G7nSEMG2Msw-wPYtZ8nJieOA&oe=68D151B7"
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

