import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, Linking ,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
export default class CardImageExample extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Image style={ styles.avatar }source={require('../images/avatar.jpg')} />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, fontFamily: 'NotoSansThai-Bold', paddingTop: 30, paddingBottom: 10 }}>
                            ทวีวุฒิ นากอหม๊ะ
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>
                            นักศึกษาสาขาการจัดการเทคโนโลยีสารสนเทศ{"\n"}
                            คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์{"\n"}
                            รหัสนักศึกษา 6210121023
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                        <Icon
                            raised
                            name='facebook'
                            type='font-awesome'
                            color='#4abd94'
                            size={30}
                            onPress={() => Linking.openURL('https://www.facebook.com/taveevut')} />
                        <Icon
                            raised
                            name='heartbeat'
                            type='font-awesome'
                            color='#4abd94'
                            size={30}
                            onPress={() => Linking.openURL('http://line.me/ti/p/taveevut')} />
                        <Icon
                            raised
                            name='phone'
                            type='font-awesome'
                            color='#4abd94'
                            size={30}
                            onPress={() => Linking.openURL('tel:${0862887987}')} />
                        <Icon
                            raised
                            name='envelope'
                            type='font-awesome'
                            color='#4abd94'
                            size={30}
                            onPress={() => Linking.openURL('mailto:nakomah.web@gmail.com')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    avatar :{
        width: 150, 
        height:150, 
        borderRadius: 150/2,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    }
});