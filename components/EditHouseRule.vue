<script setup lang="ts">
import { ref, toRefs } from "vue";
import { useHouseRulesStore } from "@/store/houseRules";
import { Entity } from "@/types";

const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
  newName.value = name.value;
  active.value === 1 ? activeValue.value = true : activeValue.value = false;
};

const store = useHouseRulesStore();

interface Prop extends Entity {
  id: number;
  name: string;
  active: number;
  page: number;
}

const prop = defineProps<Prop>();

const { id, name, active, page } = toRefs(prop);

const newName = ref(name.value);

const newActive = ref(0);

const getActiveValue = () => {
  store.fetchHouseRule(id.value).then(() => {
    if (active.value === 1) {
      newActive.value = 1;
      activeValue.value = true;
    } else {
      newActive.value = 0;
      activeValue.value = false;
    }
  });
};

const activeValue = ref(true);

const editHouseRule = () => {
  store.updateHouseRuleState(
    id.value,
    newName.value,
    newActive.value === 1 ? 0 : 1,
    page.value
  );
  toggleDialog();
};

const updateActiveValue = (newValue: number | boolean) => {
  newValue === true ? newActive.value = 1 : newActive.value = 0;
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
          @click="getActiveValue"
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
          <v-container class="tw-flex tw-flex-col">
            <v-text-field
              v-model="newName"
              label="Name *"
              required
              autofocus
            />
            <v-checkbox
              v-model="activeValue"
              label="Active *"
              required
              @update:model-value="updateActiveValue($event)"
            />
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
            color="success"
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
