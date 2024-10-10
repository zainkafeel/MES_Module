<template>
  <div class="quality-control p-6">
    <h1 class="text-2xl font-bold mb-4">Quality Control</h1>
    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" @click="scheduleInspection">
      Schedule Inspection
    </button>
    <ul class="mt-4 space-y-2">
      <li v-for="inspection in inspections" :key="inspection.id" class="bg-white shadow-md p-4">
        {{ inspection.name }} - Status: {{ inspection.status }}
      </li>
    </ul>
  </div>
</template>

<script>
import APIService from './APIService';

export default {
  name: 'QualityControl',
  data() {
    return {
      inspections: [],
    };
  },
  created() {
    this.fetchInspections();
  },
  methods: {
    async fetchInspections() {
      try {
        this.inspections = await APIService.fetchRecords('qualitycontrol');
      } catch (error) {
        console.error('Error fetching inspections:', error);
      }
    },
    async scheduleInspection() {
      const newInspection = { name: 'New Inspection', status: 'Scheduled' };
      try {
        const inspection = await APIService.createRecord('qualitycontrol', newInspection);
        this.inspections.push(inspection);
      } catch (error) {
        console.error('Error scheduling inspection:', error);
      }
    },
  },
};
</script>