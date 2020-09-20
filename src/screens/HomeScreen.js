import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import {firebase} from '../config';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export default function HomeScreen({navigation}, props) {
  var getSubletListing = async () => {
    const subletDoc = await firebase
      .firestore()
      .collection('subletListings')
      .doc('1234 Another Random Street APT F')
      .get();
    console.log(subletDoc);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeScreenHeader />
        <Listing />
        <Button
          onPress={() => {
            getSubletListing();
          }}>
          Hello
        </Button>
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
