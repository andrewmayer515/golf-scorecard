import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

import Header from '../components/scorecard/Header';
import Hole from '../components/scorecard/Hole';
import Par from '../components/scorecard/Par';
import Score from '../components/scorecard/Score';
import Total from '../components/scorecard/Total';

const Scorecard = () => {
  const [isModalVisible, updateModalVisibility] = useState(false);

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
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Par text="3" />
        <Total text="27" />
      </View>
      <View style={styles.score}>
        <Header text="Andrew"></Header>
        <Score text="1" updateModalVisibility={updateModalVisibility} />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Score text="1" />
        <Total text="9" />
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Text>Hi</Text>
          <Button
            title="Close"
            onPress={() => updateModalVisibility(false)}></Button>
        </View>
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
    backgroundColor: 'white',
  },
});

export default Scorecard;
