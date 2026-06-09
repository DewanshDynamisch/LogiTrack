import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function ShipmentDetailsScreen({route}) {

  const { shipment } = route.params;


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Shipment Details
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Shipment ID:
        </Text>

        <Text style={styles.value}>
          {shipment.id}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Customer:
        </Text>

        <Text style={styles.value}>
          {shipment.customer}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Status:
        </Text>

        <Text style={styles.value}>
          {shipment.status}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Origin:
        </Text>

        <Text style={styles.value}>
          Mumbai
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Destination:
        </Text>

        <Text style={styles.value}>
          Pune
        </Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  label: {
    fontWeight: '700',
    fontSize: 16,
  },

  value: {
    marginTop: 6,
    fontSize: 16,
    color: '#64748B',
  },

});

export default ShipmentDetailsScreen;