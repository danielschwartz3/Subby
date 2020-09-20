import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import {firebase} from '../config';
import {ScrollView} from 'react-native';

export default function HomeScreen(props) {
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
    flex: 1,
  },
});
