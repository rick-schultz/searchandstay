<script setup lang="ts">
import { ref } from "vue";
import { useHouseRulesStore } from "@/store/houseRules";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const store = useHouseRulesStore();

const loaded = ref(false);

store.fetchHouseRules(1).then(() => {
  loaded.value = true;
});
</script>

<template>
  <v-app>
    <v-app-bar
      elevation="0"
      class="!tw-py-4"
    >
      <v-app-bar-nav-icon
        class="nav-icon md:!tw-hidden !tw-absolute"
        @click="toggleDrawer"
      />
      <Header />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="!tw-py-8"
      temporary
    >
      <Drawer />
    </v-navigation-drawer>

    <v-main class="!tw-pt-24">
      <v-container>
        <NewHouseRule />
      </v-container>
      <v-container>
        <v-row data-aos="fade-left">
          <HouseRuleList v-if="loaded" />
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style src="@/assets/scss/global.scss" lang="scss" />
