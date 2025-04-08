
<template>
  <div class="dashboard">
    <h1>Admin Dashboard</h1>
    <div class="nav-buttons">
      <button @click="$router.push('/accounts')">MANAGE ACCOUNTS</button>
      <button @click="$router.push('/transactions')">VIEW TRANSACTIONS</button>
      <button @click="$router.push('/clients/unassigned')">MANAGE UNASSIGNED CLIENTS</button>
      <button @click="$router.push('/settings')">SETTINGS</button>
    </div>
    <div class="recent-activities">
      <h3>RECENT ACTIVITIES</h3>
      <ul>
        <li v-for="(log, index) in recentLogs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'AdminDashboard',
  setup() {
    const recentLogs = ref([])
    const router = useRouter()
    const store = useStore()

    onMounted(async () => {
      // Fetch admin logs
    })

    return {
      recentLogs
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.nav-buttons {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  background-color: #D9D2C6;
  padding: 10px;
}

button {
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.recent-activities {
  background-color: #F5F5F5;
  padding: 20px;
  margin-top: 20px;
}
</style>
