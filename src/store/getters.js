export default {
  alert(state) {
    return state.alert
  },
  showAlert(state) {
    return state.showAlert
  },
  loggedIn(state) {
    return state.token !== null
  },
  token(state) {
    return state.token
  },
  loading(state) {
    return state.loading
  },
  logging(state) {
    return state.logging
  },
  user(state) {
    return state.user
  },
  incomes(state) {
    return state.incomes
  },
  income(state) {
    return state.income
  },
  showIncome(state) {
    return state.showIncome
  },
  createIncome(state) {
    return state.createIncome
  },
  expenses(state) {
    return state.expenses
  },
  showDailyExpenses(state) {
    return state.showDailyExpenses
  },
  dailyExpenses(state) {
    return state.dailyExpenses
  },
  date(state) {
    return state.date
  },
  expense(state) {
    return state.expense
  },
  showExpense(state) {
    return state.showExpense
  },
  searchedExpenses(state) {
    return state.searchedExpenses
  },
  showSearchedExpenses(state) {
    return state.showSearchedExpenses
  },
  createExpense(state) {
    return state.createExpense
  },
  error(state) {
    return state.error
  },
  pagination(state) {
    return state.pagination
  }
}
