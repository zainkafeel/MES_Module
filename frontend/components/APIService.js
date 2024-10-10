class APIService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async fetchRecords(endpoint) {
      const response = await fetch(`${this.baseURL}/${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    }
  
    async createRecord(endpoint, data) {
      const response = await fetch(`${this.baseURL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    }
  }
  
  export default new APIService('http://localhost:3000/api');  