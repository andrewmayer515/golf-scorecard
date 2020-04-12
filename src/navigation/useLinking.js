import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default containerRef =>
  useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Scorecard: 'scorecard',
          Analytics: 'analytics',
          Settings: 'settings',
        },
      },
    },
  });
