import React from 'react'
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants/theme';



const CartScreen = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/images/user-profile.jpg')}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Join Our Community</Text>
      <Text style={styles.subtitle}>Together, We Make a Difference</Text>
      <Text style={styles.introText}>
        Welcome to our community of like-minded individuals dedicated to
        positive change. By becoming a member, you contribute 100 rupees every
        month, and together, we support causes and initiatives that matter.
      </Text>

      <Text style={styles.sectionTitle}>Why Join Us?</Text>
      <Text style={styles.benefits}>
        - Connect with a network of passionate individuals
      </Text>
      <Text style={styles.benefits}>- Access to exclusive events and content</Text>
      <Text style={styles.benefits}>
        - Make a real impact on community projects
      </Text>
      <Text style={styles.sectionTitle}>How it Works</Text>
      <Text style={styles.worksText}>
        It's simple. Join our community, set up automatic monthly payments of
        100 rupees, and watch your contributions make a difference.
      </Text>
      <TouchableOpacity onPress={()=> {navigation.navigate("JoinPage")}} style={styles.button}>
      <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Join Now
        </Text>
      </TouchableOpacity>

      {/* <Text style={styles.testimonials}>What Our Members Say</Text> */}
      {/* Add testimonials here */}
      
      {/* <Text style={styles.faqTitle}>FAQ</Text> */}
      {/* Add FAQ questions and answers here */}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  introText: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'left',
    textJustify: 'auto',
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
    width: '90%',
    borderRadius: 12,
    marginBottom: 50,
  },
  benefits: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 10,
  },
  worksText: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  testimonials: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CartScreen
