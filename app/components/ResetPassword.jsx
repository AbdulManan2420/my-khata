import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ResetPassword = ({ navigate }) => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="New Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Reset Password" onPress={handleReset} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '#00bfff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    borderColor: '#007bff',
    borderWidth: 1,
  },
});

export default ResetPassword;
