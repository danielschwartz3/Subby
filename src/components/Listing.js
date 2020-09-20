import React from 'react';
import {Paragraph, Card, Title, Button, Avatar, Provider as PaperProvider} from 'react-native-paper';
import {ScrollView} from 'react-native';

export default function Listing(){

  const sub_icon = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <ScrollView>
      <Card>
        <Card.Title
          title="User"
          left={sub_icon} />
        <Card.Content>
          <Title>Price per Month</Title>
          <Paragraph>Address</Paragraph>
          <Paragraph>City</Paragraph>
        </Card.Content>
        <Card.Cover source = {{uri: 'https://picsum.photos/700'}}/>
        <Card.Actions>
          <Button onPress={() => this.props.navigation.navigate('IndListing')}>Details</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Title
          title="User"
          left={sub_icon} />
        <Card.Content>
          <Title>Price per Month</Title>
          <Paragraph>Address</Paragraph>
          <Paragraph>City</Paragraph>
        </Card.Content>
        <Card.Cover source = {{uri: 'https://picsum.photos/700'}}/>
        <Card.Actions>
          <Button>Details</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};
