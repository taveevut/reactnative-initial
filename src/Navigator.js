import React from 'react';
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import QrScanScreen from './screens/QrScanScreen';
import PromotionScreen from './screens/PromotionScreen';
import ContactusScreen from './screens/ContactusScreen';


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'หน้าแรก',
            tabBarOptions: {
                activeTintColor: '#4abd94',
                labelStyle: {
                    fontSize: 14,
                },
            },
            tabBarIcon: ({
                tintColor
            }) => (<Icon name="home" size={20} color={tintColor} />),

        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'บัญชีของฉัน',
            tabBarOptions: {
                activeTintColor: '#4abd94',
                labelStyle: {
                    fontSize: 14,
                },
            },
            tabBarIcon: ({
                tintColor
            }) => (<Icon name="user" size={20} color={tintColor} />),
        },
    },
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            title: 'หน้าแรก',
            headerStyle: {
                backgroundColor: '#4abd94',

            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'NotoSansThai-Regular',
            },
        },
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'รายละเอียด',
            headerStyle: {
                backgroundColor: '#4abd94',

            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'NotoSansThai-Regular',
            },
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'ค้นหาบริการ',
            headerStyle: {
                backgroundColor: '#4abd94',

            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'NotoSansThai-Regular',
            },
        }
    },
    QrScan: {
        screen: QrScanScreen,
        navigationOptions: {
            title: 'แสกน Qrcode',
            headerStyle: {
                backgroundColor: '#4abd94',

            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'NotoSansThai-Regular',
            },
        }
    },
    Promotion: {
        screen: PromotionScreen,
        navigationOptions: {
            title: 'โปรโมชั่น',
            headerStyle: {
                backgroundColor: '#4abd94',

            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'NotoSansThai-Regular',
            },
        }
    },
    Contactus: {
        screen: ContactusScreen,
        navigationOptions: {
            title: 'ติดต่อเรา',
            headerStyle: {
                backgroundColor: '#4abd94',

            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'NotoSansThai-Regular',
            },
        }
    },
});

export default createAppContainer(AppNavigator);