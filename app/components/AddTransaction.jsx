import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';

const AddTransaction = ({ navigate, openMenu }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransaction = (type) => {
    if (!name || !phone || !amount) {
      alert('Name, Phone Number, and Amount are required!');
      return;
    }

    alert(`${type === 'given' ? 'Given' : 'Received'} Udhar saved!`);
    setName('');
    setPhone('');
    setNotes('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Header onBack={() => navigate('Dashboard')} onMenu={openMenu} />

      <Text style={styles.title}>Add Udhar</Text>

      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#ccc" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#ccc" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="Notes" placeholderTextColor="#ccc" value={notes} onChangeText={setNotes} />
      <TextInput style={styles.input} placeholder="Amount" placeholderTextColor="#ccc" keyboardType="numeric" value={amount} onChangeText={setAmount} />

      <TouchableOpacity style={styles.button} onPress={() => handleTransaction('given')}>
        <Text style={styles.buttonText}>Main ne diye</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#ff3333' }]} onPress={() => handleTransaction('received')}>
        <Text style={styles.buttonText}>Main ne liye</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f0f0f' },
  title: { fontSize: 24, color: '#3399ff', marginVertical: 15, textAlign: 'center' },
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

export default AddTransaction;
