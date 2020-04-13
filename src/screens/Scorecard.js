import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import _map from 'lodash.map';
import _findIndex from 'lodash.findindex';
import _clone from 'lodash.clone';
import _reduce from 'lodash.reduce';

import Hole from '../components/Hole';
import Par from '../components/Par';
import Score from '../components/Score';
import ScorePickerModal from '../components/ScorePickerModal';

import { PLAYERS } from '../constants';

// Temp data mock
import data from '../../mocks/scorecard.json';

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
      <Hole scoreData={scoreData} />
      <Par scoreData={scoreData} />
      <Score
        header="Andrew"
        player={PLAYERS.PLAYER1}
        scoreData={scoreData}
        scoreCellSelected={scoreCellSelected}
      />
      <Score
        header="Beth"
        player={PLAYERS.PLAYER2}
        scoreData={scoreData}
        scoreCellSelected={scoreCellSelected}
      />
      <ScorePickerModal
        isVisible={isModalVisible}
        updateModalVisibility={updateModalVisibility}
        updateScore={number =>
          updateScore(number, selectedHole, selectedPlayer)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },
});

export default Scorecard;
