import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Par = (props) => {
  return (
    <View style={styles.view}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#71f4b3',
  },
});

export default Par;
