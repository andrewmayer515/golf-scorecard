import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import _map from 'lodash.map';

import Header from '../components/scorecard/Header';
import Hole from '../components/scorecard/Hole';
import Par from '../components/scorecard/Par';
import Score from '../components/scorecard/Score';
import Total from '../components/scorecard/Total';
import ScorePicker from '../components/scorecard/ScorePicker';

// Temp data mock
import data from '../../mocks/scorecard.json';

const Scorecard = () => {
  const [isModalVisible, updateModalVisibility] = useState(false);
  const [scoreData, updateScoreData] = useState(data);

  return (
    <View style={styles.container}>
      <View style={styles.hole}>
        <Header text="Hole"></Header>
        {_map(data.scorecard, data => (
          <Hole text={data.hole} key={data.hole}></Hole>
        ))}
        <Total text="Total" />
      </View>
      <View style={styles.par}>
        <Header text="Par"></Header>
        {_map(data.scorecard, data => (
          <Par text={data.par} key={data.hole}></Par>
        ))}
        <Total text="27" />
      </View>
      <View style={styles.score}>
        <Header text="Andrew"></Header>
        {_map(data.scorecard, data => (
          <Score
            text={null}
            updateModalVisibility={updateModalVisibility}
            key={data.hole}
          />
        ))}
        <Total text="9" />
      </View>
      <Modal isVisible={isModalVisible}>
        <ScorePicker />
      </Modal>
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
