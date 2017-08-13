import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HotelList from './src/components/HotelList';
import HotelDescription from './src/components/HotelDescription';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="listing" component={HotelList} title="Hoteles" initial />
          <Scene titleStyle={{ color: '#FFF' }} backButtonImage={require('./src/back.png')} navigationBarStyle={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(221, 221, 221, 0)', elevation: 0 }} key="Description" component={HotelDescription} title="Detalle" />
        </Scene>
      </Router>
    );
  }
}
