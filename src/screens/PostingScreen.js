import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {firebase} from '../config';
import 'firebase/storage';

const PostingScreen = ({navigation}) => {
  const [addressLineOneText, setAddressLineOneText] = React.useState('');
  const [addressLineTwoText, setAddressLineTwoText] = React.useState('');
  const [cityText, setCityText] = React.useState('');
  const [stateText, setStateText] = React.useState('');
  const [zipCodeText, setZipCodeText] = React.useState('');
  const [descriptionText, setDescriptionText] = React.useState('');
  const [priceText, setPriceText] = React.useState('');
  const [bedroomText, setBedroomText] = React.useState('');
  const [bathroomText, setBathroomText] = React.useState('');
  const [startDateText, setStartDateText] = React.useState('');
  const [endDateText, setEndDateText] = React.useState('');
  const [photoURI, setPhotoURI] = React.useState(null);
  const [squareFeetText, setSquareFeetText] = React.useState(null);
  const [phoneNumberText, setPhoneNumberText] = React.useState(null);

  const goToHomePage = () => {
    navigation.navigate('Home');
  };

  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response.uri);
      if (response.uri) {
        setPhotoURI(response.uri);
      }
    });
  };

  addPostToFirebase = () => {
    const listingRef = firebase.firestore().collection('subletListings');
    const uid = addressLineOneText + ' ' + addressLineTwoText;

    const filename = photoURI.substring(photoURI.lastIndexOf('/') + 1);
    const uploadUri = photoURI.replace('file://', '');

    const data = {
      addressLineOne: addressLineOneText,
      addressLineTwo: addressLineTwoText,
      city: cityText,
      state: stateText,
      zipCode: zipCodeText,
      description: descriptionText,
      price: priceText,
      bedroom: bedroomText,
      bathroom: bathroomText,
      startDate: startDateText,
      endDate: endDateText,
      photoURI: uploadUri,
      sqFt: squareFeetText,
      phoneNumber: phoneNumberText,
    };
    listingRef.doc(uid).set(data);

    goToHomePage();
  };

  return (
    <View>
      <View>
        <Appbar style={styles.appBarStyle}>
          <Appbar.BackAction color="white" onPress={goToHomePage} />
          <Appbar.Content titleStyle={styles.text} title="Create Sublet Post" />
        </Appbar>
      </View>
      <View style={styles.textInputsStyle}>
        <TextInput
          mode="outlined"
          label="Address Line 1"
          value={addressLineOneText}
          onChangeText={(text) => setAddressLineOneText(text)}
        />
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 50,
          }}>
          <View style={{flex: 1, paddingRight: 10}}>
            <TextInput
              mode="outlined"
              label="Address Line 2"
              value={addressLineTwoText}
              onChangeText={(text) => setAddressLineTwoText(text)}
            />
          </View>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TextInput
              mode="outlined"
              label="City"
              value={cityText}
              onChangeText={(text) => setCityText(text)}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 60,
          }}>
          <View style={{flex: 1, paddingRight: 10}}>
            <TextInput
              mode="outlined"
              label="State"
              value={stateText}
              onChangeText={(text) => setStateText(text)}
            />
          </View>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TextInput
              mode="outlined"
              label="Zip Code"
              value={zipCodeText}
              onChangeText={(text) => setZipCodeText(text)}
            />
          </View>
        </View>
        <View>
          <TextInput
            mode="outlined"
            label="Property Description"
            multiline={true}
            value={descriptionText}
            onChangeText={(text) => setDescriptionText(text)}
          />
        </View>
        <View
          style={{
            paddingTop: 80,
            flex: 3,
            flexDirection: 'row',
            paddingBottom: 65,
          }}>
          <View style={{flex: 1, paddingRight: 10}}>
            <TextInput
              mode="outlined"
              label="Price"
              value={priceText}
              onChangeText={(text) => setPriceText(text)}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              mode="outlined"
              label="Bedrooms"
              value={bedroomText}
              onChangeText={(text) => setBedroomText(text)}
            />
          </View>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TextInput
              mode="outlined"
              label="Bathrooms"
              value={bathroomText}
              onChangeText={(text) => setBathroomText(text)}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            paddingBottom: 65,
          }}>
          <View style={{flex: 1, paddingRight: 10}}>
            <TextInput
              mode="outlined"
              label="Start Date"
              placeholder="MMDDYYYY"
              value={startDateText}
              onChangeText={(text) => setStartDateText(text)}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              mode="outlined"
              label="End Date"
              placeholder="MMDDYYYY"
              value={endDateText}
              onChangeText={(text) => setEndDateText(text)}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            paddingBottom: 65,
          }}>
          <View style={{flex: 1, paddingRight: 10}}>
            <TextInput
              mode="outlined"
              label="Square Feet"
              value={squareFeetText}
              onChangeText={(text) => setSquareFeetText(text)}
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              mode="outlined"
              label="Phone Number"
              placeholder="XXX-XXX-XXXX"
              value={phoneNumberText}
              onChangeText={(text) => setPhoneNumberText(text)}
            />
          </View>
        </View>
        <View style={{paddingBottom: 110}}>
          <Button
            color="#1C2541"
            mode="contained"
            onPress={this.handleChoosePhoto}>
            Upload Sublet Photo
          </Button>
        </View>

        <View>
          <Button
            color="#1C2541"
            mode="contained"
            onPress={this.addPostToFirebase}>
            Post Sublet!
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBarStyle: {
    backgroundColor: '#1C2541',
    color: '#FFFFFF',
    paddingTop: 30,
    height: 100,
  },
  textInputsStyle: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default PostingScreen;
