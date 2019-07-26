<template>
  <v-navigation-drawer
    src="./../assets/drawer.jpg"
    fixed
    dark
    clipped
    app
    v-model="visible"
  >
    <v-overlay color="indigo" opacity="0.5" z-index="0"></v-overlay>
    <v-list dense nav>
      <v-list-item
        v-for="route in routes"
        :key="route.path"
        router
        :to="route.path"
        active-class="yellow"
      >
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ route.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    visible: {
      get() {
        return this.$store.state.drawer
      },
      set(arg) {
        this.$store.commit('drawer', arg)
      }
    }
  },
  data() {
    return {
      routes: [
        { path: '/', label: 'Home', icon: 'mdi-home' },
        { path: '/summary', label: 'Summary', icon: 'mdi-view-dashboard' },
        { path: '/income', label: 'Income', icon: 'mdi-cash-multiple' },
        { path: '/expense', label: 'Expense', icon: 'mdi-cash-multiple' }
      ]
    }
  }
}
</script>

<style></style>
