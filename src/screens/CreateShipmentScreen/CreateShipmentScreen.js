import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  createShipment,
} from '../../services/shipmentService';

function CreateShipmentScreen() {

  const [customer, setCustomer] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleCreateShipment = async () => {

    if (
      !customer ||
      !origin ||
      !destination
    ) {

      alert('Please fill all fields');r

      return;
    }

    try {

      const shipmentData = {

        customer,
        origin,
        destination,
        status: 'Pending',

      };

      await createShipment(shipmentData);

      alert('Shipment created successfully');

      setCustomer('');
      setOrigin('');
      setDestination('');

    } catch (error) {

      console.log(error);

      alert(
        'Failed to create shipment. Please try again.'
      );

    }

  };

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Create New Shipment
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={customer}
        onChangeText={setCustomer}
      />

      <TextInput
        style={styles.input}
        placeholder="Origin"
        value={origin}
        onChangeText={setOrigin}
      />

      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateShipment}
      >
        <Text style={styles.buttonText}>
          Create Shipment
        </Text>
      </TouchableOpacity>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

});

export default CreateShipmentScreen;