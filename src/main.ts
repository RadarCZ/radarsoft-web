import '@babel/polyfill'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

const hostname = () => {
  let hostname = ''
  if (process.env.NODE_ENV === 'production') {
    hostname = `${window.location.hostname}`
  } else {
    hostname = `${window.location.hostname}:8000`
  }
  return hostname
}

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(VueI18n)

const messages = {
  en: require('./locales/en.json'),
  cs: require('./locales/cs.json')
}

const i18n = new VueI18n({
  locale: store.state.locale,
  messages
})

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? `https://${hostname()}/api` : `http://${hostname()}/api`
axios.defaults.headers.common['Accept'] = 'application/json'

new Vue({
  router,
  store,
  i18n,
  created () {
    this.$vuetify.theme = {
      primary: '#4CAF50',
      accent: '#FF9800',
      secondary: '#757575',
      info: colors.lightBlue.lighten2,
      warning: colors.orange.lighten2,
      error: colors.red.base,
      success: colors.green.base
    }
  },
  render: h => h(App)
}).$mount('#app')
