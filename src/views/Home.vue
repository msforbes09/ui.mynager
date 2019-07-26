<template>
  <v-app>
    <v-overlay :value="logging" color="black">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <alert />
    <drawer />
    <navbar />
    <v-content class="grey lighten-4">
      <v-container container--fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    navbar: () => import('./../components/Navbar.vue'),
    drawer: () => import('./../components/Drawer.vue'),
    alert: () => import('./../components/Alert.vue')
  },
  computed: {
    logging() {
      return this.$store.getters.logging
    }
  }
}
</script>

<style></style>
