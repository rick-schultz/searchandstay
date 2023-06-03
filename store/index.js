import { defineStore } from 'pinia'
import axios from 'axios'

const baseURL = String(process.env.API_URL)

export const useStore = defineStore('store', {
  state: () => ({
    props: []
  }),
  getters: {
    getProps () {
      return this.props
    }
  },
  actions: {
    async fetchProps () {
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      this.props = response.data.data.entities
    }
  }
})
