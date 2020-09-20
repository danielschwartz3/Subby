import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import Listing from '../components/Listing';
import {firebase} from '../config';
import {ScrollView} from 'react-native';
import {
  Paragraph,
  Card,
  Title,
  Button,
  Avatar,
  TextInput,
} from 'react-native-paper';

export default function HomeScreen({navigation}) {
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

  const sub_icon = (props) => <Avatar.Icon {...props} icon="folder" />;
  const [text, setText] = React.useState('');
  getAllListings();
  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeScreenHeader />

        <Card>
          <Card.Title title="User" left={sub_icon} style={{padding: 15}} />
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
    </ScrollView>
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
//     <ScrollView>
//       <View style={styles.container}>
//         <HomeScreenHeader />
//         <Listing />
//         <Button
//           onPress={() => {
//             getAllListings();
//           }}>
//           Hello
//         </Button>
//         {/* <Text> Name: {this.state.subletListings.adressLineOne}</Text> */}
//         <Listing />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
