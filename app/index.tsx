import React, { useState } from 'react';
import { View } from 'react-native';


import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import AddTransaction from './components/AddTransaction';
import UpdateCustomer from './components/UpdateCustomer';
import GivenTakenList from './components/GivenTakenList';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CustomerDetails from './components/CustomerDetails'; 
import MenuModal from './components/MenuModal';


const App = () => {
  const [screen, setScreen] = useState('Login');
  const [screenParams, setScreenParams] = useState({});
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const navigateTo = (screenName, params = {}) => {
    setScreen(screenName);
    setScreenParams(params || {});
    setModalVisible(false);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'Login':
        return <Login navigate={navigateTo} />;
      case 'ResetPassword':
        return <ResetPassword navigate={navigateTo} />;
      case 'Dashboard':
        return <Dashboard navigate={navigateTo} openMenu={() => setModalVisible(true)} />;
      case 'Customers':
        return (
          <Customers
            navigate={navigateTo}
            selectCustomer={(customer) => {
              setSelectedCustomer(customer);
              navigateTo('CustomerDetails', { customer });
            }}
            openMenu={() => setModalVisible(true)}
          />
        );
      case 'AddTransaction':
        return <AddTransaction navigate={navigateTo} openMenu={() => setModalVisible(true)} />;
      case 'UpdateCustomer':
        return (
          <UpdateCustomer
            customer={selectedCustomer}
            navigate={navigateTo}
            openMenu={() => setModalVisible(true)}
          />
        );
      case 'GivenTakenList':
        return (
          <GivenTakenList
            route={{ params: screenParams }}
            navigate={navigateTo}
            openMenu={() => setModalVisible(true)}
          />
        );
      case 'CustomerDetails':
        return (
          <CustomerDetails
            customer={screenParams?.customer ?? null}
            navigate={navigateTo}
            openMenu={() => setModalVisible(true)}
          />
        );
      case 'AboutUs':
        return <AboutUs navigate={navigateTo} openMenu={() => setModalVisible(true)} />;
      case 'ContactUs':
        return <ContactUs navigate={navigateTo} openMenu={() => setModalVisible(true)} />;
      default:
        return <Login navigate={navigateTo} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MenuModal visible={modalVisible} onClose={() => setModalVisible(false)} navigate={navigateTo} />
      {renderScreen()}
    </View>
  );
};

export default App;
