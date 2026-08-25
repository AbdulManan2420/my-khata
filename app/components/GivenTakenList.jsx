import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from './Header';

const GivenTakenList = ({ route, openMenu, navigate }) => {
  const { type } = route.params;
  const data = type === 'given'
    ? [{ id: '1', name: 'Moiz', amount: 1200 }]
    : [{ id: '2', name: 'Ahmed', amount: 800 }];

  return (
    <View style={styles.container}>
      <Header onBack={() => navigate('Dashboard')} onMenu={openMenu} />

      <Text style={styles.title}>Total {type === 'given' ? 'Given' : 'Taken'}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>Rs. {item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#0f0f0f',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#3399ff',
    marginVertical: 15,
    textAlign: 'center',
  },
  card: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 6,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

export default GivenTakenList;
