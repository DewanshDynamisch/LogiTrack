
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ShipmentCard from '../../components/ShipmentCard';

import ShipmentStatCard from '../../components/ShipmentStatCard';
import { getShipments }
from '../../services/shipmentService';
import React, { useState, useEffect ,useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';


function DashboardScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [shipments, setShipments] = useState([]);



  const filteredShipments = shipments.filter((item) => {

    const matchesSearch =
      item.id.toLowerCase().includes(searchText.toLowerCase()) ||
      item.customer.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus =
      selectedStatus === 'All' ||
      item.status === selectedStatus; 

    return matchesSearch && matchesStatus;

  });
  const fetchShipments = async () => {

  try {

    const data = await getShipments();

    setShipments(data);

  } catch (error) {

    console.log(
      'Fetch Error:',
      error
    );

  } finally {

    setLoading(false);

  }

};
  // useEffect(() => {
  

  //   console.log('Dashboard Loaded');
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  //   fetchShipments();

  // }, []);
  useFocusEffect(
    useCallback(() => {
    

      fetchShipments();

    }, [])
  );


  const activeShipments = shipments.filter(
    (item) => item.status !== 'Delivered'
  ).length;

  const deliveredShipments = shipments.filter(
    (item) => item.status === 'Delivered'
  ).length;


  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.headerContainer}>

        <Text style={styles.appName}>
          LogiTrack
        </Text>

        <Text style={styles.appTagline}>
          Smart Logistics & Shipment Tracking
        </Text>

        <Text style={styles.welcomeText}>
          Welcome Back
        </Text>

        <Text style={styles.userName}>
          Dewansh
        </Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() =>
            navigation.navigate('CreateShipment')
          }
        >
          <Text style={styles.createButtonText}>
            + Create Shipment
          </Text>
           


        </TouchableOpacity>
        <TouchableOpacity
          style={styles.trackButton}
          onPress={() => {
            const activeShipment = shipments.find(item => item.status !== 'Delivered');
            if (activeShipment) {
              navigation.navigate('Tracking', { shipment: activeShipment });
            } else {
              alert('No active shipments to track');
            }
          }}
        >
          <Text style={styles.trackButtonText}>
             Track Shipment
          </Text>
        </TouchableOpacity>

      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>

        <ShipmentStatCard
          number={activeShipments.toString()}
          label="Active Shipments"
        />

        <ShipmentStatCard
          number={deliveredShipments.toString()}
          label="Delivered"
        />

      </View>

      {/* Shipment Section */}
      <View style={styles.shipmentSection}>

        {
          loading ? (

            <View style={styles.loaderContainer}>

              <ActivityIndicator
                size="large"
                color="#2563EB"
              />

              <Text style={styles.loaderText}>
                Loading Shipments....
              </Text>

            </View>

          ) : (

            <>

              <View style={styles.filterContainer}>

                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    selectedStatus === 'All' && styles.activeFilter,
                  ]}
                  onPress={() => setSelectedStatus('All')}
                >
                  <Text>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    selectedStatus === 'In Transit' && styles.activeFilter,
                  ]}
                  onPress={() => setSelectedStatus('In Transit')}
                >
                  <Text>In Transit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    selectedStatus === 'Delivered' && styles.activeFilter,
                  ]}
                  onPress={() => setSelectedStatus('Delivered')}
                >
                  <Text>Delivered</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.filterButton,
                    selectedStatus === 'Pending' && styles.activeFilter,
                  ]}
                  onPress={() => setSelectedStatus('Pending')}
                >
                  <Text>Pending</Text>
                </TouchableOpacity>
                

              </View>

              <TextInput
                placeholder="Search shipments..."
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                style={styles.searchInput}
              />

              {
                filteredShipments.length > 0 ? (

                  <FlatList
                    data={filteredShipments}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <ShipmentCard
                        id={item.id}
                        customer={item.customer}
                        status={item.status}
                        onPress={() => {
                          console.log('Open Details:', item.id);
                          navigation.navigate('ShipmentDetails', {
                            shipment:item,
                          });
                        }}
                      />
                    )}
                  />

                ) : (

                  <View style={styles.emptyContainer}>

                    <Text style={styles.emptyTitle}>
                      No Shipments Found
                    </Text>

                    <Text style={styles.emptyText}>
                      Try another search
                    </Text>

                  </View>

                )
              }

            </>

          )
        }

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  headerContainer: {
    marginTop: 20,
  },

  welcomeText: {
    fontSize: 18,
    color: '#64748B',
  },

  userName: {
    marginTop: 5,
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  shipmentSection: {
    flex: 1,
    marginTop: 35,
  },

  sectionTitle: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  appName: {
    fontSize: 34,
    fontWeight: '800',
    color: '#2563EB',
  },

  appTagline: {
    marginTop: 6,
    fontSize: 15,
    color: '#64748B',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 16,
    elevation: 2,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  activeFilter: {
    backgroundColor: '#2563EB',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },

  emptyText: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748B',
  },
  loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

loaderText: {
  marginTop: 15,
  fontSize: 16,
  color: '#64748B',
},
createButton: {
  backgroundColor: '#2563EB',
  padding: 12,
  borderRadius: 10,
  marginTop: 15,
  alignSelf: 'flex-start',
},

createButtonText: {
  color: '#FFFFFF',
  fontWeight: '700',
},
trackButton: {
  backgroundColor: '#10B981',
  padding: 12,
  borderRadius: 10,
  marginTop: 10,
  alignSelf: 'flex-start',
},

trackButtonText: {
  color: '#FFFFFF',
  fontWeight: '700',
},

});

export default DashboardScreen;