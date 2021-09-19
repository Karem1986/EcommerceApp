import React from 'react';

import {Image, Text, View, FlatList, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
}
