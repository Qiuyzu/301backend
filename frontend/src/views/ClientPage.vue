
<template>
  <div class="client-page">
    <h1>Client Management</h1>
    <div class="actions">
      <button @click="$router.push('/clients/new')" class="create-btn">Create New Client</button>
    </div>
    <div class="client-list">
      <ClientList :clients="clients" @client-updated="fetchClients"/>
    </div>
    <div class="bottom-buttons">
      <button @click="$router.push('/agent-dashboard')" class="return-btn">Return to Dashboard</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ClientList from '../components/Client/ClientList.vue'
import { clientService } from '../services/clientService'

export default {
  name: 'ClientPage',
  components: {
    ClientList
  },
  setup() {
    const clients = ref([])

    const fetchClients = async () => {
      try {
        clients.value = await clientService.getAllClients()
      } catch (error) {
        console.error('Error fetching clients:', error)
      }
    }

    onMounted(fetchClients)

    return {
      clients,
      fetchClients
    }
  }
}
</script>

<style scoped>
.client-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}

.actions {
  margin: 20px 0;
}

.create-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.client-list {
  flex: 1;
}

.bottom-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
