import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Modal from 'react-native-modal';
import _times from 'lodash.times';

import { colors } from '../../constants';

const ScorePickerModal = ({
  isVisible,
  updateModalVisibility,
  updateScore,
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          {_times(12, number => (
            <TouchableOpacity
              style={styles.score}
              key={number}
              onPress={() => updateScore(number + 1)}>
              <Text style={styles.text}>{number + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateScore(null)}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateModalVisibility(false)}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 60,
  },
  modalView: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: colors.darkestGreen,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default ScorePickerModal;
