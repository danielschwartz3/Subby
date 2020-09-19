import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
