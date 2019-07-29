import axios from 'axios'
import router from './../router'

export default {
  login(context, credential) {
    context.commit('loading', true)
    axios
      .post('/api/login', credential)
      .then(res => {
        const token = res.data.access_token
        localStorage.setItem('access_token', token)
        context.commit('setToken', token)
        router.push({ name: 'welcome' })
        context.commit('alert', {
          message: 'Successfully logged in.',
          color: 'blue'
        })
      })
      .finally(() => {
        context.commit('loading', false)
      })
  },
  sendResetPassword(context, credential) {
    context.commit('loading', true)
    axios
      .post('/api/password/email', credential)
      .then(() => {
        router.push({ name: 'login' })
      })
      .finally(() => {
        context.commit('loading', false)
      })
  },
  resetPassword(context, credential) {
    context.commit('loading', true)
    axios
      .post('/api/password/reset', credential)
      .then(() => {
        router.push({ name: 'login' })
      })
      .finally(() => {
        context.commit('loading', false)
      })
  },
  logout(context) {
    context.commit('logging', true)
    axios.post('api/logout').then(() => {
      context.dispatch('clearToken')
      router.push({ name: 'login' })
      context.commit('logging', false)
    })
  },
  clearToken(context) {
    localStorage.removeItem('access_token')
    context.commit('setToken', null)
    router.push({ name: 'login' })
  },
  getSummary(context) {
    context.commit('loading', true)
    axios.get('/api/summary').then(res => {
      context.commit('setUser', res.data)
      context.commit('loading', false)
    })
  },
  getIncomes(context, pagination) {
    context.commit('loading', true)
    axios.post('/api/income', pagination).then(res => {
      context.commit('incomes', res.data)
      context.commit('loading', false)
      context.commit('pagination', pagination)
    })
  },
  showIncome(context, id) {
    context.commit('loading', true)
    axios.get('/api/income/' + id).then(res => {
      context.commit('loading', false)
      context.commit('income', res.data)
      context.commit('showIncome', true)
    })
  },
  storeIncome(context, income) {
    context.commit('loading', true)
    axios
      .post('/api/income/store', income)
      .then(() => {
        context.commit('createIncome', false)
        context.dispatch('getIncomes', context.getters.pagination)
      })
      .finally(() => {
        context.commit('loading', false)
      })
  },
  getExpenses(context, pagination) {
    context.commit('loading', true)
    axios.post('/api/expense', pagination).then(res => {
      context.commit('expenses', res.data)
      context.commit('loading', false)
      context.commit('pagination', pagination)
    })
  },
  getDailyExpenses(context, date) {
    context.commit('loading', true)
    axios.get('/api/expense/date/' + date).then(res => {
      context.commit('loading', false)
      context.commit('showDailyExpenses', true)
      context.commit('dailyExpenses', res.data)
      context.commit('date', date)
    })
  },
  getExpense(context, id) {
    context.commit('loading', true)
    axios.get('/api/expense/' + id).then(res => {
      context.commit('loading', false)
      context.commit('expense', res.data)
      context.commit('showExpense', true)
    })
  },
  searchExpenses(context, pagination) {
    context.commit('loading', true)
    axios.post('/api/expense/search', pagination).then(res => {
      context.commit('loading', false)
      context.commit('searchedExpenses', res.data)
    })
  },
  storeExpense(context, expense) {
    context.commit('loading', true)
    axios
      .post('/api/expense/store', expense)
      .then(() => {
        context.commit('createExpense', false)
        context.dispatch('getExpenses', context.getters.pagination)
        context.dispatch('getDailyExpenses', expense.date)
      })
      .finally(() => {
        context.commit('loading', false)
      })
  }
}
