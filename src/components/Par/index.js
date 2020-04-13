import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _map from 'lodash.map';

import { colors } from '../../constants';
import Header from '../Header';
import Total from '../Total';

const Par = ({ scoreData }) => {
  return (
    <View style={styles.container}>
      <Header text="Par"></Header>
      {_map(scoreData, data => (
        <View style={styles.view}>
          <Text style={styles.text}>{data.par}</Text>
        </View>
      ))}
      <Total text="27" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: colors.lightestGreen,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Par;
