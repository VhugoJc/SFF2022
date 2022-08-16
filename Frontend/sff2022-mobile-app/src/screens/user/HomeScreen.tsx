import React from 'react';
import {ScrollView } from 'react-native';


import HomeBanner from '../../components/Banner/HomeBanner';
import Article from '../../components/Notes/Article';
import EventsBanner from '../../components/Banner/EventsBanner';
import SpoonsorBanner from '../../components/Banner/SpoonsorBanner';
import CalendarBanner from '../../components/Banner/CalendarBanner';


export default function HomeScreen() {
  return (
    <ScrollView >
        <HomeBanner/>
        <Article/>
        <EventsBanner/>
        <SpoonsorBanner/>
        <CalendarBanner/>
    </ScrollView>
  )
}

