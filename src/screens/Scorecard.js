import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import _map from 'lodash.map';
import _findIndex from 'lodash.findindex';
import _clone from 'lodash.clone';
import _reduce from 'lodash.reduce';

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
  const [scoreData, updateScoreData] = useState(data.scorecard);
  const [selectedHole, updateSelectedHole] = useState(null);
  const [total, updateTotal] = useState(null);

  const updateScore = (score, hole) => {
    const copy = _clone(scoreData);
    const index = _findIndex(copy, { hole });
    copy[index].value = score;

    updateModalVisibility(false);
    updateScoreData(copy);
  };

  const scoreCellSelected = hole => {
    updateModalVisibility(true);
    updateSelectedHole(hole);
  };

  const getTotal = () => {
    return _reduce(
      scoreData,
      (sum, index) => {
        return sum + index.value;
      },
      0
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.hole}>
        <Header text="Hole"></Header>
        {_map(scoreData, data => (
          <Hole text={data.hole} key={data.hole}></Hole>
        ))}
        <Total text="Total" />
      </View>
      <View style={styles.par}>
        <Header text="Par"></Header>
        {_map(scoreData, data => (
          <Par text={data.par} key={data.hole}></Par>
        ))}
        <Total text="27" />
      </View>
      <View style={styles.score}>
        <Header text="Andrew"></Header>
        {_map(scoreData, data => (
          <Score
            text={data.value}
            scoreCellSelected={scoreCellSelected}
            key={data.hole}
            hole={data.hole}
          />
        ))}
        <Total text={getTotal()} />
      </View>
      <Modal isVisible={isModalVisible}>
        <ScorePicker
          updateModalVisibility={updateModalVisibility}
          selectedHole={selectedHole}
          updateScore={updateScore}
        />
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
