import { defineStore } from 'pinia'
import axios from 'axios'

const baseURL = String(process.env.API_URL)

export const useStore = defineStore('store', {
  state: () => ({
    props: [],
    currentPage: 1,
    totalPages: 1,
    perPage: 10,
    totalItems: 0
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
      this.props.currentPage = response.data.data.pagination.current_page
      this.props.totalPages = response.data.data.pagination.total_pages
      this.props.perPage = response.data.data.pagination.per_page
      this.props.totalItems = response.data.data.pagination.total
    },
    async fetchProp (id) {
      const response = await axios.get(baseURL + id, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      this.props = Array(response.data.data)
    },
    async addProp (name, active) {
      const newProp = {
        house_rules: {
          name,
          active
        }
      }
      const response = await axios.post(baseURL, newProp, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      this.props = response.data.data.entities
    },
    async updateProp (id, name, active) {
      const newProp = {
        house_rules: {
          name,
          active
        }
      }
      const response = await axios.put(baseURL + id, newProp, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      this.props = response.data.data.entities
      this.fetchProps()
    },
    async deleteProp (id) {
      const response = await axios.delete(baseURL + id, {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      })
      this.props = response.data.data.entities
      this.fetchProps()
    }
  }
})
