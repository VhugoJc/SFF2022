import { ScrollView } from 'react-native'
import React from 'react'
import FavList from '../../components/Lists/FavList';

export default function FavoritesScreen() {
  return (
    <ScrollView>
      <FavList/>
    </ScrollView>
  )
}