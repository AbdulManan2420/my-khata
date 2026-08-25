import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './Header';

const UpdateCustomer = ({ navigate, openMenu, route }) => {
  const { customer } = route?.params || {};

  const [name, setName] = useState(customer?.name || '');
  const [phone, setPhone] = useState(customer?.phone || '');
  const [balance, setBalance] = useState(String(customer?.balance || ''));

  const handleSave = () => {
    alert('Customer details updated!');
    navigate('Customers');
  };

  const handleBack = () => {
    if (customer) {
      navigate('CustomerDetails', { customer }); 
    } else {
      navigate('Customers');
    }
  };

  return (
    <View style={styles.container}>
      <Header onBack={handleBack} onMenu={openMenu} />

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor="#aaa"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Balance"
        placeholderTextColor="#aaa"
        value={balance}
        onChangeText={setBalance}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f0f0f' },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 12,
    borderRadius: 6,
    borderColor: '#3399ff',
    borderWidth: 1,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UpdateCustomer;
