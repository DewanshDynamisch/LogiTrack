import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

function TrackingScreen({ route }) {

  const shipment = route?.params?.shipment;

  if (!shipment) {

    return (

      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>
          Shipment Tracking
        </Text>

        <View style={styles.errorContainer}>

          <Text style={styles.errorText}>
            No shipment selected
          </Text>

          <Text style={styles.errorSubtext}>
            Please select a shipment from the dashboard.
          </Text>

        </View>

      </SafeAreaView>

    );

  }

  const trackingSteps = [

    'Shipment Created',
    'Picked Up',
    'In Transit',
    'Out For Delivery',
    'Delivered',

  ];

  let currentStep = 0;

  if (shipment.status === 'Pending') {
    currentStep = 1;
  }

  if (shipment.status === 'In Transit') {
    currentStep = 2;
  }

  if (shipment.status === 'Delivered') {
    currentStep = 4;
  }

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Shipment Tracking
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Shipment ID
        </Text>

        <Text style={styles.value}>
          {shipment.id}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Customer
        </Text>

        <Text style={styles.value}>
          {shipment.customer}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Origin
        </Text>

        <Text style={styles.value}>
          {shipment.origin}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Destination
        </Text>

        <Text style={styles.value}>
          {shipment.destination}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Status
        </Text>

        <Text style={styles.value}>
          {shipment.status}
        </Text>

      </View>

      <Text style={styles.timelineTitle}>
        Tracking Progress
      </Text>

      {
        trackingSteps.map((step, index) => (

          <View
            key={index}
            style={styles.timelineItem}
          >

            <View
              style={[
                styles.timelineCircle,
                index <= currentStep
                  ? styles.completedCircle
                  : styles.pendingCircle,
              ]}
            />

            <Text
              style={[
                styles.timelineText,
                index <= currentStep
                  ? styles.completedText
                  : styles.pendingText,
              ]}
            >
              {step}
            </Text>

          </View>

        ))
      }

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
    marginBottom: 20,
    color: '#0F172A',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    color: '#64748B',
  },

  value: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  timelineTitle: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },

  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  timelineCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 12,
  },

  completedCircle: {
    backgroundColor: '#10B981',
  },

  pendingCircle: {
    backgroundColor: '#CBD5E1',
  },

  timelineText: {
    fontSize: 16,
  },

  completedText: {
    color: '#10B981',
    fontWeight: '700',
  },

  pendingText: {
    color: '#64748B',
  },

  errorContainer: {
    backgroundColor: '#FEE2E2',
    padding: 20,
    borderRadius: 12,
  },

  errorText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#991B1B',
  },

  errorSubtext: {
    marginTop: 8,
    color: '#7F1D1D',
  },

});

export default TrackingScreen;