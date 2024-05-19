import axios from 'axios';

const instance = axios.create({
  baseURL: '/', // Base URL
  timeout: 5000, // Timeout setting
});

export const register = async (username, password) => {
  try {
    const response = await instance.post('/Signup', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  } 
};


export const login = async (username, password) => {
  try {
    const response = await axios.post('/Login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
