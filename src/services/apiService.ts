import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const simulateWave = async (velocity: number, frequency: number, amplitude: number) => {
  try {
    const response = await axios.post(`${API_URL}/api/simulate/wave/`, {
      velocity,
      frequency,
      amplitude,
    });
    return response.data;
  } catch (error) {
    console.error('Erro na simulação de onda:', error);
    throw error;
  }
};

export const simulateDalembert = async (velocity: number, frequency: number, amplitude: number) => {
  try {
    const response = await axios.post(`${API_URL}/api/simulate/dalembert/`, {
      velocity,
      frequency,
      amplitude,
    });
    return response.data;
  } catch (error) {
    console.error('Erro na simulação da equação de D\'Alembert:', error);
    throw error;
  }
};
