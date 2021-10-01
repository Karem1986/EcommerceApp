import React from 'react';

import {View, SectionList, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {useHomeData} from '../../util/api';
import {ItemCard} from '../components/List';
import {Loading} from '../components/Loading';

export default function Home({navigation}) {
  const {isLoading, data, error} = useHomeData();
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
  return (
    <SectionList
      style={styles.sectionList}
      contentContainerStyle={styles.content}
      sections={sections}
      renderItem={({item}) => {
        console.log('item', item);
        return (
          <ItemCard {...item} onPress={() => navigation.push('Details')} />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  sectionList: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 100,
  },
});
