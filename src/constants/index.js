import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const isSmallDevice = width < 375;

const tintColor = '#076335';
export const colors = {
  // Default
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',

  // Green Shades
  darkestGreen: '#076335',
  darkGreen: '#0a7b43',
  lightGreen: '#42c885',
  lightestGreen: '#71f4b3',
};

export const PLAYERS = {
  PLAYER1: 'player1',
  PLAYER2: 'player2',
  PLAYER3: 'player3',
  PLAYER4: 'player4',
};
