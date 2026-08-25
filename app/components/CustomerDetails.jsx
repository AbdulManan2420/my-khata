import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, Alert } from 'react-native';
import Header from './Header';

const CustomerDetails = ({ customer, navigate, openMenu }) => {
  if (!customer) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', textAlign: 'center' }}>Customer data is missing.</Text>
      </View>
    );
  }

  const { name, phone, balance } = customer;

  const transactions = customer.transactions?.length
    ? customer.transactions
    : [
        {
          amount: 500,
          type: 'Given',
          notes: 'Gave money for groceries',
          date: '2025-06-25',
        },
        {
          amount: 300,
          type: 'Received',
          notes: 'Received partial payment',
          date: '2025-06-28',
        },
        {
          amount: 200,
          type: 'Given',
          notes: 'Loan for bike fuel',
          date: '2025-07-01',
        },
      ];

  const handleDelete = () => {
    Alert.alert('Customer Deleted', `${name} has been removed.`);
    navigate('Dashboard');
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionCard}>
      <Text style={styles.txText}>Amount: Rs. {item.amount}</Text>
      <Text style={styles.txText}>Type: {item.type}</Text>
      <Text style={styles.txText}>Note: {item.notes}</Text>
      <Text style={styles.txText}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header onBack={() => navigate('Customers')} onMenu={openMenu} />

      <View style={styles.card}>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Phone: {phone}</Text>
        <Text style={styles.text}>Balance: Rs. {balance}</Text>
      </View>

      <Text style={styles.subtitle}>Transaction History</Text>

      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTransaction}
        />
      ) : (
        <Text style={styles.noTx}>No transactions found.</Text>
      )}

      <View style={styles.buttonGroup}>
        <Button
          title="Update Customer"
          onPress={() => {
            navigate('UpdateCustomer', { customer });
          }}
          color="#3399ff"
        />
        <View style={{ height: 10 }} />
        <Button title="Delete Customer" color="#e74c3c" onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f0f0f' },
  card: { backgroundColor: '#1e1e1e', padding: 20, borderRadius: 10, marginBottom: 20 },
  text: { color: '#fff', fontSize: 16, marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#00bfff', marginBottom: 10 },
  noTx: { color: '#888', fontStyle: 'italic' },
  transactionCard: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  txText: { color: '#fff', fontSize: 14, marginBottom: 5 },
  buttonGroup: { marginTop: 20 },
});

export default CustomerDetails;
