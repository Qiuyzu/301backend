
<template>
  <div class="client-form">
    <h3>{{ editMode ? 'Edit Client' : 'Add New Client' }}</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input v-model="form.firstName" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <input v-model="form.lastName" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <input v-model="form.email" type="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input v-model="form.phone" placeholder="Phone" required>
      </div>
      <div class="form-group">
        <input v-model="form.address" placeholder="Address" required>
      </div>
      <button type="submit">{{ editMode ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ClientForm',
  props: {
    editMode: {
      type: Boolean,
      default: false
    },
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      ...props.initialData
    })

    const handleSubmit = () => {
      emit('submit', form.value)
    }

    return {
      form,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.client-form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
