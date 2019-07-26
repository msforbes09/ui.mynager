import Error from '../helper/Error'

export default {
  alert: {},
  showAlert: false,
  error: new Error(),
  date: new Date().toISOString().substr(0, 10),
  drawer: true,
  loading: false,
  logging: false,
  user: {},
  token: localStorage.getItem('access_token') || null,
  incomes: {},
  income: {},
  showIncome: false,
  createIncome: false,
  expenses: {},
  showDailyExpenses: false,
  dailyExpenses: [],
  expense: {},
  showExpense: false,
  searchedExpenses: {},
  showSearchedExpenses: false,
  createExpense: false,
  pagination: null
}
