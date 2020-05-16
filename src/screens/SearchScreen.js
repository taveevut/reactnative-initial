import React, { Component } from 'react';
import { View, Text, Alert, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Card, CardItem, Body, Form, Item, Picker, Button, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sex: ''
        };
    }

    getValueOnChange(value) {
        Alert.alert(value);
    }


    render() {
        return (
            <View style={{ flex: 1, paddingTop: 10 }}>
                <View>
                    <Form>
                        <Item picker fixedLabel>
                            <Label>เพศ</Label>
                            <Picker mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="เพศ"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.sex}
                                onValueChange={this.getValueOnChange.bind(this)}
                            >
                                <Picker.Item label="ชาย" value="ชาย" />
                                <Picker.Item label="หญิง" value="หญิง" />
                            </Picker>
                        </Item>
                        <Item picker fixedLabel>
                            <Label>จังหวัด</Label>
                            <Picker mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="เลือกจังหวัด"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.province}
                                onValueChange={this.getValueOnChange.bind(this)}
                            >
                                <Picker.Item label="ปัตตานี" value="ปัตตานี" />
                                <Picker.Item label="ยะลา" value="ยะลา" />
                                <Picker.Item label="นราธิวาส" value="นราธิวาส" />
                                <Picker.Item label="หาดใหญ่" value="หาดใหญ่" />
                                <Picker.Item label="สตูล" value="สตูล" />
                            </Picker>
                        </Item>

                        <View style={{ padding: 10 }}>
                            <Button block success>
                                <Text style={{ color: 'white' }}>ค้นหา</Text>
                            </Button>
                        </View>
                    </Form>
                </View>

                <View style={{ flex: 1, padding: 10 }}>
                    <SafeAreaView>
                        <ScrollView>
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => (
                                    <Card>
                                        <CardItem header bordered>
                                            <Text>{item.title}</Text>
                                        </CardItem>
                                        <CardItem bordered>
                                            <TouchableOpacity>
                                                <Body>
                                                    <Text>
                                                        NativeBase is a free and open source framework that enable
                                                        developers to build
                                                        high-quality mobile apps using React Native iOS and Android
                                                        apps with a fusion of ES6.x
                                                    </Text>
                                                </Body>
                                            </TouchableOpacity>
                                        </CardItem>
                                    </Card>
                                )}
                                keyExtractor={item => item.id}
                            />

                        </ScrollView>
                    </SafeAreaView>
                </View >
            </View >
        );
    }
}
