
<template>
  <div class="client-page">
    <h1>Client Management</h1>
    <div class="client-actions">
      <button @click="showForm = !showForm">{{ showForm ? 'Hide Form' : 'Create Client' }}</button>
    </div>
    <ClientForm v-if="showForm" @client-created="handleClientCreated"/>
    <ClientList :clients="clients" @client-updated="fetchClients"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ClientForm from '../components/Client/ClientForm.vue'
import ClientList from '../components/Client/ClientList.vue'
import { clientService } from '../services/clientService'

export default {
  name: 'ClientPage',
  components: {
    ClientForm,
    ClientList
  },
  setup() {
    const clients = ref([])
    const showForm = ref(false)

    const fetchClients = async () => {
      try {
        clients.value = await clientService.getAllClients()
      } catch (error) {
        console.error('Error fetching clients:', error)
      }
    }

    const handleClientCreated = () => {
      showForm.value = false
      fetchClients()
    }

    onMounted(fetchClients)

    return {
      clients,
      showForm,
      handleClientCreated,
      fetchClients
    }
  }
}
</script>

<style scoped>
.client-page {
  padding: 20px;
}

.client-actions {
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  background-color: #D9D2C6;
  border: none;
  cursor: pointer;
}
</style>
