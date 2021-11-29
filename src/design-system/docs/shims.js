import { Platform } from 'react-native';

global.android = Platform.OS === 'android';
global.ios = Platform.OS === 'ios';
global.__DEV__ = true;
global.requestAnimationFrame =
  typeof window !== 'undefined' ? window.requestAnimationFrame : () => {};
