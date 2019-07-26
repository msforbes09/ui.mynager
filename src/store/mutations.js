export default {
  alert(state, payload) {
    state.alert = payload
    state.showAlert = true
  },
  showAlert(state, payload) {
    state.showAlert = payload
  },
  drawer(state, payload) {
    state.drawer = payload
  },
  setToken(state, token) {
    state.token = token
  },
  loading(state, payload) {
    state.loading = payload
  },
  logging(state, payload) {
    state.logging = payload
  },
  setUser(state, payload) {
    state.user = payload
  },
  incomes(state, payload) {
    state.incomes = payload
  },
  income(state, payload) {
    state.income = payload
  },
  showIncome(state, payload) {
    state.showIncome = payload
  },
  createIncome(state, payload) {
    state.createIncome = payload
  },
  expenses(state, payload) {
    state.expenses = payload
  },
  showDailyExpenses(state, payload) {
    state.showDailyExpenses = payload
  },
  dailyExpenses(state, payload) {
    state.dailyExpenses = payload
  },
  date(state, payload) {
    state.date = payload
  },
  expense(state, payload) {
    state.expense = payload
  },
  showExpense(state, payload) {
    state.showExpense = payload
  },
  searchedExpenses(state, payload) {
    state.searchedExpenses = payload
  },
  showSearchedExpenses(state, payload) {
    state.showSearchedExpenses = payload
  },
  createExpense(state, payload) {
    state.createExpense = payload
  },
  pagination(state, payload) {
    state.pagination = payload
  }
}
