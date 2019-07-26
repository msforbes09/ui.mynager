<template>
  <v-app>
    <v-overlay color="black" z-index="0"> </v-overlay>
    <v-content class="background">
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-25">
              <v-toolbar color="indigo darken-3" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <form
                @submit.prevent="login"
                @keydown="error.clear($event.target.name)"
              >
                <v-divider></v-divider>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        prepend-icon="mdi-account-card-details-outline"
                        v-model="credential.email"
                        :error-messages="error.get('email')"
                        autofocus
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        type="password"
                        label="Password"
                        prepend-icon="mdi-lock-open-outline"
                        v-model="credential.password"
                        :error-messages="error.get('password')"
                      ></v-text-field>
                    </v-flex>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    type="submit"
                    class="indigo darken-3"
                    :loading="loading"
                    >Sign In</v-btn
                  >
                </v-card-actions>
              </form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    error() {
      return this.$store.getters.error
    }
  },
  data: () => ({
    credential: {}
  }),
  methods: {
    login() {
      this.$store.dispatch('login', this.credential)
    }
  }
}
</script>

<style>
.background {
  background: url('./../../assets/signin.jpg') no-repeat center;
  background-size: cover;
}
</style>
