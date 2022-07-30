import { Text, ScrollView, StyleSheet } from 'react-native';
import { View } from 'dripsy';
import React, { useState } from 'react'
import IconBtn from '../../components/Button/IconBtn';
import TeamsList from '../../components/Lists/TeamsList';
import FoodList from '../../components/Lists/FoodsList';

export default function FoodScreen() {
  const [buttonActivated, setButtonActivated] = useState('Equipo');

  const handleType=(type:string)=>{
    return buttonActivated===type?'secondary':'background'
  }

  return (
    <ScrollView>
      <View sx={food.container}>
        <IconBtn name='Equipo' type={handleType('Equipo')} onPress={()=>setButtonActivated('Equipo')
        }/>
        <IconBtn name='Combos' type={handleType('Combos')}  onPress={()=>setButtonActivated('Combos')}/>
      </View>
      {
        buttonActivated==='Equipo'
        ? <TeamsList />
        : <FoodList/>
      }
    </ScrollView>
  )
}


const food = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '$4',
    backgroundColor: '$background'
  }
});