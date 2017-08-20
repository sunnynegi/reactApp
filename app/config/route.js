import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import {
      StyleSheet,
      Text,
      View
    } from 'react-native';

import Home from '../containers/master'
import splash from '../containers/splash'

  
  const MainScreenNavigator = StackNavigator({
    LoginScreen: { screen: splash },
    Dashboard: { screen: Home }
    },{
      headerMode: 'none'
    }
  );

export default MainScreenNavigator;