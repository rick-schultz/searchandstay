<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useHouseRulesStore } from "@/store/houseRules";
import { Entity } from "@/types";

const dialog = ref(false);

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const store = useHouseRulesStore();

interface Prop extends Entity {
  id: number;
  name: string;
  active: number;
  page: number;
}

const prop = defineProps<Prop>();

const { id } = toRefs(prop);

const nextPage = computed(() => {
  return Math.ceil(
    store.houseRules.data.pagination.total /
      store.houseRules.data.pagination.per_page -
      0.1
  );
});
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
      @click:outside="toggleDialog"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          color="error"
        >
          <v-icon left>
            mdi-trash-can
          </v-icon>
        </v-btn>
      </template>

      <v-card class="!tw-p-4">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <span class="text-h5">Are you sure you want to delete?</span>
              </v-col>
            </v-row>
          </v-container>
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
            color="error"
            variant="text"
            @click="store.removeHouseRule(id, nextPage)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
