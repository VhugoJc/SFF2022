import { ScrollView, RefreshControl } from 'react-native';
import React from 'react'
import FavList from '../../components/Lists/FavList';
import { View } from 'dripsy';
import { styles } from '../../theme/stylesheet';

export default function FavoritesScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 500);
  }
  return (
    <View sx={styles.container}>
      <ScrollView
        style={{ minHeight: '100%' }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <FavList />
      </ScrollView>
    </View>
  )
}