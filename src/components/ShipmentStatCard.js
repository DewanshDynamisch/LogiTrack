import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function ShipmentStatCard(props) {

    return (
      <View style={styles.card}>
        <Text style={styles.number}>{props.number}</Text>
        <Text style={styles.label}>{props.label}</Text>
      </View>
    );
}
const styles = StyleSheet.create({

  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },

  number: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2563EB',
  },

  label: {
    marginTop: 10,
    fontSize: 16,
     color: '#64748B',
  },

});

export default ShipmentStatCard;