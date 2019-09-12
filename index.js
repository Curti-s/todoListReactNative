/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import store from './redux/store';
import App from './App';
import {name as appName} from './app.json';

export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => AppWithStore);
