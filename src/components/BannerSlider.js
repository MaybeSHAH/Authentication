import React from 'react';
import {View, Image, Text} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 10}}
      />
      {/* <Text>{data.title}</Text>  */}
    </View>
  );
}
