import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class VR_App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('star-wars-bf2.jpg')} />
        <Text
          style={{
            fontSize: 0.5,
            fontWeight: '100',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0.3, 1.8, -5] }]
          }}
        >
          Hello Reddit
        </Text>
        <Text
          style={{
            fontSize: 0.5,
            fontWeight: '100',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [0, 0, 5] },
              { rotateY: 180 },
              { scale: 0.2 }
            ]
          }}
        >
          Hello Reddit V2
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('VR_App', () => VR_App);
