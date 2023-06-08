<script setup lang="ts">
import { ref, toRefs } from "vue";
import { getActivePinia } from 'pinia'
import { useHouseRulesStore } from '@/store/houseRules'
import { Entity } from "@/types";

const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
  newName.value = name.value;
  activeValue.value = active.value;
};

const store = useHouseRulesStore(getActivePinia())

interface Prop extends Entity {
  id: number;
  name: string;
  active: number;
  page: number;
}

const prop = defineProps<Prop>()

const { id, name, active, page } = toRefs(prop)

const newName = ref(name.value);

const newActive = ref(1);

const activeValue = ref(active.value);

const editHouseRule = () => {
  store.updateHouseRuleState(id.value, newName.value, newActive.value, page.value);
  toggleDialog();
};

const updateActiveValue = (newValue: number | boolean) => {
  if (newValue === 1) {
    newActive.value = 0;
  } else {
    newActive.value = 1;
  }
};
</script>

<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
      @click:outside="toggleDialog"
    >
      <template #activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
        </v-btn>
      </template>
      <v-card class="!tw-p-4">
        <v-card-title>
          <span class="text-h5">List Your Property</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="newName"
                  label="Name *"
                  required
                  autofocus
                />
              </v-col>
              <v-checkbox
                v-model="activeValue"
                label="Active *"
                required
                :value="1"
                @update:model-value="updateActiveValue($event)"
              />
            </v-row>
          </v-container>
          <small>* Indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="toggleDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="editHouseRule"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
