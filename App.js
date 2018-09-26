import React, {Component} from 'react';
import RNTestProject from './src/RNTestProject'
import store from './src/redux/stores'
import {Provider} from 'react-redux'


export default class App extends Component {
  render() {
    return (
      <Provider store={store.configureStore()}>
        <RNTestProject/>
      </Provider>
    );
  }
}