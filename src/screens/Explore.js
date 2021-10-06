import React from 'react';

import {View, StyleSheet} from 'react-native';
import {useExploreData} from '../../util/api';
import {Button} from '../components/Button';
import {Loading} from '../components/Loading';
import {ProductList} from '../components/List';
export default function Explore() {
  const {isLoading, data, error} = useExploreData();
  if (isLoading) {
    return <Loading />;
  }
  // console.log('DATA', data);
  const sections = data?.categories?.map(category => {
    return {
      ...category,
      title: category.name,
      data: category.products,
      products: undefined,
    };
  });
  return <ProductList sections={sections} />;
}
