import { Text, ScrollView, StyleSheet } from 'react-native';
import { View } from 'dripsy';
import React, { useEffect, useState } from 'react'
import IconBtn from '../../components/Button/IconBtn';
import TeamsList from '../../components/Lists/TeamsList';
import FoodList from '../../components/Lists/FoodsList';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps <any>{

}

export default function FoodScreen({route}:Props) {

  const [buttonActivated, setButtonActivated] = useState('Equipo');
  const {status}:any|undefined = route.params;

  useEffect(() => {
    if(status){
      setButtonActivated(status);
    }
    
  }, [status]);
  
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