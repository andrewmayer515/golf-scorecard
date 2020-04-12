import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import { colors } from '../constants';

const TabBarIcon = props => {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? colors.tabIconSelected : colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
