import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import _times from 'lodash.times';

import { colors } from '../../constants';

const ScorePicker = ({ updateModalVisibility, updateScore, selectedHole }) => {
  return (
    <View style={styles.modal}>
      <View style={styles.container}>
        {_times(12, number => (
          <TouchableOpacity
            style={styles.score}
            key={number}
            onPress={() => updateScore(number + 1, selectedHole)}>
            <Text style={styles.text}>{number + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateScore(null, selectedHole)}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateModalVisibility(false)}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  score: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  button: {
    backgroundColor: colors.darkestGreen,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default ScorePicker;
