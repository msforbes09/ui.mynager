<template>
  <v-navigation-drawer
    src="./../assets/brz-drawer.jpg"
    fixed
    dark
    clipped
    app
    v-model="visible"
    v-if="user.avatar"
  >
    <v-overlay color="black" z-index="-1"></v-overlay>
    <v-layout row class="mt-5">
      <v-flex class="text-center">
        <v-avatar size="100">
          <img :src="avatar" />
        </v-avatar>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex class="text-center">
        <p class="white--text subtitle-1 mt-3">{{ user.email }}</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>

    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item
        v-for="route in routes"
        :key="route.path"
        router
        :to="route.path"
        active-class="white"
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
    },
    avatar() {
      return process.env.VUE_APP_API + '/avatar/' + this.user.avatar
    },
    user() {
      return this.$store.getters.user
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
