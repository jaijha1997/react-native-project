/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import { Rotate } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Animated,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';
import detailsScreen from './components/detailsScreen';
import aboutUs from "./components/aboutUs";
import details from "./components/details";
import items from "./components/items";
import cantten from "./components/cantten";
import forum from"./components/forum";
import feedback from "./components/feedback";
import payment from "./components/payment";

export const RootStack = createDrawerNavigator(
  {
      Home:Home,
      order:detailsScreen,
      
      canteen:cantten,
      Items:items,
      payment:payment,
      
      
      
      forum:forum,
      feedback:feedback,
      About:aboutUs,
      contact:details,
      
      
  },
  {
      initialRouteName: "Home",
      activeTintColor: "#fff",
      drawerBackgroundColor: "black",
      flex: 1,
      contentOptions: {
          activeTintColor: "red",
          inactiveTintColor: "white",         
      }
  }
)
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  
  


  render(){
    return (

        
      <View style={{backgroundColor:'cyan',height:'100%',width:'100%'}}>
        <AppContainer/>
      </View>
      
      
  );
  }

  }
