import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants';

const Hole = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Hole;
