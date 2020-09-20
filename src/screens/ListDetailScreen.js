import React from 'react';
import {
  Appbar,
  Title,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import {View, Image} from 'react-native';

export default function ListDetailScreen({navigation}) {
  return (
    <View>
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Individual Listing" />
        </Appbar.Header>
      </View>
      <View>
        <Title>User</Title>
        <Title>Price Per Month</Title>
        <Paragraph>Address</Paragraph>
        <Paragraph>City</Paragraph>
        <Image source={{uri: 'https://picsum.photos/700'}} />
        <Paragraph>Description</Paragraph>
      </View>
    </View>
  );
}
