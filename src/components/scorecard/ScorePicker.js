import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import _times from 'lodash.times';

const ScorePicker = props => {
  return (
    <View style={styles.modal}>
      <View style={styles.container}>
        {_times(12, number => (
          <TouchableOpacity style={styles.score} key={number}>
            <Text style={styles.text}>{number + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Button
          title="Cancel"
          onPress={() => updateModalVisibility(false)}></Button>
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
  },
  container: {
    flexDirection: 'row',
  },
  score: {
    flexDirection: 'row',
    width: 100,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
});

export default ScorePicker;
