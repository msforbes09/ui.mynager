<template>
  <v-navigation-drawer fixed clipped app v-model="visible">
    <v-list dense nav>
      <v-list-item
        v-for="route in routes"
        :key="route.path"
        router
        :to="route.path"
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
