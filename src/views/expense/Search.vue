<template>
  <v-dialog v-model="show" max-width="1000px">
    <v-card dark>
      <v-card-text>
        <v-layout class="mb-2">
          <v-spacer></v-spacer>
          <v-text-field
            v-model="searchItem"
            append-icon="mdi-briefcase-search-outline"
            label="Search"
            single-line
            hide-details
            outline
          ></v-text-field>
        </v-layout>
      </v-card-text>

      <v-data-table
        must-sort
        :headers="headers"
        :items="expenses"
        :loading="loading"
        :options.sync="pagination"
        :server-items-length="totalItems"
        :footer-props="{ itemsPerPageOptions: [10] }"
      >
      </v-data-table>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-orange" dark @click="show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    expenses() {
      return this.$store.getters.searchedExpenses.data
    },
    totalItems() {
      return this.$store.getters.searchedExpenses.total
    },
    loading() {
      return this.$store.getters.loading
    },
    show: {
      get() {
        return this.$store.getters.showSearchedExpenses
      },
      set(arg) {
        this.$store.commit('showSearchedExpenses', arg)
      }
    }
  },
  created() {
    this.debouncedSearch = this._.debounce(this.search, 500)
  },
  data() {
    return {
      headers: [
        { text: 'Date', align: 'left', value: 'date' },
        { text: 'Subject', align: 'left', value: 'subject' },
        { text: 'Amount', align: 'left', value: 'amount' },
        { text: 'Desc', align: 'left', value: 'details', sortable: false }
      ],
      pagination: { sortDesc: [true], sortBy: ['date'] },
      searchItem: ''
    }
  },
  methods: {
    search() {
      let request = Object.assign({}, this.pagination, {
        search: this.searchItem
      })
      this.$store.dispatch('searchExpenses', request)
    }
  },
  watch: {
    pagination: {
      handler() {
        this.search()
      },
      deep: true
    },
    searchItem() {
      this.debouncedSearch()
    }
  }
}
</script>

<style></style>
