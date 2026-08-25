import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ onBack, onMenu }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack}>
      <Ionicons name="arrow-back" size={24} color="#3399ff" />
    </TouchableOpacity>

    <View style={styles.logoContainer}>
      <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>MyKhata</Text>
    </View>

    <TouchableOpacity onPress={onMenu}>
      <Ionicons name="menu" size={24} color="#3399ff" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    color: '#00bfff',
    fontWeight: 'bold',
  },
});

export default Header;
