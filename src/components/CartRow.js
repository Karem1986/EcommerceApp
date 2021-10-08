import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Text} from '../components/Text';
import {money} from '../../util/format';
import {Counter} from './QuantityCounter';

export const CartRow = ({name, quantity, price, image}) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={{fontWeight: 'bold'}}>{name}</Text>
        <Text>{money(price)}</Text>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      </View>
      <Counter quantity={quantity} type="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 125,
    height: 120,
    marginRight: 7,
  },
});
