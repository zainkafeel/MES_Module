<template>
  <div class="home text-center mt-10">
    <h1 class="text-4xl font-bold mb-6">Welcome to the MES Module</h1>
    <nav>
      <ul class="flex justify-center space-x-6">
        <li>
          <router-link to="/dashboard" class="text-green-500 hover:text-green-700 font-medium">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/production-tracking" class="text-green-500 hover:text-green-700 font-medium">Production Tracking</router-link>
        </li>
        <li>
          <router-link to="/quality-control" class="text-green-500 hover:text-green-700 font-medium">Quality Control</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
