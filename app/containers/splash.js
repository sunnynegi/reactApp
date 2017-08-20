import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class MasterContent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    var {navigate} = this.props.navigation;
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Dashboard')}
        title="Go to Lucy's profile"
      />
    );
  }
}


const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: 'rgb(60, 162, 156)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textBig: {
    fontSize: 40,
    color: 'rgb(255, 255, 255)',
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  textSmall: {
    fontSize: 10,
    color: 'rgb(63, 60, 75)',
    paddingBottom: 10
  }

});

export default MasterContent;