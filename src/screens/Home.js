import React from 'react';

import {View, SectionList, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {useHomeData} from '../../util/api';
import {ItemCard, SectionHeader, SectionFooter} from '../components/List';
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
      renderItem={({section, index}) => {
        if (index % 2 !== 0) return null;
        const item = section.data[index];
        const nextItem = section.data[index + 1];
        return (
          <View style={{backgroundColor: '#fff', flexDirection: 'row'}}>
            <ItemCard {...item} onPress={() => navigation.push('Details')} />
            {nextItem ? (
              <ItemCard
                {...nextItem}
                onPress={() => navigation.push('Details')}
              />
            ) : (
              <View style={{flex: 1}} />
            )}
          </View>
        );
      }}
      renderSectionHeader={({section}) => (
        <SectionHeader>{section.title}</SectionHeader>
      )}
      renderSectionFooter={() => <SectionFooter />}
      stickySectionHeadersEnabled={false}
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
