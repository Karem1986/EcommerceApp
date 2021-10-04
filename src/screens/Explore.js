import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';
import {useExploreData} from '../../util/api';
import {Button} from '../components/Button';

export default function Explore({navigation}) {
  const response = useExploreData();
  console.log('RESPONSE', response);

  return (
    <View style={{flex: 1, justifyContent: 'center', paddig: 20}}>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
}
