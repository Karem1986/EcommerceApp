import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Text} from '../components/Text';
import {money} from '../../util/format';
import {Counter} from './QuantityCounter';
import {useCart} from '../../util/cart';

export const CartRow = ({id}) => {
  const {addItem, removeItem, item} = useCart(state => ({
    addItem: state.addItem,
    removeItem: state.removeItem,
    item: state.cart[id],
  }));

  return (
    <View style={styles.row}>
      <View>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text>{money(item.price)}</Text>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Counter
        quantity={item.quantity}
        type="small"
        onDecrement={() => removeItem(id)}
        onIncrement={() => addItem(item)}
      />
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
