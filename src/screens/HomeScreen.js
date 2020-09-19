import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import NewListingField from '../components/NewListingField';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <Listing />
      <NewListingField />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
