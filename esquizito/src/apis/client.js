import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
