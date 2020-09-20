import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import NewListingField from '../components/NewListingField';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <Listing />
      <NewListingField />

      <ImageBackground
        style={{
          // resizeMode: 'contain',
          width: '120%',
          height: undefined,
          aspectRatio: 1,
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: -100,
          alignSelf: 'center',
        }}
        source={require('../backgroundPic1.png')}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
