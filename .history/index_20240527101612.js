/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Home from './src/Home';
import Welcome from './src/Welcome';
import App from './src/Welcome';
import Main from './src/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => SignIn);
// AppRegistry.registerComponent(appName, () => SignUp);
// AppRegistry.registerComponent(appName, () => Home);
// AppRegistry.registerComponent(appName, () => Main);