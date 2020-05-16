import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class QrScanScreen extends Component {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err),
        );
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.torch}
                    topContent={
                        <Text style={styles.centerText}/>
                    }
                    bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>แสกน</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        backgroundColor:'orange',
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius:5,
        color: 'white'
    },
    buttonTouchable: {
        padding: 16,
    },
});
