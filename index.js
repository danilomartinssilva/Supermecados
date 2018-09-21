/** @format */

import {AppRegistry} from 'react-native';
// import MainScreen from './screens/MainScreen'; 
import {name as appName} from './app.json';
import Routes from './Routes';
console.disableYellowBox = false;

AppRegistry.registerComponent(appName, () => Routes);
