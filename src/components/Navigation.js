import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../constants/colors';

export const CloseIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.pop()}
      style={{paddingHorizontal: 10}}>
      <Image
        source={require('../assets/images/close-outline.png')}
        style={{width: 25, height: 25, tintColor: colors.brand}}
      />
    </TouchableOpacity>
  );
};

export const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Cart')}
      style={{paddingHorizontal: 10}}>
      <Image
        source={require('../assets/images/cart-outline.png')}
        style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
  );
};

//Here can the tabs also be defined if needed.
