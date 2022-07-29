import React from 'react';
import {ScrollView } from 'dripsy';


import HomeBanner from '../../components/Banner/HomeBanner';
import Article from '../../components/Note/Article';
import EventsBanner from '../../components/Banner/EventsBanner';


export default function HomeScreen() {
  return (
    <ScrollView>
        <HomeBanner/>
        <Article/>
        <EventsBanner/>
    </ScrollView>
  )
}

