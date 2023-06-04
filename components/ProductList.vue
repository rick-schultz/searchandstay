<script setup lang="ts">
import { toRefs, ref, watch } from 'vue'
import { useStore } from '~/store/index'

const store = useStore()

interface Props {
  id: number
  name: string
  active: number
  order: number
  editProduct?: boolean
}

const props = defineProps<Props>()

const { id, name, active, editProduct } = toRefs(props)

const localName = ref(name.value)
const localActive = ref(active.value ?? 1)

watch(localActive, () => {
  console.log(Number(localActive.value))
})

function addNewProduct () {
  store.addProp(localName.value, Number(localActive.value))
    .then(() => { window.location.href = '/home' })
}

function editProductPage () {
  window.location.href = `/edit-product/${id.value}`
}

function updateProduct () {
  store.updateProp(id.value, localName.value, Number(localActive.value))
    .then(() => { window.location.href = '/home' })
}
</script>

<template>
  <b-col xs="12" sm="12" md="6" lg="4" xl="3">
    <b-form class="py-4">
      <b-form-group v-if="id && !editProduct" id="input-group-2" label="ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="id"
          placeholder="Enter ID"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="localName"
          placeholder="Enter name"
          required
          @keyup="event => localName = event.target.value"
        />
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkboxes-4"
          v-model="localActive"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="0">
            Inactive
          </b-form-checkbox>
          <b-form-checkbox value="1">
            Active
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button v-if="!id" variant="primary" @click="addNewProduct()">
        Add
      </b-button>
      <b-button v-if="id && !editProduct" variant="primary" @click="editProductPage()">
        Edit Product
      </b-button>
      <b-button v-if="!editProduct && id" variant="primary" @click="store.updateProp(id, localName, localActive)">
        Update
      </b-button>
      <b-button v-if="editProduct" variant="primary" @click="updateProduct()">
        Update
      </b-button>
      <b-button v-if="id" variant="danger" @click="store.deleteProp(id)">
        Delete
      </b-button>
    </b-form>

    <!-- <button @click="store.fetchProp(id)">
      Show
    </button>
    <button @click="store.addProp(newProp)">
      Add
    </button> -->
  </b-col>
</template>

<style lang="scss" scoped>

</style>
