import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <Listing />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
