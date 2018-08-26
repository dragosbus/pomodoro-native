import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import Clock from './src/Clock';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Clock/>
      </Provider>
    );
  }
}