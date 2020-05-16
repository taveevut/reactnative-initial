import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 200 }}>
                    <Image style={styles.banner} source={require('../images/banner.png')} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate('Search') }}>
                            <Image style={styles.cardImage} source={require('../images/001-boolean-search.png')} />
                            <Text style={styles.title}>ค้นหา</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate('QrScan') }}>
                            <Image style={styles.cardImage} source={require('../images/003-barcode.png')} />
                            <Text style={styles.title}>แสกน Qrcode</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate('Promotion') }}>
                            <Image style={styles.cardImage} source={require('../images/006-insurance.png')} />
                            <Text style={styles.title}>โปรโมชั่น</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate('Contactus') }}>
                            <Image style={styles.cardImage} source={require('../images/007-support.png')} />
                            <Text style={styles.title}>ติดต่อเรา</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // row: {
    //     flex: 2,
    //     flexDirection: 'row',
    //     backgroundColor: 'white'
    // },
    // col: {
    //     flex: 1,
    // },

    card: {
        flex: 1,
        // height:700,
        // paddingVertical: 12.5,
        // paddingHorizontal: 16,
        // paddingTop: 20,
        // flexBasis: '42%',
        // marginVertical: 10,
        // marginHorizontal: 10,

       
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        backgroundColor: "white",
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
         ...Platform.select({
            android: {
                elevation: 1
            },
            ios :{
                elevation: 12,
            }
        })

    },
    cardImage: {
        margin: 10,
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    banner: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        alignSelf: 'center',
        color: "#696969"
    },
});    