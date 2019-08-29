<template>
  <div>
    <daily />
    <show />
    <create />
    <search />
    <v-layout class="mb-2 mt-3">
      <v-spacer></v-spacer>
      <v-btn @click="create()" class="primary mr-2">Add New</v-btn>
      <v-btn @click="search" class="success ">Search</v-btn>
    </v-layout>

    <v-card dark>
      <v-data-table
        must-sort
        :headers="headers"
        :items="expenses"
        :loading="loading"
        :options.sync="pagination"
        :server-items-length="totalItems"
        :footer-props="{ itemsPerPageOptions: [10, 50, 100] }"
      >
        <template v-slot:item.action="{ item }">
          <v-btn small icon @click="showDaily(item.date)" :disabled="loading">
            <v-icon class="primary--text text--lighten-2"
              >mdi-calendar-today</v-icon
            >
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import daily from './Daily.vue'
import show from './Show.vue'
import create from './Create.vue'
import search from './Search.vue'

export default {
  components: { daily, show, create, search },
  computed: {
    expenses() {
      return this.$store.getters.expenses.data
    },
    totalItems() {
      return this.$store.getters.expenses.total
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  data() {
    return {
      headers: [
        { text: 'Date', align: 'left', value: 'date' },
        { text: 'Amount', align: 'left', value: 'amount' },
        { text: 'Action', align: 'center', value: 'action', sortable: false }
      ],
      pagination: { sortDesc: [true], sortBy: ['date'] }
    }
  },
  methods: {
    create(date = new Date().toISOString().substr(0, 10)) {
      this.$store.commit('date', date)
      this.$store.commit('createExpense', true)
    },
    showDaily(date) {
      this.$store.dispatch('getDailyExpenses', date)
    },
    getExpenses() {
      this.$store.dispatch('getExpenses', this.pagination)
    },
    search() {
      this.$store.commit('showSearchedExpenses', true)
    }
  },
  watch: {
    pagination: {
      handler() {
        this.getExpenses()
      },
      deep: true
    }
  }
}
</script>
