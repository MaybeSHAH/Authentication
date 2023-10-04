import React, { useState } from 'react'
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const JoinPage = ({navigation, route}) => {
    const [amount, setAmount] = useState(100);
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/images/user-profile.jpg')}
        style={styles.headerImage}
      />
      <Text style={styles.title}>OneUmmah Charity</Text>
      <Text style={styles.subtitle}>Together, We Make a Difference</Text>

      <Text style={styles.sectionTitle}>Choose Amount</Text>
      <View style={{
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginBottom: 20,
    }}>
        <TouchableOpacity style={styles.card} onPress={()=> setAmount(100)}>
            <Text style={{textAlign: 'center',
                color: COLORS.black,
                fontWeight: 'bold',
                fontSize: 18}}>
                100
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=> setAmount(200)}>
        <Text style={{textAlign: 'center',
                color: COLORS.black,
                fontWeight: 'bold',
                fontSize: 18}}>
                200
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=> setAmount(500)}>
        <Text style={{textAlign: 'center',
                color: COLORS.black,
                fontWeight: 'bold',
                fontSize: 18}}>
                500
            </Text>
        </TouchableOpacity>
      </View>
      <View
      style={{
        flexDirection: 'row'
      }}>
        <Text style={{flex: 1,color: '#ff69eb',
            fontSize: 20, textAlign: 'center', marginBottom: 20,
            }}> ------------------ or ------------------
        </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        color: '#ff69eb',
        paddingBottom: 8,
        marginBottom: 25,
      }}>
        <TextInput
          value={amount}
          placeholder={'Enter Amount Manually'}
          numberOfLines={1}
          onChange={(e)=> setAmount(e.target.value)}
          style={{flex: 1, paddingVertical: 0, 
            backgroundColor: '#CDCDCD',
            fontWeight: 'bold',
            color: '#ff69eb',
            textAlign: 'center',
            height: 50,
            borderColor: '#ff69eb',
            borderRadius: 20,
            borderWidth: 2,
            }}
          placeholderTextColor='#ff69eb'
        />
        </View>
    <TouchableOpacity onPress={()=> {}} style={styles.button}>
      <Text
          style={{
            flex: 1,
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Join Now
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'flex-start',
      backgroundColor: '#fff',
    },
    headerImage: {
      width: '100%',
      height: 300,
      borderRadius: 20,
      marginBottom: 5,
    },
    title: {
      fontSize: 24,
      textAlign: 'left',
      fontWeight: 'bold',
      color: COLORS.black,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#555',
      marginBottom: 30,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.black,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#AD40AF',
      padding: 20,
      width: '100%',
      borderRadius: 12,
      marginBottom: 50,
    },
    card: {
        flex: 1,
        marginRight: 10,
      backgroundColor: '#fff',
      borderColor: '#ff69eb',
      borderRadius: 20,
      borderWidth: 2,
      padding: 25,
      height: 80,
    },
  });
  
export default JoinPage
