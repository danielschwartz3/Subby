import React from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {firebase} from '../config';
import storage from '@react-native-firebase/storage';

const PostingScreen = () => {
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

  const _goBack = () => console.log('Went back');

  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response.uri);
      if (response.uri) {
        setPhotoURI(response.uri);
      }
    });
  };

  /*
  handleOnPress = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
    })
      .then((result) => {
        if (!result.cancelled) {
          // User picked an image
          const {height, width, type, uri} = result;
          return uriToBlob(uri);
        }
      })
      .then((blob) => {
        return uploadToFirebase(blob);
      })
      .then((snapshot) => {
        console.log('File uploaded');
      })
      .catch((error) => {
        throw error;
      });
  };
  */

  handleOnpress = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
      });
      if (!result.cancelled) {
        const {uri} = result;
      }
    } catch (E) {
      console.log(E);
    }
  };

  const uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  const uploadToFirebase = (blob) => {
    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref();

      storageRef
        .child('uploads/photo.jpg')
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then((snapshot) => {
          blob.close();

          resolve(snapshot);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const addImageToStorage = () => {
    const filename = photoURI.substring(photoURI.lastIndexOf('/') + 1);
    const uploadUri = photoURI.replace('file://', '');

    const storage = firebase.storage();
    const storageRef = storage.ref(`subletImages/${filename}`).put(uploadUri);
    storageRef.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('subletImages')
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      },
    );
  };

  addPostToFirebase = () => {
    const listingRef = firebase.firestore().collection('subletListings');
    const uid = addressLineOneText + ' ' + addressLineTwoText;

    const filename = photoURI.substring(photoURI.lastIndexOf('/') + 1);
    const uploadUri = photoURI.replace('file://', '');
    /*
    const storage = firebase.storage();
    const storageRef = storage.ref(`subletImages/${filename}`).put(uploadUri);
    storageRef.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('subletImages')
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      },
    );
    */

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
    };
    listingRef.doc(uid).set(data);
  };

  return (
    <SafeAreaView>
      <View>
        <Appbar style={styles.appBarStyle}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Create Sublet Post" />
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
            paddingTop: 180,
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
        <View style={{paddingBottom: 110}}>
          <Button
            color="#0B132B"
            mode="contained"
            onPress={this.handleChoosePhoto}>
            Upload Sublet Photo
          </Button>
        </View>

        <View>
          <Button
            color="#0B132B"
            mode="contained"
            onPress={this.addPostToFirebase}>
            Post Sublet!
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBarStyle: {
    backgroundColor: '#0B132B',
    color: '#FFFFFF',
  },
  textInputsStyle: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default PostingScreen;
