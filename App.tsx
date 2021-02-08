/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Modal,
  TextInput,
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{flex:1}}>
      <Modal
        transparent={true}
        visible={modalVisible}
        style={{flex:1, alignItems:'center', backgroundColor:"#f00"}}
        >
        <View style={{
          marginTop: 100,
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: '#ededed'
        }}>
          <TextInput
            style={{ minWidth: 200,height: 40, borderColor: 'gray', borderWidth: 1, flexGrow:1, paddingHorizontal:10 }}
            onChangeText={text => onChangeText(text.toLocaleLowerCase())}
            value={value}
          />
          <Button
            title="Open"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
      {!modalVisible ? <WebView
          style={{marginTop: 10}}
            source={{
              uri: value,
              headers: { 'key': 'value' }
            }}
            // source={{ html: '<h1>This is a statsampleic HTML source!</h1>' }}
            // source={source}
            onError={(event) =>
              console.log(`Webview error: ${event.nativeEvent.description}`)
            }
            // injectedJavaScript={javascript}
            onMessage={(event) => {
              console.log(event.nativeEvent.data);
            }}
            onLoadProgress={({ nativeEvent }) => console.info(nativeEvent.progress)}
            onLoadEnd={() => console.log('loaded')}
          /> : null }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
