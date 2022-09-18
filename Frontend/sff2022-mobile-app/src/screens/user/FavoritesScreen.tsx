import { ScrollView, RefreshControl } from 'react-native';
import React from 'react'
import FavList from '../../components/Lists/FavList';

export default function FavoritesScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }
  return (
    <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
    >
      <FavList/>
    </ScrollView>
  )
}