<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
  id: number
  name: string
  active: number
  order: number
}

const props = defineProps<Props>()

const { id, name, active, order } = toRefs(props)
</script>

<template>
  <ul>
    <li>{{ id }}</li>
    <li>{{ name }}</li>
    <li>{{ active }}</li>
    <li>{{ order }}</li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
