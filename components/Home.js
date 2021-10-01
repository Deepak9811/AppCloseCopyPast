import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, ImageBackground} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default function Home({navigation}) {
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Naruto_-_Shippuden_DVD_season_1_volume_1.jpg/220px-Naruto_-_Shippuden_DVD_season_1_volume_1.jpg',
  );

  const cameraCapture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
    });
  };

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
      //   console.log("setImage",setImage)
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10%',
        }}>
        <ImageBackground
          source={{uri: image}}
          style={{width: 100, height: 100}}
        />
      </View>

      <Button title="Camera" onPress={() => cameraCapture()} />

      <View style={{marginTop: '10%'}}>
        <Button title="Image Picker" onPress={() => imagePicker()} />
      </View>

      <View style={{marginTop:"10%"}}>
        <Button title="JavaScripts" onPress={()=> navigation.navigate("Java")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
