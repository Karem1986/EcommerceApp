import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import {useHomeData} from '../../util/api';
import {Loading} from '../components/Loading';

export default function Home({navigation}) {
  const response = useHomeData();
  console.log('RESPONSE', response);
  if (response.isLoading) {
    return <Loading />;
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', paddig: 20}}>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
}
