import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import _times from 'lodash.times';

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
        <Button
          title="Clear"
          onPress={() => updateScore(null, selectedHole)}></Button>
        <Button
          title="Close"
          onPress={() => updateModalVisibility(false)}></Button>
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
    marginTop: 10,
  },
});

export default ScorePicker;
