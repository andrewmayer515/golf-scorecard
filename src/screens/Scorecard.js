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

import { PLAYERS } from '../constants';

// Temp data mock
import data from '../../mocks/scorecard.json';

const getTotal = (scoreData, player) => {
  return _reduce(
    scoreData,
    (sum, index) => {
      return sum + index[player];
    },
    0
  );
};

const Scorecard = () => {
  const [isModalVisible, updateModalVisibility] = useState(false);
  const [scoreData, updateScoreData] = useState(data.scorecard);
  const [selectedHole, updateSelectedHole] = useState(null);
  const [selectedPlayer, updateSelectedPlayer] = useState();

  const updateScore = (score, hole, player) => {
    const copy = _clone(scoreData);
    const index = _findIndex(copy, { hole });
    copy[index][player] = score;

    updateModalVisibility(false);
    updateScoreData(copy);
  };

  const scoreCellSelected = (hole, player) => {
    updateModalVisibility(true);
    updateSelectedHole(hole);
    updateSelectedPlayer(player);
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
            text={data.player1}
            scoreCellSelected={() =>
              scoreCellSelected(data.hole, PLAYERS.PLAYER1)
            }
            key={data.hole}
          />
        ))}
        <Total text={getTotal(scoreData, PLAYERS.PLAYER1)} />
      </View>
      <View style={styles.score}>
        <Header text="Beth"></Header>
        {_map(scoreData, data => (
          <Score
            text={data.player2}
            scoreCellSelected={() =>
              scoreCellSelected(data.hole, PLAYERS.PLAYER2)
            }
            key={data.hole}
          />
        ))}
        <Total text={getTotal(scoreData, PLAYERS.PLAYER2)} />
      </View>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <ScorePicker
          updateModalVisibility={updateModalVisibility}
          updateScore={number =>
            updateScore(number, selectedHole, selectedPlayer)
          }
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
  modal: {
    marginHorizontal: 60,
  },
});

export default Scorecard;
