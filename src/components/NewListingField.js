import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {Image, View, Text, StyleSheet} from 'react-native';

const NewListingField = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.textField}>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
  },
});

export default NewListingField;
