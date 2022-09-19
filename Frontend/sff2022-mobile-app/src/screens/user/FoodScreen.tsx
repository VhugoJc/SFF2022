import { Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { View } from 'dripsy';
import React, { useEffect, useState } from 'react'
import IconBtn from '../../components/Button/IconBtn';
import TeamsList from '../../components/Lists/TeamsList';
import FoodList from '../../components/Lists/FoodsList';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any> {

}

export default function FoodScreen({ route }: Props) {

  const [buttonActivated, setButtonActivated] = useState('Equipo');
  const status = typeof route.params !== 'undefined' ? route.params.status : null;
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }

  useEffect(() => {
    if (status) {
      setButtonActivated(status);
    }

  }, [status]);

  const handleType = (type: string) => {
    return buttonActivated === type ? 'secondary' : 'background'
  }

  return (
    <View sx={food.background}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View sx={food.container}>
          <IconBtn name='Equipo' type={handleType('Equipo')} onPress={() => setButtonActivated('Equipo')
          } />
          <IconBtn name='Combos' type={handleType('Combos')} onPress={() => setButtonActivated('Combos')} />
        </View>
        {
          buttonActivated === 'Equipo'
            ? <TeamsList />
            : <FoodList />
        }
      </ScrollView>
    </View>
  )
}


const food = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '$4',
    backgroundColor: '$background'
  },
  background:{
    flex:1,
    backgroundColor:'$background'
  }
});