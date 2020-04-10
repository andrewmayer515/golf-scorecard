import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Hole = (props) => {
  return (
    <View style={styles.view}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#42c885',
  },
});

export default Hole;
