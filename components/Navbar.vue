<template>
  <b-navbar toggleable="lg" type="light" class="px-4">
    <b-navbar-brand href="#">
      <b-img class="logo" src="../assets/img/logo.png" fluid alt="Search and Stay Logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          Home
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
        <b-nav-item href="#">
          Link
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
.logo {
  height: 50px;
}
</style>
