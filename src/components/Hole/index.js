import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _map from 'lodash.map';

import { colors } from '../../constants';
import Header from '../Header';
import Total from '../Total';

const Hole = ({ scoreData }) => {
  return (
    <View style={styles.container}>
      <Header text="Hole"></Header>
      {_map(scoreData, data => (
        <View key={data.hole} style={styles.view}>
          <Text style={styles.text}>{data.hole}</Text>
        </View>
      ))}
      <Total text="Total" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
