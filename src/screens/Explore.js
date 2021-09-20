import React from 'react';

import {Image, Text, View, FlatList, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export default function Explore({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', paddig: 20}}>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
}
