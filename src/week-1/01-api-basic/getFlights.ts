import dotenv from "dotenv";
dotenv.config();

type Flight = {
  flight_date: string;
  flight_status: string;
  departure: object;
  arrival: object;
  airline: object;
  flight: object;
  aircraft: object;
  live: null | object;
};

type FlightsResponse = {
  data: Flight[];
};

const AVIATIONSTACK_API_KEY = process.env.AVIATIONSTACK_API_KEY;

const getFlights = async () => {
  try {
    const response = await fetch(
      `https://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP status code ${response.status}`);
    }

    const flights: FlightsResponse = await response.json();
    console.log(flights.data);
  } catch (error) {
    console.error(`Task failed successfully :) ${error}`);
  }
};

getFlights();
