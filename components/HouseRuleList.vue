<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs, getActivePinia } from 'pinia'
import { useHouseRulesStore } from '@/store/houseRules'

const store = useHouseRulesStore(getActivePinia())

const { houseRules } = storeToRefs(store)

const entities = computed(() => { return houseRules.value.data.entities })

const pagination = computed(() => { return houseRules.value.data.pagination })

const page = computed(() => { return houseRules.value.data.pagination.current_page })

const changePage = (newPage: number) => {
  store.fetchHouseRules(newPage);
}
const headers = ['Name', 'Active'];
</script>

<template>
  <div
    v-if="entities"
    class="tw-flex tw-justify-center tw-flex-col tw-items-center tw-w-full"
  >
    <v-table>
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            class="text-left"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in entities"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>
            <v-checkbox
              v-model="item.active"
              :value="1"
              hide-details
              @click="store.updateHouseRuleState(item.id, item.name, item.active, page)"
            />
          </td>
          <td>
            <div class="tw-grid tw-grid-cols-2 tw-items-center tw-gap-2">
              <div>
                <EditHouseRule
                  v-bind="item"
                  :page="pagination.current_page"
                />
              </div>
              <DeleteConfirmation
                v-bind="item"
                :page="pagination.current_page"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-pagination
      v-model="pagination.current_page"
      :length="pagination.total_pages"
      :total-visible="pagination.total_pages"
      @update:model-value="changePage($event)"
    />
  </div>
</template>
