import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Total = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#076335',
    flex: 1,
  },
  text: {
    color: 'white',
  },
});

export default Total;
