import { Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { View } from 'dripsy';
import React, { useEffect, useState } from 'react'
import IconBtn from '../../components/Button/IconBtn';
import TeamsList from '../../components/Lists/TeamsList';
import FoodList from '../../components/Lists/FoodsList';
import { StackScreenProps } from '@react-navigation/stack';
import teamsdb from '../../db/teams.json';
import presalesdb from '../../db/presales.json';

interface Props extends StackScreenProps<any> {

}

export default function FoodScreen({ route }: Props) {

  const [buttonActivated, setButtonActivated] = useState('Equipo');
  const status = typeof route.params !== 'undefined' ? route.params.status : null;
  const [refreshing, setRefreshing] = React.useState(false);
  const teams: any = teamsdb;
  const presales = presalesdb;

  useEffect(() => {
    shuffleArray(presales);
  }, [])

  const onRefresh = () => {
    setRefreshing(true);


    setTimeout(function () {
      shuffleArray(teamsdb); // random array team

      shuffleArray(presales);

      setRefreshing(false);
    }, 500);
  }

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
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
        style={{ minHeight: '100%' }}
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
            ? <TeamsList teams={teams} />
            : <FoodList topPresales={presales.slice(0, 10)} />
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
  background: {
    flex: 1,
    backgroundColor: '$background'
  }
});