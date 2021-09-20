import React from 'react';

import {Image, Text, View, FlatList, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', paddig: 20}}>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
}
