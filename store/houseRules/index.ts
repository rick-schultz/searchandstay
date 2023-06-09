import { defineStore } from 'pinia'
// import { useRuntimeConfig } from '#imports'
import axios from 'axios'
import { HouseRulesProps } from '@/types';

// const { apiUrl: API_URL, apiToken: API_TOKEN }  = useRuntimeConfig()

const API_URL = 'https://sys-dev.searchandstay.com/api/admin/house_rules'
const API_TOKEN = 'Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8'

export const useHouseRulesStore = defineStore('houseRules', {
  state: () => ({
    houseRules: {} as HouseRulesProps
  }),
  actions: {
    async fetchHouseRules(page: number = 1) {
      try {
        const response = await axios.get(API_URL + '?page=' + page, {
          headers: {
            'Authorization': API_TOKEN
          }
        })
        this.houseRules = response.data
      }
      catch (error) {
        console.log(error)
      }
    },
    async fetchHouseRule(id: number) {
      try {
        const response = await axios.get(API_URL + '/' + id, {
          headers: {
            'Authorization': API_TOKEN
          }
        })
        this.houseRules.data.entities.map((entity: any) => {
          if (entity.id === id) {
            console.log(entity)
            console.log(response.data.data)
            entity = response.data.data
          }
        })
      }
      catch (error) {
        console.log(error)
      }
    },
    async updateHouseRuleState(id: number, name: string, active: number, page: number = 1) {
      const newStatus = active === 1 ? 0 : 1
      try {
        await axios.put(API_URL + '/' + id, {
          house_rules: {
            name: name,
            active: newStatus
          }
        }, {
          headers: {
            'Authorization': API_TOKEN
          }
        })
        this.fetchHouseRules(page)
      }
      catch (error) {
        console.log(error)
      }
    },
    async removeHouseRule(id: number, page: number = 1) {
      try {
        await axios.delete(API_URL + '/' + id, {
          headers: {
            'Authorization': API_TOKEN
          }
        })
        this.fetchHouseRules(page)
      }
      catch (error) {
        console.log(error)
      }
    },
    async addHouseRule(name: string, active: number, page: number = 1) {
      try {
        await axios.post(API_URL, {
          house_rules: {
            name: name,
            active: active,
          }
        }, {
          headers: {
            'Authorization': API_TOKEN
          }
        })
        this.fetchHouseRules(page)
      }
      catch (error) {
        console.log(error)
      }
    }
  },
})
