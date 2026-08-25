import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';

const ContactUs = ({ navigate, openMenu }) => {
  return (
    <View style={styles.container}>
      <Header onBack={() => navigate('Dashboard')} onMenu={openMenu} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>We’re here to help!</Text>

        <Text style={styles.text}>
          Have any questions, feedback, or need assistance using MyKhata? Our team is always happy to help.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>support@mykhata.com</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>+92 300 1234567</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Support Hours:</Text>
          <Text style={styles.value}>Monday – Saturday, 9am – 6pm</Text>
        </View>

        <Text style={styles.note}>
          We usually respond within 24 hours. Thank you for choosing MyKhata!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    color: '#3399ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#00bfff',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#f0f0f0',
    marginBottom: 30,
    lineHeight: 22,
    textAlign: 'center',
  },
  infoBox: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  value: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    color: '#aaaaaa',
    fontStyle: 'italic',
    fontSize: 14,
    marginTop: 30,
    textAlign: 'center',
  },
});

export default ContactUs;
