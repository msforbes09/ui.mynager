<template>
  <div>
    <show />
    <create />
    <v-layout class="mb-2" align-baseline>
      <v-text-field
        v-model="searchItem"
        append-icon="mdi-briefcase-search-outline"
        label="Search"
        single-line
        hide-details
        outline
        clearable
        autofocus
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn @click="create" class="primary">Add New</v-btn>
    </v-layout>

    <v-card dark>
      <v-data-table
        must-sort
        :headers="headers"
        :items="incomes"
        :loading="loading"
        :options.sync="pagination"
        :server-items-length="totalItems"
        :footer-props="{ itemsPerPageOptions: [10, 50, 100] }"
      >
        <template v-slot:item.action="{ item }">
          <v-btn small icon @click="showIncome(item.id)">
            <v-icon class="primary--text text--lighten-2"
              >mdi-open-in-app</v-icon
            >
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import create from './Create.vue'
import show from './Show.vue'

export default {
  components: { create, show },
  computed: {
    incomes() {
      return this.$store.getters.incomes.data
    },
    loading() {
      return this.$store.getters.loading
    },
    totalItems() {
      return this.$store.state.incomes.total
    }
  },
  created() {
    this.search = this._.debounce(this.getIncomes, 500)
  },
  data() {
    return {
      headers: [
        { text: 'Date', align: 'left', value: 'date' },
        { text: 'Subject', align: 'left', value: 'subject' },
        { text: 'Amount', align: 'left', value: 'amount' },
        { text: 'Actions', align: 'center', value: 'action', sortable: false }
      ],
      pagination: { sortDesc: [true], sortBy: ['date'] },
      searchItem: ''
    }
  },
  methods: {
    create() {
      this.$store.commit('createIncome', true)
    },
    showIncome(id) {
      this.$store.dispatch('showIncome', id)
    },
    getIncomes() {
      let request = Object.assign({}, this.pagination, {
        search: this.searchItem
      })
      this.$store.dispatch('getIncomes', request)
    }
  },
  watch: {
    pagination: {
      handler() {
        this.getIncomes()
      },
      deep: true
    },
    searchItem() {
      this.search()
    }
  }
}
</script>

<style></style>
