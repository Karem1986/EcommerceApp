import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const ItemCard = ({name, price, onPress, image}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={{uri: image}} style={styles.itemImage}></Image>
    <Text>{name}</Text>
    <Text>{price}</Text>
  </TouchableOpacity>
);

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  itemImage: {
    width: screen.width * 0.4,
    height: screen.width * 0.4,
  },
  content: {
    paddingBottom: 100,
  },
});
