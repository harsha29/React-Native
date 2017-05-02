/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';
var CalendarPicker = require('react-native-calendar-picker'),
    CalendarPicker2;

CalendarPicker2 = React.createClass({
  getInitialState: function() {
    return {
      date: new Date(),
    };
  },

  onDateChange: function(date) {
    this.setState({ date: date });
  },

  render: function() {
    return (
      <View style={styles.container}>

        <CalendarPicker 
          selectedDate={this.state.date}
          onDateChange={this.onDateChange}
          screenWidth={Dimensions.get('window').width}
          selectedBackgroundColor={'#5ce600'} />

        <Text style={styles.selectedDate}> Date: { this.state.date.toString() } </Text>
      </View>
    );
  }
});
export default class CalendarApp extends Component {
  
  render() {
    return (
      <View style={styles.container}>

        <CalendarPicker2 />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
  }
});

AppRegistry.registerComponent('CalendarApp', () => CalendarApp);
