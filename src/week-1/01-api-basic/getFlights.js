import dotenv from "dotenv";
dotenv.config();

const AVIATIONSTACK_API_KEY = process.env.AVIATIONSTACK_API_KEY;

const getFlights = async () => {
  const response = await fetch(
    `https://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Błąd HTTP! Status: ${response.status}`);
  }

  const flights = await response.json();
  console.log(flights);
};

getFlights();
