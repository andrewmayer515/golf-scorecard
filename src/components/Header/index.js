import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants';

const Header = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.darkGreen,
    flex: 1,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
