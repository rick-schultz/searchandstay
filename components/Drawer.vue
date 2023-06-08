<template>
  <v-container>
    <!-- <v-list>
      <v-list-item to="/home">
        <v-list-item-title>
          Places to Stay
        </v-list-item-title>
      </v-list-item>
      <v-list-item to="/new-product">
        <v-list-item-title>
          List your Propery
        </v-list-item-title>
      </v-list-item>
    </v-list> -->
    <div class="tw-flex tw-flex-col tw-gap-3">
      <v-btn
        variant="plain"
        :ripple="false"
        class="!tw-text-black hover:!tw-text-gray-500 !tw-opacity-100 focus:!tw-border focus:!tw-border-black"
        to="/home"
        nuxt
      >
        About Us
      </v-btn>
      <v-btn
        variant="flat"
        :ripple="false"
        class="!tw-text-black hover:!tw-text-gray-500 !tw-opacity-100 focus:!tw-border focus:!tw-border-black"
        to="/home"
        nuxt
      >
        Contact
      </v-btn>
    </div>
  </v-container>
</template>
