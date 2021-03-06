import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  SectionList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {money} from '../../util/format';
import colors from '../constants/colors';
import {Text} from './Text';
export const ItemCard = ({name, price, onPress, image}) => (
  <TouchableOpacity onPress={onPress} style={styles.itemCard}>
    <Image source={{uri: image}} style={styles.itemImage} resizeMode="cover" />
    <Text style={styles.cardTitle}>{name}</Text>
    <Text>{money(price)}</Text>
  </TouchableOpacity>
);
export const SectionHeader = ({children}) => (
  <View style={styles.sectionHeader}>
    <Text type="header">{children}</Text>
  </View>
);
export const SectionFooter = () => (
  <View style={{flex: 1, backgroundColor: colors.border, height: 1}} />
);

export const ProductList = ({sections = []}) => {
  const navigation = useNavigation();

  return (
    <SectionList
      style={styles.sectionList}
      contentContainerStyle={styles.content}
      sections={sections}
      renderItem={({section, index}) => {
        if (index % 2 !== 0) return null;

        const item = section.data[index];
        const nextItem = section.data[index + 1];
        //Rendering Product details:
        const onPress = ({
          id,
          name,
          price,
          description,
          review,
          image,
          soldCount,
          favoriites,
        }) => {
          navigation.push('Details', {
            id,
            name,
            price,
            description,
            review,
            image,
            soldCount,
            favoriites,
          });
        };
        return (
          <View style={{backgroundColor: '#fff', flexDirection: 'row'}}>
            <ItemCard {...item} onPress={() => onPress(item)} />
            {nextItem ? (
              <ItemCard {...nextItem} onPress={() => onPress(nextItem)} />
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
};

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  itemImage: {
    width: screen.width * 0.5,
    height: screen.width * 0.5,
  },
  itemCard: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  sectionHeader: {
    paddingTop: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  sectionList: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 100,
  },
});
