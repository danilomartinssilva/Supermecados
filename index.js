/** @format */

import {AppRegistry} from 'react-native';
import MainScreen from './screens/MainScreen';
import {name as appName} from './app.json';
console.disableYellowBox = false;

AppRegistry.registerComponent(appName, () => MainScreen);
