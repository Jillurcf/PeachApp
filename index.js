/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppRoutes from './src/routes/Approutes';
if (__DEV__) {
    require("./ReacttotronConfig");
  }
AppRegistry.registerComponent(appName, () => AppRoutes);
