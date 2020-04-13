import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _map from 'lodash.map';
import _reduce from 'lodash.reduce';

import Header from '../Header';
import Total from '../Total';

const getTotal = (scoreData, player) => {
  return _reduce(
    scoreData,
    (sum, index) => {
      return sum + index[player];
    },
    0
  );
};

const Score = ({ scoreCellSelected, player, header, scoreData }) => {
  return (
    <View style={styles.container}>
      <Header text={header}></Header>
      {_map(scoreData, data => (
        <TouchableOpacity
          key={data.hole}
          style={styles.view}
          onPress={() => scoreCellSelected(data.hole, player)}>
          <Text style={styles.text}>{data[player]}</Text>
        </TouchableOpacity>
      ))}
      <Total text={getTotal(scoreData, player)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Score;
