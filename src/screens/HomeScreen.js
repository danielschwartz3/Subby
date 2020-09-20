import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import NewListingField from '../components/NewListingField';
import {ScrollView} from 'react-native';

import {firebase} from '../config';
import 'firebase/storage';

export default function HomeScreen({navigation}, props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeScreenHeader />
        <Listing />
        <Listing />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
