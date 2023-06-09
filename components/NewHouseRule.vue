<script setup lang="ts">
import { computed, ref } from "vue";
import { useHouseRulesStore } from "@/store/houseRules";

const store = useHouseRulesStore();

const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const name = ref("");

const isActive = ref(false);

const active = computed(() => {
  return isActive.value ? 1 : 0;
});

const page = computed(() => {
  return Math.ceil(
    store.houseRules.data.pagination.total /
      store.houseRules.data.pagination.per_page +
      0.1
  );
});

const saveNewHouseRule = () => {
  store.addHouseRule(name.value, active.value, page.value);
  name.value = "";
  isActive.value = false;
  toggleDialog();
};
</script>

<template>
  <v-row class="tw-flex tw-justify-end tw-p-4">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
      @click:outside="toggleDialog"
    >
      <template #activator="{ props }">
        <v-btn
          color="success"
          v-bind="props"
        >
          List Your Property
        </v-btn>
      </template>
      <v-card class="!tw-p-4">
        <v-card-title>
          <span class="text-h5">List Your Property</span>
        </v-card-title>
        <v-card-text>
          <v-container class="tw-flex tw-flex-col">
            <v-text-field
              v-model="name"
              label="Name *"
              required
              autofocus
            />
            <v-checkbox
              v-model="isActive"
              label="Active *"
              required
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
            @click="saveNewHouseRule"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
