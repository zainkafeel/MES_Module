<template>
  <div class="dashboard p-6">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white shadow-md p-4">
        <p class="text-gray-700">Production Status</p>
        <p class="text-green-500">{{ metrics.productionStatus }}</p>
      </div>
      <div class="bg-white shadow-md p-4">
        <p class="text-gray-700">Machine Utilization</p>
        <p class="text-blue-500">{{ metrics.machineUtilization }}</p>
      </div>
      <div class="bg-white shadow-md p-4">
        <p class="text-gray-700">Defect Rates</p>
        <p class="text-red-500">{{ metrics.defectRates }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Line, Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  BarElement,
  CategoryScale,
} from 'chart.js';
import APIService from './APIService';
import { io } from 'socket.io-client'; // Import Socket.IO client

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, BarElement, CategoryScale);

export default {
  name: 'Dashboard',
  components: {
    LineChart: Line,
    BarChart: Bar,
  },
  data() {
    return {
      metrics: {
        productionStatus: '',
        machineUtilization: '',
        defectRates: '',
      },
      socket: null, // For Socket.IO connection
    };
  },
  created() {
    this.fetchMetrics();
    this.setupSocket(); // Initialize Socket.IO connection
  },
  methods: {
    async fetchMetrics() {
      try {
        const data = await APIService.fetchRecords('production');
        this.metrics.productionStatus = data.productionStatus;
        this.metrics.machineUtilization = data.machineUtilization;
        this.metrics.defectRates = data.defectRates;
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    },
    setupSocket() {
      this.socket = io('http://localhost:3000'); // Connect to the Socket.IO server

      this.socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server');
      });
      
      // Listen for any events from the server here
      this.socket.on('yourEvent', (data) => {
        console.log('Received data:', data);
        // Handle the received data
      });
    },
  },
};
</script>