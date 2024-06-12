/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Home from './src/Home';
import Welcome from './src/Welcome';
import Main from './src/Main';
import ErrorModal from './src/ErrorModal';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => ErrorModal);
AppRegistry.registerComponent(appName, () => Main);