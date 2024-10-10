import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // If you're using Vue Router
import './assets/tailwind.css'; // Assuming you have Tailwind CSS set up

createApp(App)
  .use(router) // Use router if applicable
  .mount('#app');
