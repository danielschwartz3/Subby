import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreenHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Subby</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 50,
    backgroundColor: '#0B132B',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default HomeScreenHeader;
