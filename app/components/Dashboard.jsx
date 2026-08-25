import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Dashboard = ({ navigate, openMenu }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const allCustomers = [
    { id: '2', name: 'Ahmed', phone: '03111234567', balance: -800 },
    { id: '3', name: 'Moiz', phone: '03211234567', balance: 1200 },
    { id: '4', name: 'Talha', phone: '03331234567', balance: 0 },
  ];

  const filteredCustomers = allCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openMenu} style={styles.icon}>
        <Ionicons name="menu" size={28} color="#3399ff" />
      </TouchableOpacity>

      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.squareContainer}>
        <TouchableOpacity style={[styles.square, { backgroundColor: '#2ecc71' }]} onPress={() => navigate('GivenTakenList', { type: 'given' })}>
          <Text style={styles.boxText}>Maine Diya</Text>
          <Text style={styles.amount}>Rs. 1200</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.square, { backgroundColor: '#e74c3c' }]} onPress={() => navigate('GivenTakenList', { type: 'taken' })}>
          <Text style={styles.boxText}>Maine Liya</Text>
          <Text style={styles.amount}>Rs. 800</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search customers..."
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate('CustomerDetails', { customer: item })}
            style={styles.customerCard}
          >
            <Text style={styles.customerText}>{item.name}</Text>
            <Text style={styles.customerText}>Rs. {item.balance}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noResult}>No customer found.</Text>}
      />

      <View style={styles.addButton}>
        <Button title="Add Udhar" onPress={() => navigate('AddTransaction')} color="#3399ff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f0f0f' },
  icon: { position: 'absolute', top: 20, left: 20, zIndex: 1 },
  title: { fontSize: 24, color: '#3399ff', marginTop: 50, marginBottom: 15, textAlign: 'center' },
  squareContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  square: { width: '48%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
  boxText: { fontSize: 16, color: 'white', fontWeight: 'bold' },
  amount: { fontSize: 18, color: 'white', marginTop: 5 },
  searchInput: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    borderColor: '#3399ff',
    borderWidth: 1,
  },
  customerCard: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customerText: { color: 'white', fontSize: 16 },
  noResult: { color: '#ccc', textAlign: 'center', marginTop: 10 },
  addButton: { marginTop: 20 },
});

export default Dashboard;
