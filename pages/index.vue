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
}

type Props = Prop[]

const props = computed<Props>(() => store.props)
</script>

<template>
  <div>
    <Navbar />
    <div class="main px-4">
      <h1>Hello</h1>
      <ProductList v-for="prop in props" :key="prop.id" v-bind="prop" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main{
  min-height: 85vh;
}
</style>
