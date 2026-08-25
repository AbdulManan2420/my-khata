import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';

const AboutUs = ({ navigate, openMenu }) => {
  return (
    <View style={styles.container}>
      <Header onBack={() => navigate('Dashboard')} onMenu={openMenu} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Welcome to MyKhata</Text>
        
        <Text style={styles.subtitle}>
          Your Personal Udhar & Credit Management Partner
        </Text>

        <Text style={styles.text}>
          MyKhata is a simple, secure, and user-friendly app designed to help individuals and small businesses keep track of udhar (credits and debits) with ease.
        </Text>

        <Text style={styles.text}>
          Whether you're a shopkeeper, wholesaler, service provider, or someone managing informal financial dealings among friends or family, MyKhata gives you the power to:
        </Text>

        <View style={styles.bulletBox}>
          <Text style={styles.bullet}>• Record udhar transactions in seconds</Text>
          <Text style={styles.bullet}>• Track amounts given and received</Text>
          <Text style={styles.bullet}>• Maintain separate khata for each customer</Text>
          <Text style={styles.bullet}>• View history and manage balances clearly</Text>
          <Text style={styles.bullet}>• Stay organized and avoid misunderstandings</Text>
        </View>

        <Text style={styles.text}>
          Our goal is to make money management transparent, trustworthy, and accessible — no paper diaries, no confusion, just smart digital khata.
        </Text>

        <Text style={styles.text}>
          Join thousands of users simplifying their udhar management with MyKhata today!
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
    color: '#f0f0f0',
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  bulletBox: {
    marginBottom: 20,
    paddingLeft: 10,
  },
  bullet: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
});

export default AboutUs;
