import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import {firebase} from '../config';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export default function HomeScreen({navigation}, props) {
  // state = {
  //   subletListings: {adressLineOne: ''},
  // };

  var getAllListings = async () => {
    const subletsRef = firebase.firestore().collection('subletListings');
    const snapshot = await subletsRef.get();

    if (snapshot.empty) {
      console.log('No matching documents');
    } else {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    }
  };
  // var getSubletListing = async () => {
  //   const subletDoc = await firebase
  //     .firestore()
  //     .collection('subletListings')
  //     .doc('1234 Another Random Street APT F')
  //     .get();

  //   if (!subletDoc.exists) {
  //     console.log('No such document');
  //   } else {
  //     console.log(subletDoc.data());
  //   }

  //   // var subscriber = firebase
  //   //   .firestore()
  //   //   .collection('subletListings')
  //   //   .doc('1234 Another Random Street APT F')
  //   //   .onSnapshot((doc) => {
  //   //     this.setState({
  //   //       subletListings: {
  //   //         adressLineOne: doc.data().name,
  //   //       },
  //   //     });
  //   //   });
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeScreenHeader />
        <Listing />
        <Button
          onPress={() => {
            getAllListings();
          }}>
          Hello
        </Button>
        {/* <Text> Name: {this.state.subletListings.adressLineOne}</Text> */}
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
