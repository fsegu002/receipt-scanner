import { AppRegistry } from 'react-native';
import App from './app';

if (__DEV__) {
  require('react-devtools');
}


AppRegistry.registerComponent('ReceiptScanner', () => App);
