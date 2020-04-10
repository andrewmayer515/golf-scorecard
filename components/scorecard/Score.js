import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Score = props => {
  return (
    <TouchableOpacity
      style={styles.view}
      onPress={() => props.updateModalVisibility(true)}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
