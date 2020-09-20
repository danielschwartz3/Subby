import React from 'react';
import {
  Appbar,
  Card,
  Chip,
  Button,
  Avatar,
  Title,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import {View} from 'react-native';

export default function ListDetailScreen({route, navigation}) {
  const {item} = route.params;
  // const sub_icon = (props) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <View>
      <View>
        <Appbar.Header style={{backgroundColor: '#1C2541'}}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Individual Listing" />
        </Appbar.Header>
      </View>

      <Card>
        <Card.Title
          title={`${item.hostName}`}
          subtitle={`${item.phoneNumber}`}
          // left={sub_icon}
          style={{padding: 15}}
        />
        <Card.Content>
          <Title>{`$${item.price}/month`}</Title>
          <Paragraph>{`${item.addressLineOne}`}</Paragraph>
          <Paragraph>{`${item.addressLineTwo}`}</Paragraph>
          <Paragraph>{`${item.city}, ${item.state}, ${item.zipCode}`}</Paragraph>
          <Paragraph>{`${item.startDate} - ${item.endDate}`}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <View style={{paddingRight: 5}}>
            <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
              <Paragraph style={{color: 'white'}}>
                {`${item.bedroom}`} bedrooms
              </Paragraph>
            </Chip>
          </View>
          <View style={{paddingRight: 5}}>
            <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
              <Paragraph style={{color: 'white'}}>
                {`${item.bathroom}`} bathrooms
              </Paragraph>
            </Chip>
          </View>

          <View>
            <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
              <Paragraph style={{color: 'white'}}>
                {`${item.sqFt}`} Square Feet
              </Paragraph>
            </Chip>
          </View>
        </Card.Actions>
        <Card.Content>
          <Paragraph>{`${item.description}`}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
