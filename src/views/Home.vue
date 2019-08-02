<template>
  <v-app>
    <loader />
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
    alert: () => import('./../components/Alert.vue'),
    loader: () => import('./../components/Loader.vue')
  },

  mounted() {
    this.$store.commit('logging', true)
    this.$store.dispatch('getSummary')
  }
}
</script>

<style></style>
