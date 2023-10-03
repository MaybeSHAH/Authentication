import React, { useContext, useMemo } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ColorSpace } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/theme';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = ({navigation}) => {
  const { data } = useContext(AuthContext);

  const srcData = useMemo(()=> {
    return data.photo ? {uri: data.photo} : require('../assets/images/user-profile.jpg'); 
  }, [data]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 22}}>
      <View style={{ marginHorizontal: 12,
      flexDirection: 'row',
      justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={()=> navigation.goBack()}
          style={{
            position: 'absolute',
            left: -20
          }}
          >
            <Ionicons name="chevron-back-outline" size={40} color={COLORS.black}/>
        </TouchableOpacity>
        <Text style={{fontSize: SIZES.h1, color: COLORS.black,marginTop: 7}}>Profile Screen</Text>
      </View>
      <ScrollView>
      <View style={{
          alignItems: "center",
          marginVertical: 22
        }}>
          <TouchableOpacity
          onPress={()=> {}}
          >
            <Image source={srcData}
            style={{ 
              height:170,
              width: 170,
              borderRadius: 85,
              borderWidth: 2,
              borderColor: COLORS.primary
             }}
            />
            <View style={{
              position: 'absolute',
              bottom: 0,
              right: 10,
              zIndex: 999
            }}>
              <Ionicons name="camera" size={30} color={COLORS.primary}/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 20
        }}>
          <View style={{
            flexDirection: 'row',
            marginBottom: 6,
            backgroundColor: COLORS.textBg,
            borderColor: COLORS.textBg,
            borderRadius: 15,
            borderWidth: 15
          }}>
            <Text style={{fontSize: 20, marginLeft: 10, color: COLORS.black}}>
              name
            </Text>
            <Text style={{fontSize: 20, marginLeft: 25}}>
              {data.displayName}
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            marginBottom: 6,
            backgroundColor: COLORS.textBg,
            borderColor: COLORS.textBg,
            borderRadius: 15,
            borderWidth: 15
          }}>
            <Text style={{fontSize: 20, marginLeft: 10, color: COLORS.black}}>
              email
            </Text>
            <Text style={{fontSize: data.email.length > 25 ? 17: 19, marginLeft: 25}}>
              {data.email}
            </Text>
          </View>
        </View>
      </ScrollView>
        
    </SafeAreaView>
  )
}

export default ProfileScreen
