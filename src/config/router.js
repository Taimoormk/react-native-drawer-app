// import dependencies here
import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import screens here
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen12 from '../screens/Screen12';
import Screen22 from '../screens/Screen22';

// import components here

const {height, width} = Dimensions.get('window');

export const Stack1 = StackNavigator ({
  Screen1: {
    screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Screen1',
      headerTitle: 'Screen1',
      headerStyle: {

      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')} }>
        <Icon 
          name="bars" 
          type="font-awesome" 
          size={25} 
          color={'#666699'}
          margin={15} 
        />
        </TouchableOpacity>
      )
    }),
  },
  Screen12: {
    screen: Screen12,
    navigationOptions: ({navigation}) =>({
      title: 'Screen12',
      headerTitle: 'Screen12',
      headerStyle: {

      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      headerBackTitleStyle: {

      },
      headerTintColor: {

      }
    }),
  },
})

export const Stack2 = StackNavigator ({
  Screen2: {
    screen: Screen2,
    navigationOptions: ({navigation}) => ({
      title: 'Screen2',
      headerTitle: 'Screen2',
      headerStyle: {

      },
      headerTitleStyle: {
        alignSelf: 'center',
      }
    }),
  },
  Screen22: {
    screen: Screen22,
    navigationOptions: ({navigation}) =>({
      title: 'Screen22',
      headerTitle: 'Screen22',
      headerStyle: {

      },
      headerTitleStyle: {

      },
      headerBackTitleStyle: {

      },
      headerTintColor: {

      }
    }),
  },
})

export const Drawer = DrawerNavigator ({
  Screen1: {
    screen: Stack1
  },
  Screen2: {
    screen: Stack2
  },
  Screen3: {
    screen: Screen3
  },
  Screen4: {
    screen: Screen4
  }
}, {
  drawerWidth: 150,
  drawerPosition: 'left'
})