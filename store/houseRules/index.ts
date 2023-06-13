import axios from 'axios'
import { defineStore } from 'pinia'
import { HouseRulesProps, Entity } from '@/types';

export const useHouseRulesStore = defineStore('houseRules', {
  state: () => ({
    API_URL: useRuntimeConfig().public.API_URL,
    API_TOKEN: useRuntimeConfig().public.API_TOKEN,
    houseRules: {} as HouseRulesProps
  }),
  actions: {
    async fetchHouseRules(page: number = 1) {
      try {
        const response = await axios.get(this.API_URL + '?page=' + page, {
          headers: {
            'Authorization': this.API_TOKEN
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
        const response = await axios.get(this.API_URL + '/' + id, {
          headers: {
            'Authorization': this.API_TOKEN
          }
        })
        this.houseRules.data.entities.map((entity: Entity) => {
          if (entity.id === id) {
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
        await axios.put(this.API_URL + '/' + id, {
          house_rules: {
            name: name,
            active: newStatus
          }
        }, {
          headers: {
            'Authorization': this.API_TOKEN
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
        await axios.delete(this.API_URL + '/' + id, {
          headers: {
            'Authorization': this.API_TOKEN
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
        await axios.post(this.API_URL, {
          house_rules: {
            name: name,
            active: active,
          }
        }, {
          headers: {
            'Authorization': this.API_TOKEN
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
