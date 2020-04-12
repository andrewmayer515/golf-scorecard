import * as React from 'react';
import { Text } from 'react-native';

const MonoText = props => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
};

export default MonoText;
