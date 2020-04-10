import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Score = (props) => {
  return (
    <View style={styles.view}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default Score;
