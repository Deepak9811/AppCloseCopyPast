import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ToastAndroid,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Clipboard from '@react-native-community/clipboard';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyText: '',
      textType: '',
    };
  }

  copyToClipBoard() {
    Clipboard.setString(this.state.textType);
    ToastAndroid.showWithGravity(
      'Copy to Text',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  async fetchCopyText() {
    const text = await Clipboard.getString();
    this.setState({
      copyText: text,
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40%',
          }}>
          <Text style={{fontSize: 22, fontWeight: '700', color: '#2193b0'}}>
            Copy and Share
          </Text>
        </View>

        <View style={{borderWidth: 1, width: '100%'}}>
        <Text>Enter</Text>
          <TextInput
            value={this.state.textType}
            onChangeText={text =>
              this.setState({
                textType: text,
              })
            }
          />
        </View>

        <TouchableOpacity
          onPress={() => this.copyToClipBoard()}
          style={{
            marginTop: '10%',
            width: '100%',
            alignItems: 'center',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: '#99999',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Clip to copy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.fetchCopyText()}
          style={{
            marginTop: '10%',
            width: '100%',
            alignItems: 'center',
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: '#99999',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Click to past</Text>
        </TouchableOpacity>

        <View style={{width: '100%', padding: 10, marginTop: '10%'}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: '100%',
              borderRadius: 5,
              padding: 5,
            }}>
            <Text style={{marginBottom: 10}}>Text Copy</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {this.state.copyText}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
