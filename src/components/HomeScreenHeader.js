import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

const HomeScreenHeader = (props) => {
  return (
    <Appbar.Header style={{backgroundColor: '#6495ed'}}>
      <Appbar.Content titleStyle={styles.text} title="Subby Postings" />
      <Button
        style={{width: 60}}
        compact={true}
        color="white"
        mode="outlined"
        onPress={() => props.goToPostings()}>
        POST
      </Button>
    </Appbar.Header>
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
