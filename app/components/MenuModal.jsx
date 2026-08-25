import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const pages = ['Dashboard', 'Customers', 'AddTransaction', 'AboutUs', 'ContactUs'];

const MenuModal = ({ visible, onClose, navigate }) => {
  const handleNavigate = (page) => {
    navigate(page);
    onClose(); 
  };

  const handleLogout = () => {
    navigate('Login');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sidebar}>
          {pages.map((page) => (
            <TouchableOpacity key={page} onPress={() => handleNavigate(page)} style={styles.menuItem}>
              <Text style={styles.menuText}>
                {page === 'AddTransaction' ? 'Add Transaction' :
                 page === 'AboutUs' ? 'About Us' :
                 page === 'ContactUs' ? 'Contact Us' :
                 page}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: '#e74c3c' }]}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}> Close</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.restArea} onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#1a1a1a',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#444',
  },
  menuText: {
    color: '#3399ff',
    fontSize: 18,
  },
  closeBtn: {
    marginTop: 30,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
  restArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

export default MenuModal;
