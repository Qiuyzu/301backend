
<template>
  <div class="transaction-page">
    <h1>Transaction History</h1>
    <TransactionList :transactions="transactions"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import TransactionList from '../components/Transaction/TransactionList.vue'
import { transactionService } from '../services/transactionService'

export default {
  name: 'TransactionPage',
  components: {
    TransactionList
  },
  setup() {
    const transactions = ref([])

    const fetchTransactions = async () => {
      try {
        transactions.value = await transactionService.getAllTransactions()
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    onMounted(fetchTransactions)

    return {
      transactions
    }
  }
}
</script>

<style scoped>
.transaction-page {
  padding: 20px;
}
</style>
