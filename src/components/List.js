import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {money} from '../../util/format';
export const ItemCard = ({name, price, onPress, image}) => (
  <TouchableOpacity onPress={onPress} style={styles.itemCard}>
    <Image source={{uri: image}} style={styles.itemImage} resizeMode="cover" />
    <Text style={styles.cardTitle}>{name}</Text>
    <Text>{money(price)}</Text>
  </TouchableOpacity>
);

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  itemImage: {
    width: screen.width * 0.4,
    height: screen.width * 0.4,
  },
  itemCard: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
