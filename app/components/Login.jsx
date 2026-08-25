import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigate('Dashboard');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../assets/images.png')} style={styles.profileImage} />

        <Text style={styles.title}>MyKhata</Text>
        <Text style={styles.subtitle}>Udhar ap ka zimadari hamari</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('ResetPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 30,
    borderRadius: 12,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#00bfff',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: '#00bfff',
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 17,
    color: '#00bfff',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#222',
    color: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#0f0f0f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#00bfff',
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default Login;
