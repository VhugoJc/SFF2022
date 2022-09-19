import { ScrollView } from 'react-native';
import React from 'react'
import PaidList from '../../components/Lists/PaidList';
import { View } from 'dripsy';
import { styles } from '../../theme/stylesheet';

export default function PreSalesScreen() {
  return (
    <View
      sx={styles.container}
    >
      <PaidList />
    </View>
  )
}