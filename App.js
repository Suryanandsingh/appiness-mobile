import React from 'react';
import { Provider } from 'react-redux'
import AppNavigator from './src/Route/switchNavigator';
import { store } from './src/Redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default (App);