import React from 'react';

import {View, SectionList, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {useHomeData} from '../../util/api';
import {ProductList} from '../components/List';
import {Loading} from '../components/Loading';

export default function Home() {
  const {isLoading, data} = useHomeData();
  if (isLoading) {
    return <Loading />;
  }
  // console.log('DATA', data);
  const sections = data?.data?.map(section => {
    return {
      ...section,
      data: section.items,
      items: undefined,
    };
  });
  //Custom component rendered from List.js:
  return <ProductList sections={sections} />;
}
