import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants';

const Total = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.darkestGreen,
    flex: 1,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Total;
