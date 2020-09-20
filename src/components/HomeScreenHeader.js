import React from 'react';
import {Appbar, Provider as PaperProvider} from 'react-native-paper';
import {View} from 'react-native';

const HomeScreenHeader = () => {
  return (
    <View>
        <Appbar.Header>
            <Appbar.Content title="Subby" />
        </Appbar.Header>
    </View>
  );
};


const styles = StyleSheet.create({
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

export default HomeScreenHeader;
