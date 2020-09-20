import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import {firebase} from '../config';
import {Paragraph, Card, Title, Button, Chip} from 'react-native-paper';
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
      <SafeAreaView>
        <Card elevation={50}>
          <Card.Content>
            <Title style={{color: '#1C2541'}}>{`$${item.price}/month`} </Title>
            <Paragraph style={{color: '#1C2541'}}>
              {`${item.addressLineOne}, ${item.addressLineTwo}, ${item.city}, ${item.state}, ${item.zipCode}`}
            </Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri: 'https://picsum.photos/700',
            }}
          />
          <Card.Actions>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{paddingRight: 5}}>
                  <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
                    <Paragraph
                      style={{
                        color: 'white',
                      }}>{`${item.bedroom} bedrooms`}</Paragraph>
                  </Chip>
                </View>
                <View style={{paddingRight: 5}}>
                  <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
                    <Paragraph
                      style={{
                        color: 'white',
                      }}>{`${item.bathroom} bedrooms`}</Paragraph>
                  </Chip>
                </View>
                <View style={{paddingRight: 5}}>
                  <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
                    <Paragraph
                      style={{
                        color: 'white',
                      }}>{`${item.sqFt} square feet`}</Paragraph>
                  </Chip>
                </View>
              </View>
              <View style={{paddingTop: 10}}>
                <Button
                  mode="outlined"
                  color="#1C2541"
                  style={{align: 'center'}}>
                  Details
                </Button>
              </View>
            </View>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <HomeScreenHeader goToPostings={goToPostingsPage} />

      {sublets && (
        <View>
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
    paddingBottom: 120,
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
