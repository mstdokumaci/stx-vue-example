import Vue from 'vue'

import App from './App'
import client from './client'

Vue.config.productionTip = false

Object.defineProperty(
  Vue.prototype,
  '$client',
  {
    value: client,
    configurable: true
  }
)

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')
