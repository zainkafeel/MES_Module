<template>
  <div class="production-tracking p-6">
    <h1 class="text-2xl font-bold mb-4">Production Tracking</h1>
    <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" @click="createProductionRecord">
      Create New Production Record
    </button>
    <ul class="mt-4 space-y-2">
      <li v-for="record in productionRecords" :key="record.id" class="bg-white shadow-md p-4">
        {{ record.name }} - Status: {{ record.status }}
      </li>
    </ul>
  </div>
</template>

<script>
import APIService from './APIService';

export default {
  name: 'ProductionTracking',
  data() {
    return {
      productionRecords: [],
    };
  },
  created() {
    this.fetchProductionRecords();
  },
  methods: {
    async fetchProductionRecords() {
      try {
        this.productionRecords = await APIService.fetchRecords('production');
      } catch (error) {
        console.error('Error fetching production records:', error);
      }
    },
    async createProductionRecord() {
      const newRecord = { name: 'New Product', status: 'Pending' };
      try {
        const record = await APIService.createRecord('production', newRecord);
        this.productionRecords.push(record);
      } catch (error) {
        console.error('Error creating production record:', error);
      }
    },
  },
};
</script>
