import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView , Alert} from 'react-native';
import { Icon } from 'react-native-elements'
export default class CardImageExample extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <Image style={{ height: 250 }} source={require('../images/banner.png')} />
                        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'NotoSansThai-Bold', paddingTop: 30 }}>
                            สำนักงานหาดใหญ่
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>
                            สถาบันฮาลาล มหาวิทยาลัยสงขลนครินทร์ {"\n"}15 ถ.กาญจนวนิช อ.หาดใหญ่ จ.สงขลา 90112
                        0-7428-9292
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'NotoSansThai-Bold', paddingTop: 20 }}>
                            สำนักงานปัตตานี
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 20 }}>
                            สถาบันฮาลาล มหาวิทยาลัยสงขลานครินทร์ {"\n"}ต.รูสะมิแล อ.เมือง จ.ปัตตานี 94000 {"\n"}
                        073-333223
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom:20 }}>
                        <Icon
                            raised
                            name='facebook'
                            type='font-awesome'
                            color='#4abd94'
                            size={30} 
                            onPress={() => Alert.alert('Facebook Page.')} />
                        <Icon
                            raised
                            name='heartbeat'
                            type='font-awesome'
                            color='#4abd94'
                            size={30} 
                            onPress={() => Alert.alert('Line ID.')} />
                        <Icon
                            raised
                            name='phone'
                            type='font-awesome'
                            color='#4abd94'
                            size={30} 
                            onPress={() => Alert.alert('Call Center 24srh.')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}