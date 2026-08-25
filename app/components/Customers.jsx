import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './Header';

const dummyCustomers = [
  { name: 'Moiz', phone: '03123456789', balance: 1200 },
  { name: 'Ahmed', phone: '03001234567', balance: -800 },
  { name: 'Talha', phone: '03219876543', balance: 0 },
];

const Customers = ({ navigate, openMenu }) => {
  const [searchText, setSearchText] = useState('');

  const filteredCustomers = dummyCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
    customer.phone.includes(searchText)
  );

  const renderCustomer = ({ item }) => {
    const balanceStyle =
      item.balance > 0
        ? styles.balancePositive
        : item.balance < 0
        ? styles.balanceNegative
        : styles.balanceNeutral;

    return (
      <TouchableOpacity style={styles.card} onPress={() => navigate('CustomerDetails', { customer: item })}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={[styles.balance, balanceStyle]}>Rs. {item.balance}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header onBack={() => navigate('Dashboard')} onMenu={openMenu} />

      <Text style={styles.title}>Customers</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or phone"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCustomer}
        ListEmptyComponent={<Text style={styles.noData}>No customers found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f0f0f' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3399ff',
    marginTop: 15,
    marginBottom: 8,
    textAlign: 'center',
  },
  searchInput: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 10,
    borderRadius: 6,
    borderColor: '#3399ff',
    borderWidth: 1,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  phone: { color: '#ccc', fontSize: 14 },
  balance: { fontSize: 14, marginTop: 5 },
  balancePositive: { color: '#00ff99' },
  balanceNegative: { color: '#ff4d4d' },
  balanceNeutral: { color: '#aaa' },
  noData: { color: '#888', fontStyle: 'italic', textAlign: 'center', marginTop: 20 },
});

export default Customers;
