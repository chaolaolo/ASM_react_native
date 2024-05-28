/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Home from './src/Home';
import Welcom from './src/Welcom';
import Homecopy from './src/Home';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Welcom);
AppRegistry.registerComponent(appName, () => SignIn);
// AppRegistry.registerComponent(appName, () => SignUp);
// AppRegistry.registerComponent(appName, () => Home);