import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

function ShipmentCard(props) {

  const getStatusStyle = () => {

    switch (props.status) {

      case 'Delivered':
        return {
          backgroundColor: '#DCFCE7',
          textColor: '#15803D',
        };

      case 'Pending':
        return {
          backgroundColor: '#FEF3C7',
          textColor: '#D97706',
        };

      case 'In Transit':
        return {
          backgroundColor: '#DBEAFE',
          textColor: '#2563EB',
        };

      default:
        return {
          backgroundColor: '#E5E7EB',
          textColor: '#374151',
        };
    }

  };

  const statusStyle = getStatusStyle();

  return (

    <TouchableOpacity
      style={styles.card}
      onPress={props.onPress}
    >

      {/* Left Section */}
      <View>

        <Text style={styles.shipmentId}>
          {props.id}
        </Text>

        <Text style={styles.customer}>
          {props.customer}
        </Text>

      </View>

      {/* Status Badge */}
      <View
        style={[
          styles.statusContainer,
          { backgroundColor: statusStyle.backgroundColor }
        ]}
      >

        <Text
          style={[
            styles.status,
            { color: statusStyle.textColor }
          ]}
        >
          {props.status}
        </Text>

      </View>

    </TouchableOpacity>

  );
}

ShipmentCard.propTypes = {
  id: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  shipmentId: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  customer: {
    marginTop: 5,
    color: '#64748B',
    fontSize: 15,
  },

  statusContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  status: {
    fontWeight: '600',
    fontSize: 14,
  },

});

export default ShipmentCard;