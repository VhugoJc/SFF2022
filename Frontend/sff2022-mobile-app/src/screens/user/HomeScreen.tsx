import React, { useEffect, useState, useRef } from 'react';
import { RefreshControl, FlatList, Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { View } from 'dripsy';

import HomeBanner from '../../components/Banner/HomeBanner';
import Article from '../../components/Notes/Article';
import EventsBanner from '../../components/Banner/EventsBanner';
import SpoonsorBanner from '../../components/Banner/SpoonsorBanner';
import CalendarBanner from '../../components/Banner/CalendarBanner';
import CopyrightFooter from '../../components/Shared/CopyrightFooter';
import { Settings } from '../../interfaces/SettingsInterface';
import { LocalDataService } from '../../utils/LocalDataService';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [settings, setSettings] = useState<Settings>();
  const [footerVisible, setFooterVisible] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  const contentHeightRef = useRef(0);
  const layoutHeightRef = useRef(0);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 500);
  };

  useEffect(() => {
    let isMounted = true;
    const getSettings = async () => {
      try {
        const localSettings = await LocalDataService.getSettings();
        if (isMounted) setSettings(localSettings);
      } catch (error) {
        console.log('Error loading local data:', error);
        const mockSettings: Settings = {
          name: 'SFF 2022',
          website: 'https://sff2022.com',
          logo: '',
          homeData: {
            title: '¡Bienvenido al SFF 2022!',
            description:
              'Festival de comida y entretenimiento. ¡La mejor experiencia gastronómica te espera!',
            url: '',
            img: null,
          },
          sponsors: [],
          events: [],
          date: new Date(),
        };
        if (isMounted) setSettings(mockSettings);
      }
    };
    getSettings();
    return () => { isMounted = false; };
  }, [refreshing]);

  const flatListItems = [
    { key: 'homeBanner', component: <HomeBanner /> },
    { key: 'article', component: <Article homeData={settings?.homeData} /> },
    { key: 'eventsBanner', component: <EventsBanner /> },
    { key: 'sponsorBanner', component: <SpoonsorBanner sponsors={settings?.sponsors} /> },
    { key: 'calendarBanner', component: <CalendarBanner date={settings?.date} /> },
  ];

  // Show footer only near the bottom
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    layoutHeightRef.current = layoutMeasurement.height;
    contentHeightRef.current = contentSize.height;

    const isNearBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height + 15;
    setFooterVisible(isNearBottom);
  };

  return (
    <View sx={{ flex: 1, backgroundColor: '$primary' }}>
      <FlatList
        data={flatListItems}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => item.component}
        contentContainerStyle={{ paddingBottom: 80 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      />

      {/* Discreet footer only visible at bottom */}
      {footerVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <CopyrightFooter
            sx={{
              paddingVertical: 0,
              paddingHorizontal: 20,
              fontSize: 10,
            }}
          />
        </Animated.View>
      )}
    </View>
  );
}
