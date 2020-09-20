import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Listing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image></Image>
      </View>

      <View>
        <View style={styles.border}>
          <Text> ListingPricePerMonth </Text>
          <Text> ListingAddress </Text>
          <Text> ListingCity, ListingState </Text>
        </View>

        <View style={styles.infoBar}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </View>
      </View>
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
    flex: 3,
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    padding: '3%',
    borderColor: 'black',
    borderWidth: 1,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'baseline',
    padding: '10%',
    width: '95%',
    height: '15%',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Listing;
