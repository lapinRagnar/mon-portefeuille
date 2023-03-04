import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

  const essai = ref('salut')
  return {
    essai
  }
})
