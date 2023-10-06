import React, {useState, useContext, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../navigation/AuthProvider';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';
import { COLORS } from '../constants/theme';
import {basicServices, proServices, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import Welcome from '../components/Welcome';

export default function HomepageScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const {data} = useContext(AuthContext);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
        <Welcome 
          showName={data?.displayName}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={()=> {}}
        />
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
          Trending Fundraisers
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0AADA8'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        {/* <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Basic"
            option2="Pro"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          basicServices.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          proServices.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}
