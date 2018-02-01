import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);
const Test1 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Test1</Text>
  </View>
);

const Test2 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Test2</Text>
  </View>
);

const RootTabs = TabNavigator({
  首页: {
    screen: HomeScreen,
  },
  发现: {
    screen: ProfileScreen,
  },
  消息:{
    screen:Test1
  },
  我的:{
    screen:Test2
  }
},{
    tabBarPosition:'bottom',
    animationEnabled: true,
    tabBarOptions: {
      style:{
        backgroundColor:'#eee',
      },
      activeBackgroundColor:'white',
      activeTintColor:'#4ECBFC',
      inactiveBackgroundColor:'white',
      inactiveTintColor:'#aaa',
    },
  }
);

export default RootTabs;
