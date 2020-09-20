import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreenHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Subby Postings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#6495ed',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default HomeScreenHeader;
