import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';

import {Text} from '../components/Text';
import colors from '../constants/colors';
import {money} from '../../util/format';
import {useDetailData} from '../../util/api';

export default function ProductDetails({route}) {
  // console.log('Route', route.params);
  const staticData = route.params;
  const {data, isSuccess} = useDetailData({id: route.params.id});

  let {id, name, price, description, review, image, soldCount} = staticData;
  if (isSuccess) {
    image = data.data.image;
    name = data.data.name;
    price = data.data.price;
    description = data.data.description;
    review = data.data.review;
    soldCount = data.data.soldCount;
  }

  return (
    <ScrollView>
      <View style={styles.section}>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
        <View style={{flex: 1}}>
          <Text type="header">{name}</Text>
          <Text type="subheader" style={{marginTop: 5}}>
            {money(price)}
          </Text>
          <Text type="subheader">{description}</Text>
          <View style={styles.soldCountGroup}>
            <Text type="subheader" style={styles.sold}>
              Sold: {soldCount}
            </Text>
          </View>
          <Text type="subheader" style={styles.reviews}>
            Reviews:
          </Text>
          <Text style={styles.reviewContent}>{review}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.white,
    marginVertical: 45,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flexDirection: 'row',
  },
  image: {
    width: 175,
    height: 160,
    marginRight: 15,
  },
  reviews: {
    marginRight: 17,
    marginTop: 10,
    color: '#000',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  reviewContent: {
    marginTop: 2,
    marginBottom: 20,
  },
  sold: {
    marginRight: 5,
    marginTop: 3,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  soldCount: {
    marginTop: 0,
    fontStyle: 'italic',
    marginBottom: 7,
  },
  soldCountGroup: {
    flexDirection: 'row',
  },
});
