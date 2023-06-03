<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useStore } from '~/store/index'

const store = useStore()

const url = window.location.href
const id = url.substring(url.lastIndexOf('/') + 1)

onBeforeMount(() => {
  store.fetchProp(id)
})

interface Prop {
  id: number
  name: string
  active: number
  order: number
}

type Props = Prop[]

const props = computed<Props>(() => store.props)
</script>

<template>
  <div class="main px-4">
    <b-row>
      <ProductList v-for="prop in props" :key="prop.id" v-bind="prop" :edit-product="true" />
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
.main{
  min-height: 85vh;
}
</style>
