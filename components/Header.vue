<template>
  <v-container>
    <div class="md:tw-hidden tw-text-center">
      <NuxtLink to="/home">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </NuxtLink>
    </div>
    <div class="tw-hidden md:tw-flex tw-gap-4 tw-justify-center">
      <NuxtLink to="/home">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </NuxtLink>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
img {
  max-width: 15rem;
}
</style>
