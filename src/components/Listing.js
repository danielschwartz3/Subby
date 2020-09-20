import React from 'react';
import {
  Paragraph,
  Card,
  Title,
  Button,
  Avatar,
  Provider as PaperProvider,
} from 'react-native-paper';

export default function Listing({navigation}) {
  const sub_icon = (props) => <Avatar.Icon {...props} icon="folder" />;

  // const onDetailPress = () => {
  //     navigation.navigate(‘IndListing’);
  //   };

  return (
    <Card>
      <Card.Title title="User" left={sub_icon} style={{padding: 15}} />
      <Card.Content>
        <Title>Price per Month</Title>
        <Paragraph>Address</Paragraph>
        <Paragraph>City</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      {/* <Card.Actions>
        <Button onPress={() => navigation.navigate('IndListing')}>
          Details
        </Button>
      </Card.Actions> */}
    </Card>
  );
}

//     <View style={styles.container}>
//       <View style={styles.image}>
//         <Image></Image>
//       </View>

//       <View>
//         <View style={styles.border}>
//           <Text> ListingPricePerMonth </Text>
//           <Text> ListingAddress </Text>
//           <Text> ListingCity, ListingState </Text>
//         </View>

//         <View style={styles.infoBar}>
//           <Text>Hello</Text>
//           <Text>Hello</Text>
//           <Text>Hello</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     height: 90,
//     paddingTop: 50,
//     backgroundColor: '#0B132B',
//   },
//   text: {
//     flex: 3,
//     color: '#FFFFFF',
//     fontSize: 23,
//     textAlign: 'center',
//   },
//   image: {
//     flex: 1,
//     padding: '3%',
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'baseline',
//     padding: '10%',
//     width: '95%',
//     height: '15%',
//     flexDirection: 'row',
//     borderColor: 'black',
//     borderWidth: 1,
//     justifyContent: 'space-between',
//   },
//   infoBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default Listing;
