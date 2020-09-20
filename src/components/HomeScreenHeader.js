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


export default HomeScreenHeader;
