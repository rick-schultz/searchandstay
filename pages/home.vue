<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useStore } from '~/store/index'

const store = useStore()

onBeforeMount(() => {
  store.fetchProps()
})

interface Prop {
  id: number
  name: string
  active: number
  order: number
  currentPage: number
  totalPages: number
  perPage: number
  totalItems: number
}

type Props = Prop[]

const props = computed<Props>(() => store.props)
</script>

<template>
  <div class="main px-4">
    <div class="pb-4 d-lg-none d-flex justify-content-end">
      <b-button variant="primary" to="/new-product">
        New Product
      </b-button>
    </div>
    <b-row>
      <ProductList v-for="prop in props" :key="prop.id" v-bind="prop" />
    </b-row>
    <div class="d-flex justify-content-center">
      <b-pagination
        v-model="props.currentPage"
        :total-rows="props.totalItems"
        :per-page="props.perPage"
        aria-controls="my-table"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  min-height: 85vh;
}
</style>
