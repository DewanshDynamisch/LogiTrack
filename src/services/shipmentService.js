import axios from 'axios';

const BASE_URL =
  'https://6a1d62bcbcc4f20d5ca47bbf.mockapi.io/api/v1';

export const getShipments = async () => {

  try {

    const response = await axios.get(
      `${BASE_URL}/Shipments`
    );

    console.log(
      'API DATA =>',
      response.data
    );

    return response.data;

  } catch (error) {

    console.log(
      'Get Shipments Error:',
      error
    );

    throw error;

  }

};

export const createShipment = async (
  shipmentData
) => {

  try {

    console.log(
      'Shipment Data =>',
      shipmentData
    );

    const response = await axios.post(
      `${BASE_URL}/Shipments`,
      shipmentData
    );

    console.log(
      'CREATE RESPONSE =>',
      response.data
    );

    return response.data;

  } catch (error) {

    console.log(
      'CREATE ERROR =>',
      error.response?.data
    );

    console.log(
      'FULL ERROR =>',
      error
    );

    throw error;

  }

};