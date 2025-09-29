import { Text, ScrollView, StyleSheet, RefreshControl, NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';
import { View } from 'dripsy';
import React, { useEffect, useState, useRef } from 'react'
import IconBtn from '../../components/Button/IconBtn';
import TeamsList from '../../components/Lists/TeamsList';
import FoodList from '../../components/Lists/FoodsList';
import { StackScreenProps } from '@react-navigation/stack';
import CopyrightFooter from '../../components/Shared/CopyrightFooter';

interface Props extends StackScreenProps<any> {

}

export default function FoodScreen({ route }: Props) {

  const [buttonActivated, setButtonActivated] = useState('Equipo');
  const status = typeof route.params !== 'undefined' ? route.params.status : null;
  const [refreshing, setRefreshing] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(1); // Start with 1 to shuffle from first load
  const [isLoading, setIsLoading] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  const contentHeightRef = useRef(0);
  const layoutHeightRef = useRef(0);

  const onRefresh = () => {
    setRefreshing(true);
    setIsLoading(true);
    
    // Trigger shuffle by updating the key
    setShuffleKey(prev => prev + 1);
    
    setTimeout(function () {
      setRefreshing(false);
      setIsLoading(false);
    }, 300); // Reduced timeout for smoother experience
  }

  useEffect(() => {
    if (status) {
      setButtonActivated(status);
    }
  }, [status]);

  // Hide footer when switching between tabs
  useEffect(() => {
    setFooterVisible(false);
  }, [buttonActivated]);

  const handleType = (type: string) => {
    return buttonActivated === type ? 'secondary' : 'background'
  }

  // Handle scroll to show footer at bottom (exact same logic as HomeScreen)
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    layoutHeightRef.current = layoutMeasurement.height;
    contentHeightRef.current = contentSize.height;

    const isNearBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height + 15;
    setFooterVisible(isNearBottom);
  };

  return (
    <View sx={food.background as object}>
      <ScrollView
        style={{ minHeight: '100%' }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 80 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View sx={food.container as object}>
          <IconBtn name='Equipo' type={handleType('Equipo')} onPress={() => setButtonActivated('Equipo')
          } />
          <IconBtn name='Combos' type={handleType('Combos')} onPress={() => setButtonActivated('Combos')} />
        </View>
        
        {/* Render both components but show/hide based on active tab */}
        <View sx={{ display: buttonActivated === 'Equipo' ? 'flex' : 'none' }}>
          <TeamsList shuffleKey={shuffleKey} />
        </View>
        
        <View sx={{ display: buttonActivated === 'Combos' ? 'flex' : 'none' }}>
          <FoodList 
            refreshing={refreshing} 
            shuffleKey={shuffleKey}
          />
        </View>
      </ScrollView>

      {/* Discreet footer only visible at bottom - using display none to avoid spacing */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: footerVisible ? 'flex' : 'none'
        }}
      >
        <CopyrightFooter lightBackground={true}/>
      </Animated.View>
    </View>
  )
}


const food = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '$background'
  },
  background: {
    flex: 1,
    backgroundColor: '$background'
  }
});