
import api from './api'

export const logService = {
  async getClientLogs(clientId) {
    const response = await api.get(`/agentclient_logs/client/${clientId}`)
    return response.data
  },

  async getAccountLogs(accountId) {
    const response = await api.get(`/agentclient_logs/account/${accountId}`)
    return response.data
  },

  async getCommunicationLogs(logId) {
    const response = await api.get(`/communication_logs/${logId}`)
    return response.data
  }
}

export default logService
