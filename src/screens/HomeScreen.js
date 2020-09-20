import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, Text, FlatList} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import {firebase} from '../config';
import {Paragraph, Card, Title, Button, Avatar} from 'react-native-paper';
import {sub} from 'react-native-reanimated';

export default function HomeScreen({navigation}) {
  const [sublets, setSublets] = useState([]);

  const subletsRef = firebase.firestore().collection('subletListings');

  useEffect(() => {
    subletsRef.onSnapshot(
      (querySnapshot) => {
        const newSublets = [];
        querySnapshot.forEach((doc) => {
          const entity = doc.data();
          entity.id = doc.id;
          newSublets.push(entity);
        });
        setSublets(newSublets);
      },
      (error) => {
        console.log(error);
      },
    );
  });

  /*
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
  */

  const goToPostingsPage = () => {
    navigation.navigate('Posting');
  };

  const renderEntity = ({item, index}) => {
    return (
      <View>
        <Card>
          <Card.Title title="User" style={{padding: 15}} />
          <Card.Content>
            <Title>Price per Month</Title>
            <Paragraph>Address</Paragraph>
            <Paragraph>City</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button onPress={() => navigation.navigate('ListDetail')}>
              Details
            </Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HomeScreenHeader goToPostings={goToPostingsPage} />

      {sublets && (
        <View style={styles.listContainer}>
          <FlatList
            data={sublets}
            renderItem={renderEntity}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textField: {
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
  },
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
