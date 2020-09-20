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
export default function ListDetailScreen({navigation}) {
  const sub_icon = (props) => <Avatar.Icon {...props} icon="folder" />;
  return (
    <View>
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Individual Listing" />
        </Appbar.Header>
      </View>

      <Card>
        <Card.Title
          title="John Wick"
          subtitle="johnwick@gmail.com"
          left={sub_icon}
          style={{padding: 15}}
        />
        <Card.Content>
          <Title>$1000 Per Month</Title>
          <Paragraph>123 Wohn Jick Street</Paragraph>
          <Paragraph>Detroit, MI 48084</Paragraph>
          <Paragraph>10/10/2019-12/12/2019</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <View>
            <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
              <Paragraph style={{color: 'white'}}>2 Roommates</Paragraph>
            </Chip>
          </View>
          <View>
            <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
              <Paragraph style={{color: 'white'}}>2 Bathroom</Paragraph>
            </Chip>
          </View>
          <View>
            <Chip style={{backgroundColor: '#1C2541'}} mode="outlined">
              <Paragraph style={{color: 'white'}}>850 Square Feet</Paragraph>
            </Chip>
          </View>
        </Card.Actions>
        <Card.Content>
          <Paragraph>
            "This is a totally real desciption that I definitely took a lot of
            time and effort to come up with. This is a totally real desciption
            that I definitely took a lot of time and effort to come up with.
            This is a totally real desciption that I definitely took a lot of
            time and effort to come up with."
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
