<template>
  <b-navbar toggleable="lg" type="light" class="px-4">
    <b-navbar-brand to="/home">
      <b-img class="logo" src="../assets/img/logo.png" fluid alt="Search and Stay Logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto gap-2">
        <b-button to="/home">
          Home
        </b-button>
        <b-button variant="primary" to="/new-product">
          New Product
        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
.logo {
  height: 50px;
}
.gap-2 {
  gap: 0.5rem;
}
</style>
