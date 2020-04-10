import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/scorecard/Header';
import Hole from '../components/scorecard/Hole';
import Par from '../components/scorecard/Par';
import Score from '../components/scorecard/Score';
import Total from '../components/scorecard/Total';

const Scorecard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hole}>
        <Header text="Hole"></Header>
        <Hole text="1" />
        <Hole text="2" />
        <Hole text="3" />
        <Hole text="4" />
        <Hole text="5" />
        <Hole text="6" />
        <Hole text="7" />
        <Hole text="8" />
        <Hole text="9" />
        <Total text="Total" />
      </View>
      <View style={styles.par}>
        <Header text="Par"></Header>
        <Par text="1" />
        <Par text="2" />
        <Par text="3" />
        <Par text="4" />
        <Par text="5" />
        <Par text="6" />
        <Par text="7" />
        <Par text="8" />
        <Par text="9" />
        <Total text="1" />
      </View>
      <View style={styles.score}>
        <Header text="Andrew"></Header>
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Total text="1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },
  hole: {
    flex: 1,
  },
  par: {
    flex: 1,
  },
  score: {
    flex: 1,
  },
});

export default Scorecard;
